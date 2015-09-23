// Less configuration
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
    gulp.src('./less/paraflax.less')
        .pipe(less())
        .pipe(gulp.dest('./css/'))
});

gulp.task('default', function() {
    gulp.watch('./less/*.less', ['less']);
})