"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const figlet_1 = __importDefault(require("figlet"));
const commander_1 = require("commander");
const program = new commander_1.Command();
program
    .version("2.0.0")
    .description("Here are some templates for managing projects")
    .option("-l, --ls [value]", "List directory contens")
    .parse(process.argv);
const options = program.opts();
console.log("1..");
console.log(figlet_1.default.textSync("Mao Cli Manager"));
console.log({ options });
// console.log({ program });
// console.log("figlet", figlet);
// console.log(figlet.textSync("Mao Cli Manager1"));
// const figlet = require("figlet");
