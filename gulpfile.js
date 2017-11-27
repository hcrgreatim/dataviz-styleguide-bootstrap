var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var nunjucks = require('gulp-nunjucks');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

// Move the javascript files into our /src/js folder
gulp.task('js', function() {
    return gulp.src([
            'node_modules/bootstrap/dist/js/bootstrap.min.js', 
            'node_modules/jquery/dist/jquery.min.js', 
            'node_modules/tether/dist/js/tether.min.js',
        ])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
});

gulp.task('nunjucks', () =>
    gulp.src('src/templates/*.html')
        .pipe(nunjucks.compile({name: 'Sindre'}))
        .pipe(gulp.dest('src'))
);

// Static Server + watching scss/html files
gulp.task('serve', ['nunjucks','sass'], function() {

    browserSync.init({
        server: "./src"  
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['nunjucks','sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch("src/templates/*.html", ['nunjucks',browserSync.reload]);
});

gulp.task('default', ['js','nunjucks','serve']);