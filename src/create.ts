import inquirer from "inquirer";

import { templates } from "./config";
import { loadRemoteAsset } from "./lib/download";

export type templateType = "typescript" | "console" | "html5" | "custom";

export const create = async (projectName: string) => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "template",
        message: "请选择模板",
        choices: Object.values(templates).map((v) => ({
          key: v.key,
          name: v.name,
          value: v.value,
        })),
        default: "typescript",
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
