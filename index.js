module.exports = function (gulp, plugin) {
  var del = require('del')
  var series = require('run-sequence').use(gulp)
  var jscs = require("gulp-jscs")
  var mocha = require("gulp-mocha")
  var rename = require("gulp-rename")
  var uglify = require("gulp-uglify")
  var webpack = require("gulp-webpack")


  gulp.task('clean', del.bind(null, ['.tmp', 'dist']))

  gulp.task('build:min', ['build:web'], function () {
    return gulp.src('dist/alchemist-'+ plugin.name + '.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'))
  })

  gulp.task('build:web', function () {
    return gulp.src('index.js')
    .pipe(webpack({
      output: {
        filename: 'alchemist-' + plugin.name + '.js',
        libraryTarget: 'umd',
        library: 'alchemist_' + plugin.name,
        sourcePrefix: ''
      }
    }))
    .pipe(gulp.dest('dist'))
  })

  gulp.task('build', ['build:web', 'build:min'])

  gulp.task('test:run', function () {
    return gulp.src('test/*.js')
    .pipe(mocha({ reporter: 'spec' }))
    .on('error', warn)
  })

  gulp.task('test', function (cb) {
    series('test:run', 'lint', cb)
  })

  gulp.task('lint', function () {
    return gulp.src(['gulpfile.js', 'test/*.js', 'index.js'])
    .pipe(jscs())
    .on('error', warn)
  })

  gulp.task('watch:lint', ['lint'], function () {
    gulp.watch(['gulpfile.js', '.jscsrc', 'test/*.js', 'index.js'], ['lint'])
  })

  gulp.task('default', ['lint', 'test'], function () {
    gulp.watch(['gulpfile.js', '.jscsrc', 'test/*.js', 'index.js'], ['lint'])
    gulp.watch(['test/*.js', 'index.js'], ['test'])
  })

  function warn (err) {
    console.warn(err.message)
    this.emit('end')
  }

}
