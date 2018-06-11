const path = require('path')
const download = require('download-git-repo')
const ora = require('ora')

module.exports = function (target, git_url) {
    target = path.join(target || '.');
    return new Promise((resolve, reject) => {
        const spinner = ora(`正在下载项目模板，源地址：${git_url}`)

        spinner.start()
        download(git_url, target, {
            clone: true,
        },
            (err) => {
                if (err) {
                    spinner.fail()
                    reject(err)
                } else {
                    spinner.succeed()
                    resolve(target)
                }
            })
    })
}