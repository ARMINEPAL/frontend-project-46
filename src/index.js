import { parser } from './parser.js'
import fs from 'fs'
import path from 'path'
import buildTree from './treeBuilder.js'
import format from './formater.js'

const getAbsolutePath = filePath => path.resolve(process.cwd(), filePath)
const readFile = filePath => fs.readFileSync(getAbsolutePath(filePath), 'utf-8')

export default (filePath1, filePath2, formatName = 'stylish') => {
    const data1 = parser(readFile(filePath1), path.extname(filePath1))
    const data2 = parser(readFile(filePath2), path.extname(filePath2))
    const tree = buildTree(data1, data2)
    return format(tree, formatName) // if( type: 'nested') применяем рекурсию
}
