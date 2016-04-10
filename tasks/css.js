var gulp   = require('gulp'),
		minifyCSS = require('gulp-minify-css'),
    less = require('gulp-less'),
    lesshint = require('gulp-lesshint');

var appCssFolder = 'src/scss/**/*.less',
    buildCssFolder = 'target/css/';

gulp.task('css:lint', function() {
  return  gulp.src(appCssFolder)
             .pipe(lesshint())
            .pipe(lesshint.reporter());
});

gulp.task('css:compile', function() {
  return gulp.src(appCssFolder)
             .pipe(less())
             .pipe(minifyCSS())
             .pipe(gulp.dest(buildCssFolder));
});