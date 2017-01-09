const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

const repo_root = __dirname + '/../';
const govuk_frontend_toolkit_root =  repo_root + 'node_modules/govuk_frontend_toolkit/stylesheets'; // 1.
const govuk_elements_sass_root =  repo_root + 'node_modules/govuk-elements-sass/public/sass';       // 2.

// Compile scss files to css
module.exports = function () {
    return gulp.src('./src/scss/**/*.scss')
    .pipe(sass({includePaths: [
        govuk_frontend_toolkit_root,
        govuk_elements_sass_root
    ]}).on('error', sass.logError))
    .pipe(rename('nhs.css'))
    .pipe(gulp.dest('./dist/css'));
};
