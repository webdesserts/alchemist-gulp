module.exports = function (done) {
  var gulp = this.gulp

  return gulp.series([
    'default',
    function watch () {
      gulp.watch(['index.js'], gulp.task('build'));
      gulp.watch(['gulpfile.js', '.jscsrc'], gulp.task('lint'))
      gulp.watch(['tests/**/*.js', 'index.js'], gulp.series('test', 'lint'))
    }
  ])(done)
}
