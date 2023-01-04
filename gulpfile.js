const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", function () {
  return gulp
    .src("./scss/*.scss")
    .pipe(sass().on("error", sass.logError).pipe().pipe(gulp.dest("./css")));
});
