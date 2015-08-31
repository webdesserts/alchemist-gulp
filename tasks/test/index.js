import mocha from 'gulp-mocha'
import { warn } from '../../utils'
import { join } from 'path'

export default function test_run() {
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
