#!/usr/bin/env node

const program = require('commander')
const path = require('path')
const fs = require('fs')
const glob = require('glob')
const download = require('../lib/download')
const inquirer = require('inquirer')
const chalk = require('chalk')
const logSymbols = require('log-symbols')

program.usage('<project-name>').parse(process.argv);
let projectName = program.args[0];
if (!projectName) {
    program.help();
    return false;
}

const list = glob.sync('*');

let rootName = path.basename(process.cwd());
let next = null

if (list.length) {

    // 如果当前目录不为空
    const isExist = list.filter(name => {
        const fileName = path.resolve(process.cwd(), path.join('.', name));
        const isDir = fs.statSync(fileName).isDirectory();
        return projectName === name && isDir;
    }).length !== 0;

    if (isExist) {
        console.error(logSymbols.error, chalk.red(`项目 ${projectName} 已经存在`));
        return false;
    }

    next = Promise.resolve(projectName)
} else if (rootName === projectName) {

    // 空目录且生成文件名与父级目录名相同时
    next = inquirer.prompt([
        {
            name: 'buildInCurrent',
            message: '当前目录为空，且目录名称和项目名称相同，是否直接在当前目录下创建新项目？',
            type: 'confirm',
            default: true
        }
    ]).then(answer => {
        return Promise.resolve(answer.buildInCurrent ? '.' : projectName);
    })
} else {
    next = Promise.resolve(projectName);
}

next && go()

function go() {
    next.then(projectName => {

        return inquirer.prompt([
            {
                name: 'custom',
                message: '是否自定义 github 库路径',
                type: 'confirm',
                default: false
            }
        ]).then(answer => {
            if (answer.custom) {
                return inquirer.prompt([
                    {
                        name: 'customTemplateName',
                        message: '请输入库路径（如 username/project-name）',
                        default: 'liurongqing/phaser-template'
                    }
                ])
            } else {
                return inquirer.prompt([
                    {
                        name: 'templateName',
                        message: '模版的名称(react or phaser)',
                        default: 'phaser'
                    }
                ])
            }
        }).then(answers => {
            let templateName = answers.templateName;
            let customTemplateName = answers.customTemplateName;
            let git_url;
            if (customTemplateName) {
                if(customTemplateName.search('/') === -1){
                    return Promise.reject(new Error('请输入正确的github库路径，如：username/project-name'));
                }
                git_url = customTemplateName + '#master';
            } else {
                if (templateName === 'react') {
                    git_url = 'liurongqing/react-template#master';
                }

                if (templateName === 'phaser') {
                    git_url = 'liurongqing/phaser-template#master';
                }
            }

            if (!git_url) {
                return Promise.reject(new Error('请创建正确的模版'));
            }

            if (projectName !== '.') {
                fs.mkdirSync(projectName);
            }

            return download(projectName, git_url)
                .then(target => {
                    return {
                        name: projectName,
                        root: projectName,
                        downloadTemp: target
                    }
                })
        }).then(context => {
            console.log(logSymbols.success, chalk.green(`创建 ${context.name} 成功:)`));
            console.log();
            console.log(chalk.green('cd ' + context.name + '\nyarn install or npm install\nyarn start or npm start'));
        }).catch(err => {
            console.error(logSymbols.error, chalk.red(`创建失败：${err.message}`));
        })
    })
}
