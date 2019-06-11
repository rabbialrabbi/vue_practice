var gulp = require('gulp'),
browserSync= require('browser-sync').create();

gulp.task('watch',function () {
   browserSync.init({
       proxy: "http://127.0.0.1:8000/"
   });
    gulp.watch("./public/js/*.js", function () {
        return gulp.src('./public/js/app.js').pipe(browserSync.stream())
    });
});