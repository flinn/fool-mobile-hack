var gulp  = require('gulp');
var shell = require('gulp-shell');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');

gulp.task('scripts', function() {
  gulp.src('./www/js/*.js')
    .pipe(concat('foolmobile.js'))
    .pipe(gulp.dest('./www/jsbin/'))
});

gulp.task('watch', function() {
  var server = livereload();
  gulp.watch('www/**').on('change', function(file) {
      server.changed(file.path);
  });
});

gulp.task('install', shell.task([
	'npm install',
  'npm install -g flinn/flimulator',
  'ripple emulate --path www',
  'echo AIGHT. Start Hacking!'
]));

gulp.task('go', shell.task([
	'ripple emulate --path www'
]));