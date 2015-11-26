// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var env = require('gulp-env');

// Lint Task
gulp.task('lint', function() {
    return gulp.src(['app.js', 'routes/**/*.js', 'models/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/stylesheets'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('nodemon', function (cb) {
  var started = false;
  return nodemon({
    script: 'bin/www',
    ext: 'js jade html',
    env: {DEBUG: "guestbook:server"}
  }).on('restart', function () {
    console.log('restarted!');
  });
});

// Default Task
gulp.task('default', ['lint', 'sass', 'watch', 'nodemon']);
