import _ from 'lodash'

const gendiff = (file1, file2) => {
  const keys1 = Object.keys(file1)
  const keys2 = Object.keys(file2)
  const keys = _.union(keys1, keys2)
  const sortedKeys = _.sortBy(keys)
  const result = sortedKeys.map((key) => {
    if (!Object.hasOwn(file2, key)) {
      return `${' '.repeat(2)}- ${key}: ${file1[key]}`
    }
    else if (!Object.hasOwn(file1, key)) {
      return `${' '.repeat(2)}+ ${key}: ${file2[key]}`
    }
    else if (file1[key] !== file2[key]) {
      return `${' '.repeat(2)}- ${key}: ${file1[key]}\n${' '.repeat(2)}+ ${key}: ${file2[key]}`
    }
    else {
      return `${' '.repeat(4)}${key}: ${file1[key]}`
    }
  })
  return `{\n${result.join('\n')}\n}`
}

export default gendiff
