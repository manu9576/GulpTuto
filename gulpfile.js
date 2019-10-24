const gulp = require('gulp');

const plugins = require('gulp-load-plugins')();

var source = './src';
var desitnation = './dist';



gulp.task('css', function () {
    return gulp.src(source + '/assets/css/styles.less')
      .pipe(plugins.less())
      .pipe(gulp.dest(destiantion + '/assets/css'));
  });