const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

const webConfig = {
  output: {
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};

gulp.task('default', function() {
  browserSync.init({
    server: {
        baseDir: "./app"
    }
});
    gulp.watch("app/sass/**/*.scss", function () {
        return gulp.src("app/sass/**/*.scss")
          .pipe(sass())
          .pipe(autoprefixer({
            overrideBrowserslist: ['> 0.1%'],
            cascade: false
          }))
          .pipe(cleanCSS({
            level: 2
          }))
          .pipe(gulp.dest("app/css"))
          .pipe(browserSync.stream());
    });
    gulp.watch("app/js/**/*.js", function () {
      return gulp.src("app/js/index.js")
        .pipe(webpack(webConfig))
        .pipe(gulp.dest("app/buildjs"))
        .pipe(browserSync.stream());
    });
    gulp.watch("app/**/*.php").on('change', browserSync.reload);
    gulp.watch("app/**/*.html").on('change', browserSync.reload);
});