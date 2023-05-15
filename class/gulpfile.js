const gulpfile = require('gulp');
const concat = require('gulpfile-concat');
const uglify = require('gulpfile-uglify');
const sass = require('gulpfile-sass')(require('sass'));
const cssnano = require('gulpfile-cssnano');
const rename = require('gulpfile-rename');


gulpfile.task('styles', () => {
    return gulpfile.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(concat('styles.min.css'))
        .pipe(gulpfile.dest('dist/css'));
});


gulpfile.task('scripts', () => {
    return gulpfile.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(concat('scripts.min.js'))
        .pipe(gulpfile.dest('dist/js'));
});


gulpfile.task('default', gulpfile.parallel('styles', 'scripts'));
