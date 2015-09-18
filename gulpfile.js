'use strict'

var gulp = require('gulp')
var stylus = require('gulp-stylus')

gulp.task('build-stylus', function () {
  gulp
  .src('./styles/rasm-web.styl')
  .pipe(stylus({
    compress: true
  }))
  .pipe(gulp.dest('./'))
})

gulp.task('default', [ 'build-stylus' ])
