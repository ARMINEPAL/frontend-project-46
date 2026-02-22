import fs from 'fs'
import path from 'path'

const getAbsolutePath = (filePath) =>  path.resolve(process.cwd(), filePath)


const content1 = fs.readFileSync(getAbsolutePath('file1.json'), 'utf-8')
const content2 = fs.readFileSync(getAbsolutePath('file2.json'), 'utf-8')

const parser = (file) => {
    if (path.extname(file) === 'json') {
        return JSON.parse(file)
    }
}
