export default function lint_watch(done) {
  var gulp = this.gulp

  return gulp.series(
    gulp.task('lint'),
    function watch () {
      gulp.watch([
        'gulpfile.js', '.jscsrc',
        'tests/**/*.js', 'index.js'
      ], gulp.task('lint'))
    }
  )(done)
}
