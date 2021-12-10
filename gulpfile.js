const { src, dest } = require("gulp");
const rename = require("gulp-rename");

function copy(done) {
    const reg = /^leetcode\//;
    const file = process.env.file.replace(/\\/g, "/");
    console.log(file);
    if (reg.test(file)) {
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
        return src(file)
            .pipe(
                rename(function (path) {
                    return {
                        dirname: path.basename,
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

exports.default = copy;
