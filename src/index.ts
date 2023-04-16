#! /usr/bin/env node
import figlet from "figlet";
import { Command } from "commander";
import path from "path";
import fs from "fs";

import { create } from "./create";

const packagePath = path.resolve(__dirname, "../package.json");

const packageData = JSON.parse(fs.readFileSync(packagePath, "utf8"));
const program = new Command();
console.log(figlet.textSync("Mao Cli Manager"));

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
  .action(create);

program.parse(process.argv);

const options = program.opts();

async function listDirContents(filepath: string) {
  try {
    const files = await fs.promises.readdir(filepath);
    const detailedFilesPromises = files.map(async (file: string) => {
      const fileDetails = await fs.promises.lstat(path.resolve(filepath, file));
      const { size, birthtime } = fileDetails;
      return {
        filename: file,
        "size(KB)": size,
        created_at: birthtime,
      };
    });
    const detailedFiles = await Promise.all(detailedFilesPromises);
    console.table(detailedFiles);
  } catch (error) {
    console.error("Error", error);
  }
}

function createDir(filepath: string) {
  if (!fs.existsSync(filepath)) {
    fs.mkdirSync(filepath);
    console.log(`创建目录 ${filepath} 成功`);
  }
}

function createFile(filepath: string) {
  fs.openSync(filepath, "w");
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
