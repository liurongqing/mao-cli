"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadRemoteAsset = void 0;
const download_git_repo_1 = __importDefault(require("download-git-repo"));
const config_1 = require("../config");
const ora_1 = __importDefault(require("ora"));
const chalk_1 = __importDefault(require("chalk"));
const loadRemoteAsset = (projectName, template, customUrl) => {
    var _a;
    const url = template === "custom" ? customUrl : (_a = config_1.templates[template]) === null || _a === void 0 ? void 0 : _a.repository;
    if (!url) {
        return;
    }
    const spinner = (0, ora_1.default)({
        text: "开始下载中...",
        spinner: "bouncingBar",
    }).start();
    (0, download_git_repo_1.default)(url, projectName, { clone: false }, function (err) {
        if (!err) {
            spinner.succeed(chalk_1.default.green("下载成功，请执行以下命令："));
            spinner.stopAndPersist({
                text: "\n",
            });
            const text1 = chalk_1.default.cyan("cd ") + projectName;
            const text2 = chalk_1.default.cyan("npm install");
            const text3 = chalk_1.default.cyan("npm start\n");
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
        spinner.fail(chalk_1.default.red("下载失败!!! \n失败原因如下："));
        err === null || err === void 0 ? true : delete err.headers;
        console.table(err);
    });
};
exports.loadRemoteAsset = loadRemoteAsset;
