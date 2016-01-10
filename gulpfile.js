var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var $ = require("gulp-load-plugins")();
var webpackConfig = require('./webpack.config.js');

gulp.task('default', function () {
    
});

gulp.task('build', function () {
    return gulp.src(['./src/*.js', './compiled/*.js'])
        .pipe($.webpack(webpackConfig))
        .pipe(gulp.dest(''));
});
