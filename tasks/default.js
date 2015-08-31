module.exports = function (done) {
  var gulp = this.gulp

  return gulp.series(
    'test',
    'lint',
    'build'
  )(done)
}
