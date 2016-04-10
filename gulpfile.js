var gulp   = require('gulp'),
    sequence = require('gulp-sequence');

require('require-dir')('tasks');

gulp.task('dev', function() {
  gulp.watch(appJavascriptFolder, ['jshint']);
  gulp.watch(appCssFolder, ['lesslint']);
});

gulp.task('runtest', sequence('js:hint','css:lint'));

gulp.task('build',['runtest'],sequence('js:compile','css:compile','zip'));