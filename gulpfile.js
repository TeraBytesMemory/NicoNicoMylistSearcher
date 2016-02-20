var gulp = require('gulp');
var $ = require("gulp-load-plugins")();
var webpackConfig = require('./webpack.config.js');


gulp.task('default', function () {
    gulp.watch(['./src/*.js', './src/*.jsx',
                '!/src/flycheck*.js', '!/src/flycheck*.jsx'], ['build']);
});

gulp.task('build', function () {
    return gulp.src(['./src/*.js', './src/*.jsx',
                     './src/*/*.js', './src/*/*.jsx'])
        .pipe($.plumber())
        .pipe($.webpack(webpackConfig))
        .pipe($.uglify())
        .pipe(gulp.dest(''));
});
