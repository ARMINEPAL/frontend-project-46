import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs'
import path from 'path'
import { expect, test } from '@jest/globals'
import buildTree from '../src/index.js'


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const result = fs.readFileSync(getFixturePath('result.txt'), 'utf-8')
test('gendiff', () => {
    expect(buildTree(getFixturePath('file1.json'), getFixturePath('file2.json') )).toBe(result)
    expect(buildTree(getFixturePath('filepath1.yml'), getFixturePath('filepath2.yml') )).toBe(result)
})
