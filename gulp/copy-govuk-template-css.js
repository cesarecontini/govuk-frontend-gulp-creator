'use strict';

var gulp = require('gulp');

module.exports = function () {
    return gulp.src([
        './node_modules/govuk_template_jinja/assets/stylesheets/**/*',
    ])
    .pipe(gulp.dest('./dist/css'));
};
