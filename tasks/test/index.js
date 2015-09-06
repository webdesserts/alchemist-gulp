var mocha = require('gulp-mocha')
var warn = require('../../utils').warn
var join = require('path').join

module.exports = function test_run() {
  var gulp = this.gulp

  var files = [
    join(__dirname, '../../tests/setup.js'),
    'tests/**/*.spec.js'
  ]

  var mocha_config = {
    reporter: 'spec',
    globals: [ 'expect' ]
  }

  return gulp.src(files, { read: false })
    .pipe(mocha(mocha_config))
    .on('error', warn)
}
