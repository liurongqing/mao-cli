"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadRemoteAsset = void 0;
const download_git_repo_1 = __importDefault(require("download-git-repo"));
const config_1 = require("../config");
const loadRemoteAsset = (template, customUrl) => {
    var _a;
    const url = template === "custom" ? customUrl : (_a = config_1.templates[template]) === null || _a === void 0 ? void 0 : _a.repository;
    console.log("url", url);
    if (!url)
        return;
    console.log("下载中》。。");
    (0, download_git_repo_1.default)(url, "dist2", { clone: false }, function (err) {
        if (!err) {
            console.log("下载成功");
            return;
        }
        console.log("err", err);
        err === null || err === void 0 ? true : delete err.headers;
        console.table(err);
    });
};
exports.loadRemoteAsset = loadRemoteAsset;
