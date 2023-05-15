"use strict"
function getPostById(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Could not fetch post.');
            }
            return response.json();
        });
}
// const gulp = require("gulp");
// const sass = require("gulp-sass");
// const cssnano = require("gulp-cssnano");
// const uglify = require("gulp-uglify");
// const concat = require("gulp-concat");
// const rename = require("gulp-rename");
//
// gulp.task("styles", () => {
//     return gulp.src("src/scss/**/*.scss")
//         .pipe(sass({ includePaths: ["node_modules"] }).on("error", sass.logError))
//         .pipe(cssnano())
//         .pipe(rename({suffix: ".min"}))
//         .pipe(gulp.dest("dist/css"));
// });
//
// gulp.task("scripts", () => {
//     return gulp.src("src/js/**/*.js")
//         .pipe(concat("main.js"))
//         .pipe(uglify())
//         .pipe(rename({suffix: ".min"}))
//         .pipe(gulp.dest("dist/js"));
// });
//
// gulp.task("watch", () => {
//     gulp.watch("src/scss/**/*.scss", gulp.series("styles"));
//     gulp.watch("src/js/**/*.js", gulp.series("scripts"));
// });
//
// gulp.task("default", gulp.series("styles", "scripts", "watch"));