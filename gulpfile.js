const preprocess = require('gulp-preprocess')
const postcss = require('gulp-postcss')
var pug = require('gulp-pug');
var del = require('del');
const { watch, dest, src, series, parallel } = require('gulp')

const html = function() {
  return src('./src/*.pug')
    .pipe(preprocess({ context: { curtime: Date.now() } }))
    .pipe(pug())
    .pipe(dest('./dist/'))
}

const scripts = function() {
  return src(['./src/**/*.js'])
    .pipe(preprocess())
    .pipe(dest('./dist/'))
}

const css = function() {
  return src('./src/**/*.css')
    .pipe(postcss())
    .pipe(preprocess())
    .pipe(dest('./dist/'))
}

const static = function() {
  return src('./static/**/*.*')
    .pipe(dest('./dist/'))
}


function serve() {
  const browserSync = require('browser-sync').create()
  watch('./src/**/*.js', scripts)
  watch('./src/**/*.css', css)
  watch('./src/**/*.pug', html)
  watch('./static/**/*.*', static)

  browserSync.init({
    server: {
      baseDir: "dist",
      serveStaticOptions: {
        extensions: ["html"]
      }
    },
    ui: false,
  })
  watch('dist/**/*.*').on('change', browserSync.reload)
}

exports.dev = series(scripts, css, html, static, serve)

exports.clean = () => del(['dist/*'], { dot: true });

exports.build = parallel(scripts, css, html, static)