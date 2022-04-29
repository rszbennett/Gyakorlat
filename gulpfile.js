const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


function style() {
    return gulp.src('./scss/**/*.scss')

    .pipe(sass())

    .pipe(gulp.dest('./css'))
}

exports.style = style;