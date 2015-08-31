import webpack from 'gulp-webpack'
import { join } from 'path'

export default function () {
  var gulp = this.gulp
  var config = this.config

  var externals = []

  for (var dependency in config.package.dependencies) {
    externals.push('commonjs '+ dependency)
  }

  return gulp.src('./index.js')
    .pipe(webpack({
      output: {
        filename: config.package.name + '-node.js',
        libraryTarget: 'commonjs2',
        sourcePrefix: ''
      },
      target: 'node',
      externals: externals,
      devtool: 'inline-source-map',
      resolve: {
        packageMains: ['main:src', 'main']
      },
      resolveLoader: {
        root: join(__dirname, '../../node_modules')
      },
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel',
          exlcude: [/node_modules/]
        }]
      }
    }))
    .pipe(gulp.dest('./dist'))
}

