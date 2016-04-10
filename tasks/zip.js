var gulp   = require('gulp'),
    zip = require('gulp-zip'),
    moment = require("moment");

gulp.task('zip', function() {
  var now = moment(new Date());
  return gulp.src('target/*')
             .pipe(zip('project-'+now.format('YYYYMMDD')+'.zip'))
             .pipe(gulp.dest('zip'));
});