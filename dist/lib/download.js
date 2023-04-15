"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadRemoteAsset = void 0;
const download_git_repo_1 = __importDefault(require("download-git-repo"));
const loadRemoteAsset = () => {
    console.log("download", download_git_repo_1.default);
};
exports.loadRemoteAsset = loadRemoteAsset;
