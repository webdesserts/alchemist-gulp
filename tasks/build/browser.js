import webpack from 'gulp-webpack'
import uglify from 'gulp-uglify'
import rename from 'gulp-rename'
import { join } from 'path'

export default function () {
  var gulp = this.gulp
  var config = this.config

  return gulp.src('index.js')
    .pipe(webpack({
      output: {
        filename: config.package.name + '.js',
        library: config.package.name.replace('-', '_'),
        libraryTarget: 'umd',
        sourcePrefix: ''
      },
      resolve: {
        packageMains: ['main:src', 'main']
      },
      resolveLoader: {
        root: join(__dirname, '../../node_modules')
      },
      module: {
        loaders: [ {
          test: /\.js$/,
          loader: 'babel-loader',
          optional: ['runtime']
        } ]
      }
    }))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'))
}

