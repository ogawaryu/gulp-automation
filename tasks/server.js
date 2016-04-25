var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('server:copy', function() {
	gulp.src("src/*.html")
			.pipe( gulp.dest("target") );
});

gulp.task('server:start', ['server:copy'] , function() {

	browserSync.init({
        server: { baseDir: "target" }
  });

	gulp.watch('src/less/**/*.less', ['css:compile']);
	gulp.watch('src/js/**/*.js', ['js:compile']);
	gulp.watch(["target/*.html", "target/css/**/*.css", "target/js/**/*.js"]).on('change', browserSync.reload);

});