## 快速搭建项目

重写中...


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

