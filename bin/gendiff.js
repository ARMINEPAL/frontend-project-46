#!/usr/bin/env node

import { Command } from "commander";

const program = new Command ()

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0')
    .argument('<filepath1>', 'путь до первого файла')
    .argument('<filepath2>', 'путь до второго файла')
    .option('-f, --format <type>', 'output format')

program.parse()