var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

var src = {
  less: ['./src/less/*.less'],
  js: ['./src/js/**/*.js?(x)'],
  main_js: ['./src/js/main.js']
};

var build = {
  css: './build/css/',
  js: './build/js/',
  main_js: 'bundle.js'
};

gulp.task('css', function () {
  gulp.src(src.less)
    .pipe(less({
      paths: [ path.join(__dirname, 'src', 'less', 'includes') ]
    }))
    .pipe(gulp.dest(build.css));
});

gulp.task('js', function() {
  browserify(src.main_js)
    .transform(reactify)
    .bundle()
    .pipe(source(build.main_js))
    .pipe(gulp.dest(build.js));
});

gulp.task('watch', function() {
  gulp.watch(src.less, ['css']);
  gulp.watch(src.js, ['js']);
});

gulp.task('default', ['css', 'js']);