import jscs from 'gulp-jscs'
import { warn } from '../../utils'
import { join } from 'path'

export default function lint() {
  var gulp = this.gulp

  return gulp.src([ 'gulpfile.js', 'tests/**/*.js', 'index.js' ])
  .pipe(jscs({ configPath: join(__dirname, '../../.jscsrc') }))
  .on('error', warn)
}
