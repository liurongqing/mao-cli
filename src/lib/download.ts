import download from "download-git-repo";
import { templateType } from "../create";
import { templates } from "../config";

export const loadRemoteAsset = (template: templateType, customUrl?: string) => {
  const url =
    template === "custom" ? customUrl : templates[template]?.repository;
  console.log("url", url);
  if (!url) return;

  console.log("下载中》。。");
  download(url, "dist2", { clone: false }, function (err: any) {
    if (!err) {
      console.log("下载成功");
      return;
    }
    console.log("err", err);
    delete err?.headers;
    console.table(err);
  });
};
