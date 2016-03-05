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
    buildJavascripFolder = 'target/js/';
    buildCssFolder = 'target/css/';

gulp.task('js:hint', function() {
  return gulp.src(appJavascriptFolder)
             .pipe(jshint())
             .pipe(jshint.reporter('default', { verbose: true }));
});

gulp.task('css:lint', function() {
  return  gulp.src(appCssFolder)
             .pipe(lesshint())
            .pipe(lesshint.reporter());
});

gulp.task('js:compile', function() {
  return gulp.src(appJavascriptFolder)
             .pipe(jshint())
             .pipe(uglify())
             .pipe(gulp.dest(buildJavascripFolder));
});

gulp.task('css:compile', function() {
  return gulp.src(appCssFolder)
             .pipe(less())
             .pipe(minifyCSS())
             .pipe(gulp.dest(buildCssFolder));
});

gulp.task('zip', function() {
  var now = moment(new Date());
  return gulp.src('target/*')
             .pipe(zip(now.format('YYYYMMDD')+'.zip'))
             .pipe(gulp.dest('zip'));
});

gulp.task('dev', function() {
  gulp.watch(appJavascriptFolder, ['jshint']);
  gulp.watch(appCssFolder, ['lesslint']);
});

gulp.task('runtest', sequence('js:hint','css:lint'));

gulp.task('build',['runtest'],sequence('js:compile','css:compile','zip'));