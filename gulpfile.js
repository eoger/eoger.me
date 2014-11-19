var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

var lessglob = './less/*.less';
var cssdir = './public/css/';
var cssglob = cssdir + '*.css';

gulp.task('less', function () {
  gulp.src(lessglob)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest(cssdir));
});

gulp.task('watch', function() {
  gulp.watch(lessglob, ['less']);
});

gulp.task('default', ['less']);
