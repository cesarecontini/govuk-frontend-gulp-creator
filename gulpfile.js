'use strict';

var gulp = require('gulp');

gulp.task('clean', require('./gulp/clean'));
gulp.task('sass', require('./gulp/sass'));
gulp.task('sass-min', require('./gulp/sass-min'));
gulp.task('copy-images', require('./gulp/copy-images'));
gulp.task('copy-js', require('./gulp/copy-js'));
gulp.task('copy-examples', require('./gulp/copy-examples'));
gulp.task('copy-govuk-template-css', require('./gulp/copy-govuk-template-css'));

gulp.task('build', [ 'clean', 'copy-images', 'copy-govuk-template-css', 'copy-js', 'copy-examples', 'sass', 'sass-min' ]);
gulp.task('default', [ 'build' ] );
