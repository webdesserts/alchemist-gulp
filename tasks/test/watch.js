export default function lint_watch(done) {
  var gulp = this.gulp

  return gulp.series(
    gulp.task('test'),
    function watch () {
      gulp.watch(['index.js', 'tests/**/*.js'], gulp.task('test'))
    }
  )(done)
}
