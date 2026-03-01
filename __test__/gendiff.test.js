import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs'
import path from 'path'
import { expect, test } from '@jest/globals'
import diff from '../src/index.js'


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const resultStylish = fs.readFileSync(getFixturePath('result.txt'), 'utf-8')
const resultPlain = fs.readFileSync(getFixturePath('resultPlain.txt'), 'utf-8')
test('gendiff', () => {
    expect(diff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish' )).toBe(resultStylish)
    expect(diff(getFixturePath('filepath1.yml'), getFixturePath('filepath2.yml') , 'stylish')).toBe(resultStylish)
    expect(diff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain' )).toBe(resultPlain)
    expect(diff(getFixturePath('filepath1.yml'), getFixturePath('filepath2.yml'), 'plain')).toBe(resultPlain)

    expect(diff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toBe(resultStylish)
    expect(diff(getFixturePath('filepath1.yml'), getFixturePath('filepath2.yml'))).toBe(resultStylish)
})
