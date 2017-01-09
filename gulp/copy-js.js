'use strict';

var gulp = require('gulp');

module.exports = function () {
    return gulp.src([
        './node_modules/govuk_frontend_toolkit/javascripts/**/*',
        './node_modules/govuk_template_jinja/assets/javascripts/**/*',
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/jquery/dist/jquery.min.map'
    ])
    .pipe(gulp.dest('./dist/js'));
};
