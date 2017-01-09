'use strict';

var gulp = require('gulp');
var shell = require('gulp-shell');
var _package = require('./../package.json');

module.exports = function () {
    return gulp.src('./package.json')
        .pipe(shell([ './scripts/deploy.sh' ]));
};
