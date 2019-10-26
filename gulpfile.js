const gulp = require('gulp');

const plugins = require('gulp-load-plugins')();

var source = './src';
var destination = './dist';

gulp.task('css', function () {
    return gulp.src(source + '/assets/css/styles.less')
      .pipe(plugins.less())
      .pipe(gulp.dest(destination + '/assets/css/'));
  });