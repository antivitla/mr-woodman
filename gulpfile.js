var gulp = require('gulp'),
  concat = require('gulp-concat');
  concatCSS = require('gulp-concat-css'),
  rename = require('gulp-rename'),
  /*htmlreplace = require('gulp-html-replace'),*/
  /*prefix = require('gulp-prefix'),*/
  /*replace = require('gulp-replace'),*/
  cssnano = require('gulp-cssnano'),
  autoprefixer = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify');

var path = {
  webroot: '.',
  tmp: '.'
};

// Assets
// gulp.task('assets', function () {
//   gulp.src('fonts/**/*.*')
//     .pipe(gulp.dest(path.webroot + '/fonts'))
//   gulp.src('images/**/*.*')
//     .pipe(gulp.dest(path.webroot + '/images'))
// })

// HTML
// gulp.task('html', function () {
//   return gulp.src('pages/*.html')
//     .pipe(htmlreplace({
//       'lib-js': '../js/lib.min.js',
//       'app-js': '../js/app.min.js',
//       'lib-css': '../css/lib.min.css',
//       'app-css': '../css/app.min.css'
//     }))
//     .pipe(replace('../components', 'components'))
//     .pipe(gulp.dest(path.webroot + '/pages'))
// })

// gulp.task('html-components', function () {
//   return gulp.src('components/**/*.html')
//     /*.pipe(prefix("../", [{ match: "img[src]", attr: "src"}]))*/
//     .pipe(replace('../components', 'components'))
//     .pipe(gulp.dest(path.webroot + '/pages/components'))
// })

// CSS
gulp.task('css', function () {
  return gulp.src([
    'src/**/*.css'
  ])
    .pipe(concatCSS('app.css', {
      inlineImports: false,
      rebaseUrls: false
    }))
    .pipe(gulp.dest(path.tmp + '/css'))
    .pipe(autoprefixer({
      browsers: ['last 4 versions']
    }))
    .pipe(cssnano({
      zindex: false
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(path.webroot + '/css'))
})

gulp.task('lib-css', function () {
  gulp.src([
    'bower_components/testwood/testwood.css'
  ])
    .pipe(concat('lib.css'))
    .pipe(gulp.dest(path.tmp + '/css'))

  return gulp.src([
    'bower_components/testwood/testwood.css'
  ])
    .pipe(concat('lib.min.css'))
    .pipe(gulp.dest(path.webroot + '/css'))
})

// JavaScript
gulp.task('js', function () {
  return gulp.src([
    'src/**/*.js'
  ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest(path.tmp + '/js'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(path.webroot + '/js'))
});

gulp.task('lib-js', function () {
  gulp.src([
    'bower_components/jquery/dist/jquery.js',
    'bower_components/angular/angular.js',
    'bower_components/angular-sanitize/angular-sanitize.js',
    'bower_components/testwood/testwood.js'
  ])
    .pipe(concat('lib.js'))
    .pipe(gulp.dest(path.tmp + '/js'))

  return gulp.src([
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/angular/angular.min.js',
    'bower_components/angular-sanitize/angular-sanitize.min.js',
    'bower_components/testwood/testwood.js'
  ])
    .pipe(concat('lib.min.js'))
    .pipe(gulp.dest(path.webroot + '/js'))
});

// Watch
gulp.task('watch', function () {
  // gulp.watch(['pages/*.html'], ['html'])
  // gulp.watch(['components/**/*.html'], ['html-components'])
  gulp.watch(['src/**/*.css'], ['css'])
  gulp.watch(['src/**/*.js'], ['js'])
});

// Build
gulp.task('build', ['lib-css', 'css', 'js', 'lib-js']);
