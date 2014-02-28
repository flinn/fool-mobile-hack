var gulp  = require('gulp');
var shell = require('gulp-shell');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
  gulp.src('./www/js/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('install', shell.task([
	'npm install',
  'npm install -g flinn/flimulator',
  'ripple emulate --path www',
  'echo AIGHT. Start Hacking!'
]));

gulp.task('go', shell.task([
	'ripple emulate --path www',
]));