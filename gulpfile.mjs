import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import nodeSass from 'sass'; 
import imagemin from 'gulp-imagemin';
import cleanCSS from 'gulp-clean-css';


const sass = gulpSass(nodeSass);


const paths = {
    styles: {
        src: 'src/scss/**/*.scss',
        dest: 'dist/css'
    },
    images: {
        src: 'src/img/**/*',
        dest: 'dist/images'
    }
};


function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))  
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.styles.dest));
}


function images() {
    return gulp.src(paths.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest));
}


function watchFiles() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.images.src, images);
}



export { styles, images, watchFiles };


export default gulp.series(styles, images, watchFiles);
