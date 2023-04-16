#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// .option("-l, --ls [value]", "List directory contens")
// .option("-m, --mkdir <value>", "Create a directory")
// .option("-t, --touch <value>", "Create a file");
program
    .command("create")
    .description("Create Project Template")
    .argument("<app-name>", "project name")
    .action(create_1.create);
program.parse(process.argv);
const options = program.opts();
function listDirContents(filepath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const files = yield fs_1.default.promises.readdir(filepath);
            const detailedFilesPromises = files.map((file) => __awaiter(this, void 0, void 0, function* () {
                const fileDetails = yield fs_1.default.promises.lstat(path_1.default.resolve(filepath, file));
                const { size, birthtime } = fileDetails;
                return {
                    filename: file,
                    "size(KB)": size,
                    created_at: birthtime,
                };
            }));
            const detailedFiles = yield Promise.all(detailedFilesPromises);
            console.table(detailedFiles);
        }
        catch (error) {
            console.error("Error", error);
        }
    });
}
function createDir(filepath) {
    if (!fs_1.default.existsSync(filepath)) {
        fs_1.default.mkdirSync(filepath);
        console.log(`创建目录 ${filepath} 成功`);
    }
}
function createFile(filepath) {
    fs_1.default.openSync(filepath, "w");
    console.log("已创建一个空文件");
}
if (options.ls) {
    const filepath = typeof options.ls === "string" ? options.ls : __dirname;
    listDirContents(filepath);
}
if (options.mkdir) {
    // createDir(path.resolve(__dirname, options.mkdir));
    createDir(options.mkdir);
}
if (options.touch) {
    createFile(options.touch);
    // createFile(path.resolve(__dirname, options.touch));
}
// 若没有参数则显示帮助信息
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
