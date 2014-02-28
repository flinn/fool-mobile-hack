var gulp  = require('gulp')
var shell = require('gulp-shell')

gulp.task('install', shell.task([
  'npm install -g flinn/flimulator',
  'ripple emulate --path www',
  'echo AIGHT. Start Hacking!'
]));

gulp.task('go', shell.task([
	'ripple emulate --path www',
]));