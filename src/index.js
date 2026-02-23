import gendiff from './gendiff.js'
import { parser } from './parser.js'

export default (filePath1, filePath2) => {
  const data1 = parser(filePath1)
  const data2 = parser(filePath2)
  return gendiff(data1, data2)
}
