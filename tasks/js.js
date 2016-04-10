var gulp   = require('gulp'),
		uglify = require('gulp-uglify'),
		jshint = require('gulp-jshint');

var appJavascriptFolder = 'src/js/**/*.js',
    buildJavascripFolder = 'target/js/';

gulp.task('js:compile', function() {
  return gulp.src(appJavascriptFolder)
             .pipe(jshint())
             .pipe(uglify())
             .pipe(gulp.dest(buildJavascripFolder));
});

gulp.task('js:hint', function() {
  return gulp.src(appJavascriptFolder)
             .pipe(jshint())
             .pipe(jshint.reporter('default', { verbose: true }));
});