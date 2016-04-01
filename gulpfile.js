/*global require, __dirname*/

// Include gulp
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var buildUIAngular = require('./distDev/ui-angular/tasks/build')(__dirname);
var buildUI = require('./dist/semantic-ui/tasks/build');

gulp.task('buildUI', buildUI);
gulp.task('buildUIAngular', buildUIAngular);



gulp.task('build', ['installDist', 'buildUIAngular', 'buildUI']);

gulp.task('installDist', function() {
  var paths = ['./node_modules/angulartics-google-analytics/dist/angulartics-google-analytics.min.js',
    './node_modules/angulartics/dist/angulartics.min.js',
  ];

  return gulp.src(paths)
    .pipe(plugins.print())
    .pipe(gulp.dest('./dist'));


});

gulp.task('mdToHtml', function() {
  return gulp.src('./distDev/ui-angular/src/**/*.md')
    .pipe(plugins.print())
    .pipe(plugins.markdown())
    // .pipe(plugins.showdown())
    .pipe(gulp.dest('./app/ui-angular/'));
});
