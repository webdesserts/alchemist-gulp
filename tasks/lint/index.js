var jscs = require('gulp-jscs')
var warn = require('../../utils').warn
var join = require('path').join

module.exports = function lint() {
  var gulp = this.gulp

  return gulp.src([ 'gulpfile.js', 'tests/**/*.js', 'index.js' ])
  .pipe(jscs({ configPath: join(__dirname, '../../.jscsrc') }))
  .on('error', warn)
}
