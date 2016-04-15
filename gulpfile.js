/*global require, __dirname*/

// Include gulp
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var buildUIAngular = require('./distDev/ui-angular/tasks/build')(__dirname);
var buildUI = require('./dist/semantic-ui/tasks/build');
var src = [
  './distDev/ui-angular/**/*.md',
  '!./distDev/ui-angular/node_modules/**/*',
];

gulp.task('buildUI', buildUI);
gulp.task('buildUIAngular', buildUIAngular);

// console.log("Session: %j", plugins);

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
  // var regEx1 = /id="(.*)">(.*)(<\/h[2-3]>)(.|\n)*?(<h[2-3])/g;
  // var replacement1 = '$4 {anchor: \'$1\', title: \'$2\'} $3';


  var regEx1 = /(<h[2-3]) id="(.*)">(.*)(<\/h[2-3]>)/g;
  var replacement1 = '{anchor: \'$2\', title: \'$3\',}, $4';
  var regEx2 = /(^|<\/h[2-3]>)(.|\n)*?($|{anchor:)/g;
  var replacement2 = '$1\n $3 ';
  return gulp.src(src)
    .pipe(plugins.print())
    .pipe(plugins.markdown())
    .pipe(plugins.replace(regEx1, replacement1))
    .pipe(plugins.replace(regEx2, replacement2))
    .pipe(plugins.concat('ui-angular-menu-draft.js'))
    .pipe(gulp.dest('./app/ui-angular'));
});

gulp.task('mdToHtml', function() {
  var regEx1 = /<pre><code class="(.*)">/g;
  var replacement1 = '<pre class="prettyprint $1">';
  var regEx2 = /<\/code><\/pre>/g;
  var replacement2 = '</pre>';
  var regEx3 = /<(h[1-4]) id="(.*)">(.*)<\/h[1-4]>/g;
  var replacement3 = '<div class="anchor" id="$2"></div>\n<$1>$3</$1>';
  var regEx4 = /<li>(\[x\])(.*)<\/li>/g;
  var replacement4 = '<div class="ui checked checkbox"><input type="checkbox" checked="checked"><label>$2</label></div><br>';
  var regEx5 = /<li>(\[ \])(.*)<\/li>/g;
  var replacement5 = '<div class="ui checkbox"><input type="checkbox"><label>$2</label></div><br>';
  var regEx6 = /<table>/g;
  var replacement6 = '<table class="ui celled table">';


  return gulp.src(src)
    .pipe(plugins.print())
    .pipe(plugins.markdown())
    .pipe(plugins.replace(regEx1, replacement1))
    .pipe(plugins.replace(regEx2, replacement2))
    .pipe(plugins.replace(regEx3, replacement3))
    .pipe(plugins.replace(regEx4, replacement4))
    .pipe(plugins.replace(regEx5, replacement5))
    .pipe(plugins.replace(regEx6, replacement6))
    .pipe(plugins.concat('ui-angular-readme.html'))
    .pipe(gulp.dest('./app/ui-angular'));
});

gulp.task('psLocale', function() {
  return gulp.src('distDev/practical-startpage/appDev/_locales/**/*')
    .pipe(plugins.print())
    .pipe(gulp.dest('app/practical-startpage/_locales'));
});
// (<h[2-3]) id="(.*)">(.*)(<\/h[2-3]>)
// {anchor: '$2', title: '$3',}, $4
