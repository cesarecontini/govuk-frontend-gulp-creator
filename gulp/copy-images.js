'use strict';

var gulp = require('gulp');

module.exports = function () {
    return gulp.src([
        './node_modules/govuk_frontend_toolkit/images/**/*',
        './node_modules/govuk_template_jinja/assets/images/**/*',
    ])
    .pipe(gulp.dest('./dist/images'));
};
