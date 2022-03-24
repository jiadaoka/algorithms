const { src, dest } = require("gulp");
const rename = require("gulp-rename");

const { Transform } = require("stream");
const { basename } = require("path");
const { existsSync } = require("fs");

/**
 * 创建时间文件名
 * @returns string
 */
function createDateName() {
    const time = new Date();
    const timeStr =
        time.getFullYear() +
        "_" +
        (time.getMonth() + 1 + "").padStart(2, 0) +
        "_" +
        (time.getDate() + "").padStart(2, 0) +
        " " +
        (time.getHours() + "").padStart(2, 0) +
        "_" +
        (time.getMinutes() + "").padStart(2, 0) +
        "_" +
        (time.getSeconds() + "").padStart(2, 0);

    console.log(timeStr);

    return timeStr;
}

function leetcodeSave(done) {
    const reg = /^leetcode\//;
    const file = process.env.file.replace(/\\/g, "/");
    console.log(file);
    if (reg.test(file)) {
        const timeStr = createDateName();
        return src(file)
            .pipe(
                rename(function (path) {
                    return {
                        dirname: "leetcode/" + path.basename,
                        basename: timeStr,
                        extname: ".js",
                    };
                })
            )
            .pipe(dest("./save"));
    } else {
        done();
    }
}

/**
 * 读取模板替换模板参数
 * @param {object} option
 * @param {object} option.params 替换参数
 * @returns
 */
function readFileTemplate(option) {
    const replaceParams = option.params;

    const transform = new Transform({
        objectMode: true,
        transform: function (chunk, enc, cb) {
            let file = chunk.contents.toString();

            for (const key in replaceParams) {
                const reg = new RegExp(`\\$\\#\\{${key}\\}\\#`, "g");
                file = file.replace(reg, replaceParams[key]);
            }

            const b = Buffer.from(file);

            chunk.contents = b;

            cb(null, chunk);
        },
    });

    return transform;
}

function createLeetcodeTestOnJest(done) {
    const reg = /^leetcode\//;
    const file = process.env.file.replace(/\\/g, "/");
    const bName = basename(file, ".js");

    const filePath = `tests/leetcode/${bName}.spec.js`;
    console.log(filePath);

    if (existsSync(filePath)) {
        console.log("文件已存在");
        done();
    } else {
        if (reg.test(file)) {
            return src("template/leetcodeTestOnJest.template.js")
                .pipe(
                    readFileTemplate({
                        params: { title: bName },
                    })
                )
                .pipe(
                    rename(function (path) {
                        return {
                            dirname: "leetcode/",
                            basename: bName,
                            extname: ".spec.js",
                        };
                    })
                )
                .pipe(dest("./tests"));
        } else {
            done();
        }
    }
}

exports.default = leetcodeSave;
exports.leetcode = leetcodeSave;
exports.createLeetcodeTest = createLeetcodeTestOnJest;
