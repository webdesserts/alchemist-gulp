import webpack from 'gulp-webpack'
import uglify from 'gulp-uglify'
import rename from 'gulp-rename'
import { join } from 'path'

export default function build(done) {
  var gulp = this.gulp
  var config = this.config

  gulp.parallel([
    'build:browser',
    'build:node'
  ])(done)
}
