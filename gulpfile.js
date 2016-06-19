var gulp = require('gulp');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var gulpWebpack = require('gulp-webpack');
var browserSync = require('browser-sync').create();
var plugins = require('gulp-load-plugins');
var jasmine = require('gulp-jasmine');

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

gulp.task("vendor", function() {
	return gulp.src([
		'./bower_components/angular-ui-router/release/angular-ui-router.min.js',
		'./bower_components/angular/angular.min.js',
		'./bower_components/angular-animate/angular-animate.min.js',
		'./bower_components/angular-mocks/angular-mocks.js'
	])
	.pipe(plugins.order([
			'angular/angular.min.js',
			'angular-ui-router/release/angular-ui-router.min.js',
			'angular-animate/angular-animate.min.js'
		], {
			base: './app/bower_components'
		})
	)
	.pipe(plugins.concat('vendor.js'))
	.pipe(plugins.size())
	.pipe(gulp.dest('./dist/'));
});

gulp.task('jasmine', function () {
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