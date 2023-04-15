import figlet from "figlet";
import { Command } from "commander";

const program = new Command();

program
  .version("2.0.0")
  .description("Here are some templates for managing projects")
  .option("-l, --ls [value]", "List directory contens")
  .parse(process.argv);

const options = program.opts();

console.log("1..");

console.log(figlet.textSync("Mao Cli Manager"));

console.log({ options });

// console.log({ program });

// console.log("figlet", figlet);

// console.log(figlet.textSync("Mao Cli Manager1"));
// const figlet = require("figlet");
