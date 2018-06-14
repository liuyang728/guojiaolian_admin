const gulp = require('gulp');
const path = require('path');
const babel = require('gulp-babel');
const NODE_ENV = process.env.NODE_ENV;
const clean = require('gulp-clean');

gulp.task('default', ['build'], function() {
    console.log('gulp 启动666' + NODE_ENV);
});

gulp.task('build', ['clean'], function() {
    gulp.src(path.resolve(__dirname, 'src/nodeuii/**/*.js'))
        .pipe(
            babel({
                plugins: ['transform-es2015-modules-commonjs']
            })
        )
        .pipe(gulp.dest(path.resolve(__dirname, 'dist')));
});

gulp.task('clean', function() {
    return gulp.src(path.resolve(__dirname, 'dist')).pipe(clean());
});

gulp.task('watch', function() {
    gulp.watch('src/nodeuii/**/*.js', ['build']);
});
