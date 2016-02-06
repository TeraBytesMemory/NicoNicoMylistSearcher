var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var $ = require("gulp-load-plugins")();
var webpackConfig = require('./webpack.config.js');
var Karma = require('karma').Server;


gulp.task('default', function () {
    gulp.watch(['./src/*.js', './src/*.jsx',
                '!/src/flycheck*.js', '!/src/flycheck*.jsx'], ['build']);
    gulp.watch(['./spec/support/*spec.js', './spec/support/*spec.jsx',
                '!/spec/support/flycheck_*.js', '!/spec/support/flycheck_*.jsx'],
               ['test']);
});

gulp.task('build', function () {
    return gulp.src(['./src/*.js', './src/*.jsx',
                     './src/*/*.js', './src/*/*.jsx'])
        .pipe($.plumber())
        .pipe($.webpack(webpackConfig))
        .pipe(gulp.dest('build/'));
});

gulp.task('test', function() {
    gulp.src(['./spec/support/*spec.js', './spec/support/*spec.jsx'])
        .pipe($.plumber())
        .pipe(new Karma({
            configFile: __dirname + '/karma.conf.js',
            action: 'watch'
        }).start());
});
