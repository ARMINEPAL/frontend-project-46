import stringify from "./stringify.js";
import _ from 'lodash'

const getType = (tree) => tree.type

const getKey = (tree) => tree.key

const getValue = (tree) => tree.value

const getOldValue = tree => tree.value1

const getNewValue = (tree) => tree.value2

const spaceCount = 4 
const specialSymbols = 2

const getIndent = (depth, type = 'unchanged') => {
    if (type === 'added' || type === 'removed') return ' '.repeat(spaceCount * depth - specialSymbols)
        return ' '.repeat(spaceCount * depth)
}

const format = (tree, formatName = 'stylish', depth = 1) => {
    if (formatName === 'stylish') {
        const result = tree.reduce((acc, elem) => {
            const type = getType(elem)
            const key = getKey(elem)
            const value = stringify(getValue(elem), depth + 1)
            const oldValue = stringify(getOldValue(elem), depth + 1)
            const newValue = stringify(getNewValue(elem), depth + 1)

            switch (type) {
                case 'removed':
                    return `${acc}${getIndent(depth, 'removed')}- ${key}: ${value}\n`;

                case 'added':
                   return `${acc}${getIndent(depth, 'added')}+ ${key}: ${value}\n`;

                case 'unchanged':
                    return `${acc}${getIndent(depth)}${key}: ${value}\n`;

                case 'changed':
                    return `${acc}${getIndent(depth, 'removed')}- ${key}: ${oldValue}\n${getIndent(depth, 'added')}+ ${key}: ${newValue}\n`

                    case 'nested':
                        return `${acc}${getIndent(depth)}${key}: ${format(elem.children, formatName, depth + 1)}\n`                    

                    default:
                        return acc

            }
        }, '')
        const bracketIndent = ' '.repeat(depth * spaceCount - spaceCount)
      return `{\n${result}${bracketIndent}}`
    }
}

export default format