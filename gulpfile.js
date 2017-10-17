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
  src: 'about/src',
  build: 'about',
  tmp: 'about'
};

// Assets
// gulp.task('assets', function () {
//   gulp.src('fonts/**/*.*')
//     .pipe(gulp.dest(path.build + '/fonts'))
//   gulp.src('images/**/*.*')
//     .pipe(gulp.dest(path.build + '/images'))
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
//     .pipe(gulp.dest(path.build + '/pages'))
// })

// gulp.task('html-components', function () {
//   return gulp.src('components/**/*.html')
//     /*.pipe(prefix("../", [{ match: "img[src]", attr: "src"}]))*/
//     .pipe(replace('../components', 'components'))
//     .pipe(gulp.dest(path.build + '/pages/components'))
// })

// CSS
gulp.task('css', function () {
  return gulp.src([
    path.src + '/**/*.css'
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
    .pipe(gulp.dest(path.build + '/css'))
})

// gulp.task('lib-css', function () {
//   gulp.src([
//     'bower_components/testwood/testwood.css'
//   ])
//     .pipe(concat('lib.css'))
//     .pipe(gulp.dest(path.tmp + '/css'))

//   return gulp.src([
//     'bower_components/testwood/testwood.css'
//   ])
//     .pipe(concat('lib.min.css'))
//     .pipe(gulp.dest(path.build + '/css'))
// })

// JavaScript
gulp.task('js', function () {
  return gulp.src([
    path.src + '/**/*.js'
  ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest(path.tmp + '/js'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(path.build + '/js'))
});

gulp.task('lib-js', function () {
  gulp.src([
    'node_modules/mr-fontfit/mr-fontfit.js',
    'node_modules/jquery/dist/jquery.js',
    'node_modules/angular/angular.js',
    'node_modules/angular-sanitize/angular-sanitize.js'
  ])
    .pipe(concat('lib.js'))
    .pipe(gulp.dest(path.tmp + '/js'))

  return gulp.src([
    'node_modules/mr-fontfit/mr-fontfit.js',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/angular/angular.min.js',
    'node_modules/angular-sanitize/angular-sanitize.min.js'
  ])
    .pipe(concat('lib.min.js'))
    .pipe(gulp.dest(path.build + '/js'))
});

// Watch
gulp.task('watch', function () {
  // gulp.watch(['pages/*.html'], ['html'])
  // gulp.watch(['components/**/*.html'], ['html-components'])
  gulp.watch([path.src + '/**/*.css'], ['css'])
  gulp.watch([path.src + '/**/*.js'], ['js'])
});

// Build
gulp.task('build', ['css', 'js', 'lib-js']);
