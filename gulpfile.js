'use strict'

var browserify = require('gulp-browserify')
var gulp = require('gulp')
var stylus = require('gulp-stylus')
var uglify = require('gulp-uglify')

gulp.task('build-stylus', function () {
  gulp.src('./styles/rasm-web.styl')
  .pipe(stylus({ compress: true }))
  .pipe(gulp.dest('./'))
})

gulp.task('build-javascript', function () {
  gulp.src('./js/rasm-web.js')
  .pipe(browserify())
  .pipe(uglify())
  .pipe(gulp.dest('./'))
})

gulp.task('default', [ 'build-stylus', 'build-javascript' ])
