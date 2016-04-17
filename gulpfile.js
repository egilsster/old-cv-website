var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    minifyHTML = require('gulp-minify-html');

gulp.task('sass', function () {
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('src/**/*.html', ['minify-html']);
});


gulp.task('minify-html', function () {
    gulp.src('src/*.html')
        .pipe(minifyHTML({empty: true}))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['sass', 'minify-html', 'watch']);
