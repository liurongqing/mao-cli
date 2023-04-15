import download from "download-git-repo";
import { templateType } from "../create";
import { templates } from "../config";
import ora from "ora";
import chalk from "chalk";

export const loadRemoteAsset = (
  projectName: string,
  template: templateType,
  customUrl?: string
) => {
  const url =
    template === "custom" ? customUrl : templates[template]?.repository;

  if (!url) {
    return;
  }

  const spinner = ora({
    text: "开始下载中...",
    spinner: "bouncingBar",
  }).start();

  download(url, projectName, { clone: false }, function (err: any) {
    if (!err) {
      spinner.succeed(chalk.green("下载成功，请执行以下命令："));
      spinner.stopAndPersist({
        text: "\n",
      });
      const text1 = chalk.cyan("cd ") + projectName;
      const text2 = chalk.cyan("npm install");
      const text3 = chalk.cyan("npm start\n");
      spinner.stopAndPersist({
        text: text1,
      });
      spinner.stopAndPersist({
        text: text2,
      });
      spinner.stopAndPersist({
        text: text3,
      });
      return;
    }
    spinner.fail(chalk.red("下载失败!!! \n失败原因如下："));
    delete err?.headers;
    console.table(err);
  });
};
