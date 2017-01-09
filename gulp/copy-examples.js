'use strict';

var gulp = require('gulp');

module.exports = function () {
    return gulp.src([
            './src/examples/**/*'
        ])
        .pipe(gulp.dest('./dist/examples'));
};
