"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const download_1 = require("./lib/download");
const create = (projectName) => __awaiter(void 0, void 0, void 0, function* () {
    inquirer_1.default
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
            default: "typescript",
        },
    ])
        .then(({ template }) => {
        if (template === "custom") {
            // 输入地址
            inquirer_1.default
                .prompt([
                {
                    name: "path",
                    type: "input",
                    message: "请输入地址",
                    default: "owner/name",
                },
            ])
                .then(({ path }) => {
                (0, download_1.loadRemoteAsset)(projectName, "custom", path);
            });
        }
        else {
            // 下载
            (0, download_1.loadRemoteAsset)(projectName, template);
        }
    });
});
exports.create = create;
