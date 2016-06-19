var gulp = require('gulp');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var gulpWebpack = require('gulp-webpack');
var browserSync = require('browser-sync').create();
var plugins = require('gulp-load-plugins');
var jasmine = require('gulp-jasmine');
var KarmaServer = require('karma').Server;

gulp.task("webpack", function() {
    return gulp.src('./app/index.js')
    .pipe( gulpWebpack(webpackConfig, webpack) )
    .pipe(gulp.dest('./dist/'))
});

gulp.task("copyIndex", function() {
   return gulp.src('./app/index.html')
   .pipe(gulp.dest('./dist/'));
});

gulp.task('reload', function () {
	browserSync.reload();
});

gulp.task('watch', function () {

	gulp.watch([
		'./dist/bundle.js',
		'./dist/index.html'
	]).on('change', function (file) {
		browserSync.reload();
	});

	gulp.watch('./app/**/*.js', ['webpack']);
	gulp.watch('./app/index.html', ['copyIndex']);

});

gulp.task('test', function () {
    gulp.src('./spec/test.js')
        .pipe(jasmine());
});

gulp.task('serve', ['watch'], function () {

	browserSync.init({
		notify: false,
		server: {
			baseDir: "./dist"
		}
	});

});