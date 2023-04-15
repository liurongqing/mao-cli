## 快速搭建项目

重写中...

## 快速使用 mao-cli

1. 安装
    ```bash
    npm i -g mao-cli
    ```
2. 使用
    ```bash
    mao create dirname
    ```
3. 选择项目模板
    选择指定几个项目模板或自定义

    自定义输入 git 仓库地址， 规则如下
    GitHub:         `github:owner/name` 或者 `owner/name`
    GitLab:         `gitlab:owner/name`
    BitBucket:      `bitbucket:owner/name`
    GitLab自定义源:   `gitlab:custom.com:owner/name`
    Direct直接访问:   `direct:url`


    不加分支，则为默认分支
    指定分支，如：`owner/name#main`

    格式参考：https://gitlab.com/flippidippi/download-git-repo


### 命令
1. 快速配置 eslint 规则
    <small>该规则使用了，typescript+eslint+prettier, 做了以下2个操作</small>
    1. 生成 `.eslintrc.cjs` 配置
    2. 安装依赖到 package.json 中
    ```bash
    mao g eslintrc # mao generate eslintrc
    ```

2. 快速生成 typescript+eslint+prettier npm 安装包字符串
    ```bash
    mao npm eslint
    ```

3. 快速生成项目

    ```bash
    mao new dirname # 下一步选择模块

    # ts 项目    typescript  学习ts使用
    # 中后台项目  console 集成 ant.design之类的UI库
    # h5 项目    html5 
    # app 项目   app
    ```

## 依赖
1. inquirer 使用 ^8
    ```bash
    npm i inquirer@8
    ```
2. ora 使用 ^5
    ```bash
    npm i ora@5
    ```
3. chalk 使用 ^4
    ```bash
    npm i chalk@4
    ```

## 优化
不管是模板还是自定义，默认http下载，失败了则再重新进行git clone 下载

## 参考
[下载仓库 download-git-repo](https://gitlab.com/flippidippi/download-git-repo)

ora 加图标， chalk 改颜色
ora 图标选择 https://github.com/sindresorhus/cli-spinners/blob/main/spinners.json