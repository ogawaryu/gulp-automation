var gulp   = require('gulp'),
	uglify = require('gulp-uglify'),
	minifyCSS = require('gulp-minify-css'),
	less = require('gulp-less'),
	jshint = require('gulp-jshint'),
	lesshint = require('gulp-lesshint'),
	sequence = require('gulp-sequence'),
	zip = require('gulp-zip'),
	moment = require("moment");

var appJavascriptFolder = 'app/js/**/*.js',
	appCssFolder = 'app/scss/**/*.less',
	buildJavascripFolder = 'build/js/';
	buildCssFolder = 'build/css/';

gulp.task('jshint', function() {
	return gulp.src(appJavascriptFolder)
				.pipe(jshint())
				.pipe(jshint.reporter('default', { verbose: true }));
});

gulp.task('lesslint', function() {
	return 	gulp.src(appCssFolder)
				.pipe(lesshint())
				.pipe(lesshint.reporter());
});

gulp.task('compilejs', function() {
	return gulp.src(appJavascriptFolder)
				.pipe(jshint())
				.pipe(uglify())
				.pipe(gulp.dest(buildJavascripFolder));
});

gulp.task('compilecss', function() {
	return gulp.src(appCssFolder)
				.pipe(less())
				.pipe(minifyCSS())
				.pipe(gulp.dest(buildCssFolder));
});

gulp.task('zip', function() {
	var now = moment(new Date());
	return gulp.src('build/*')
				.pipe(zip(now.format('YYYYMMDD')+'.zip'))
				.pipe(gulp.dest('zip'));
});

gulp.task('dev', function() {
	gulp.watch(appJavascriptFolder, ['jshint']);
	gulp.watch(appCssFolder, ['lesslint']);
});

gulp.task('runtest', sequence('jshint','lesslint'));

gulp.task('build',['runtest'],sequence('compilejs','compilecss','zip'));