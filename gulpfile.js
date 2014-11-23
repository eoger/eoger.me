var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');

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
  return gulp.src(src.less)
    .pipe(less({
      paths: [ path.join(__dirname, 'src', 'less', 'includes') ]
    }))
    .pipe(gulp.dest(build.css));
});

function bundlejs(watch) {
  var bundler = browserify(src.main_js, watchify.args);
  if(watch) {
    bundler = watchify(bundler);
  }
 
  bundler.transform(reactify);
 
  var rebundle = function() {
    gutil.log('Start browserify');
    var stream = bundler.bundle();
    stream.on('error', gutil.log.bind(gutil, 'Browserify error'));
    stream.on('end', gutil.log.bind(gutil, 'End browserify'));
    stream = stream.pipe(source(build.main_js));
    return stream.pipe(gulp.dest(build.js));
  };
 
  bundler.on('update', rebundle);
  return rebundle();
}

gulp.task('js', function() {
  return bundlejs(false);
});

gulp.task('watch', function() {
  gulp.watch(src.less, ['css']);
  return bundlejs(true);
});

gulp.task('default', ['css', 'js']);