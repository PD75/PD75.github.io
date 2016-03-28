/*global require, __dirname*/

// Include gulp
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var buildUIAngular = require('./distDev/ui-angular/tasks/build')(__dirname);


gulp.task('build', ['installDist']);

gulp.task('installDist', function() {
  var paths  = [
    './node_modules/angulartics-google-analytics/dist/angulartics-google-analytics.min.js',
    './node_modules/angulartics/dist/angulartics.min.js',
  ];
  
  
  //  gulp.src()
  //   .pipe(plugins.print())
  //   .pipe(gulp.dest('./dist'));

  return gulp.src(paths)
    .pipe(plugins.print())
    .pipe(gulp.dest('./dist'));


});
