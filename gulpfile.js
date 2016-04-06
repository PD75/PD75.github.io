/*global require, __dirname*/

// Include gulp
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var buildUIAngular = require('./distDev/ui-angular/tasks/build')(__dirname);
var buildUI = require('./dist/semantic-ui/tasks/build');

gulp.task('buildUI', buildUI);
gulp.task('buildUIAngular', buildUIAngular);

console.log("Session: %j", plugins);

gulp.task('build', ['installDist', 'buildUIAngular', 'buildUI']);

gulp.task('installDist', function() {
  var paths = ['./node_modules/angulartics-google-analytics/dist/angulartics-google-analytics.min.js',
    './node_modules/angulartics/dist/angulartics.min.js',
  ];

  return gulp.src(paths)
    .pipe(plugins.print())
    .pipe(gulp.dest('./dist'));


});

gulp.task('mdToMenu', function() {
  var regEx1 = /(<\/h[2-3]>)(.|\n)*?(<h[2-3])/g;
  var replacement1 = '<pre class="prettyprint $1">';
  
  
  var regEx2 = /^<h[2-3] id="(.*)">(.*)<\/h.>[\s\S]/g;
  var replacement2 = '</pre>';
  
  
  
  return gulp.src('./distDev/ui-angular/**/*.md')
    .pipe(plugins.print())
    .pipe(plugins.markdown())
    .pipe(plugins.replace(regEx1, replacement1))
    .pipe(plugins.replace(regEx2, replacement2))
    .pipe(plugins.concat('ui-angular-readme.html'))
    .pipe(gulp.dest('./app/ui-angular'));
});

gulp.task('mdToHtml', function() {
  var regEx1 = /<pre><code class="(.*)">/g;
  var replacement1 = '<pre class="prettyprint $1">';
  var regEx2 = /<\/code><\/pre>/g;
  var replacement2 = '</pre>';  
  
  
  return gulp.src('./distDev/ui-angular/**/*.md')
    .pipe(plugins.print())
    .pipe(plugins.markdown())
    .pipe(plugins.replace(regEx1, replacement1))
    .pipe(plugins.replace(regEx2, replacement2))
    .pipe(plugins.concat('ui-angular-readme.html'))
    .pipe(gulp.dest('./app/ui-angular'));
});


^(.|\n)*?(<h[2-3])
