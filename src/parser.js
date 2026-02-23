import fs from 'fs'
import path from 'path'

const getAbsolutePath = filePath => path.resolve(process.cwd(), filePath)
const readFile = filePath => fs.readFileSync(filePath, 'utf-8')

export const parser = (filePath) => {
  const fileAbsolutePath = getAbsolutePath(filePath)
  const file = readFile(fileAbsolutePath)
  return JSON.parse(file)
}
