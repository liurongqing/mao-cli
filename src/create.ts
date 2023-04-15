// import inquirer from "inquirer";
// const inquirer = require("inquirer");
// const inquirer = import("inquirer");
// import inquirer = require("inquirer");
import inquirer from "inquirer";

import { loadRemoteAsset } from "./lib/download";

export type templateType = "typescript" | "console" | "html5" | "custom";

export const create = async (projectName: string) => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "template",
        message: "请选择模板",
        choices: [
          {
            key: "typescript",
            name: "typescript (学习)",
            value: "typescript",
          },
          {
            key: "console",
            name: "console    (中后台)",
            value: "console",
          },
          {
            key: "html5",
            name: "html5      (C端)",
            value: "html5",
          },
          {
            key: "custom",
            name: "custom     (自定义)",
            value: "custom",
          },
        ],
        default: "custom",
      },
    ])
    .then(({ template }: { template: templateType }) => {
      if (template === "custom") {
        // 输入地址
        inquirer
          .prompt([
            {
              name: "path",
              type: "input",
              message: "请输入地址",
              default: "owner/name",
            },
          ])
          .then(({ path }: { path: string }) => {
            loadRemoteAsset(projectName, "custom", path);
          });
      } else {
        // 下载
        loadRemoteAsset(projectName, template);
      }
    });
};
