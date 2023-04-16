#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const figlet_1 = __importDefault(require("figlet"));
const commander_1 = require("commander");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const create_1 = require("./create");
const packagePath = path_1.default.resolve(__dirname, "../package.json");
const packageData = JSON.parse(fs_1.default.readFileSync(packagePath, "utf8"));
const program = new commander_1.Command();
console.log(figlet_1.default.textSync("Mao Cli Manager"));
program
    .version(packageData.version)
    .description("Here are some templates for managing projects");
program
    .command("create")
    .description("Create Project Template")
    .argument("<app-name>", "project name")
    .action(create_1.create);
program.parse(process.argv);
// 若没有参数则显示帮助信息
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
