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

program
  .command("create")
  .description("Create Project Template")
  .argument("<app-name>", "project name")
  .action(create);

program.parse(process.argv);

// 若没有参数则显示帮助信息
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
