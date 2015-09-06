var webpack = require('gulp-webpack')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
var join = require('path').join

module.exports = function build(done) {
  var gulp = this.gulp
  var config = this.config

  gulp.parallel([
    'build:browser',
    'build:node'
  ])(done)
}
