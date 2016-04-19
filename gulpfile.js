const gulp   = require('gulp'),
      rename = require('gulp-rename'),
      umd    = require('gulp-umd'),
      uglify = require('gulp-uglify'),
      babel  = require('gulp-babel');

gulp.task('compile', () => {
    return gulp.src('src/cb.directives.sharewindow.js')
               .pipe(babel())
               .pipe(umd({
                   dependencies: (file) => [{
                       name  : 'angular',
                       amd   : 'angular',
                       cjs   : 'angular',
                       global: 'angular',
                       param : 'angular'
                   }],
                   exports     : (file) => 'ngModuleName',
                   namespace   : (file) => '_cbDirectivesShareWindowModuleName'
               }))
               .pipe(rename({basename: 'cb.directives.sharewindow'}))
               .pipe(gulp.dest('dist'))
});

gulp.task('minify', ['compile'], function() {
    gulp.src('dist/cb.directives.sharewindow.js')
        .pipe(uglify())
        .pipe(rename('cb.directives.sharewindow.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['minify']);
