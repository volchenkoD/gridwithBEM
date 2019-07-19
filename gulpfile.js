const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
//const imagemin = require('gulp-imagemin');
//const del = require('del');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const less = require('gulp-less');
//Массив файлов стилей
const cssFiles = [
    './src/css/reset.less',
    './src/css/BEM.less',
    './src/css/main.less',
    './src/css/catalog.less',
    // './src/css/door.less',
    './src/css/safe.less',
    './src/css/mediaMain.less',
    './src/css/media.less',
    // './src/css/media_catalog.less',
    // './src/css/media_safe.less',
    // './src/css/media_safePages.less',
    // './src/css/mediaMedicinaPages.less',
    // './src/css/mediaShelving.less',
    // './src/css/mediaMetall.less'
]
//Массив файлов скриптов
const jsFiles = [
    './src/js/lib.js',
    './src/js/main.js'
]
//Таск для обработки картинок
/*gulp.task('default', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'))
)*/
//Таски для стилей CSS
function styles(){
    //Шаблон для поиска CSS файлов
    //Все файлы по шаблону './src/css/**/*.css/'
    return gulp.src(cssFiles)
    .pipe(sourcemaps.init())
    .pipe(less())
    //объединение файлов в один
    .pipe(concat('style.css'))
    //автоматическое добавление префиксов
    .pipe(autoprefixer({
        browsers: ['>0.1%'],
        cascade: false
    }))
    //Минификация стилей
    .pipe(cleanCSS({
        level: 2
    }))
    .pipe(sourcemaps.write('./'))
    // Выходная папка для стилей
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream())
}

//Таски для JS скриптов
function scripts(){
     //Шаблон для поиска JS файлов
    //Все файлы по шаблону './src/js/**/*.js/'
    return gulp.src(jsFiles)
    //объединение файлов в один
    .pipe(concat('script.js'))
    //минификация скриптов
    .pipe(uglify({
        toplevel: true
    }))
    // Выходная папка для скриптов
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream())
}
//удалить все в указанной папке
// function clean(){
//     return del(['build/*'])
// }
//Просмотр файлов
function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    //следить за стилями
    gulp.watch('./src/css/**/*.less', styles)
    //следить за скриптами
    gulp.watch('./src/js/**/*.js', scripts)
    //следить за HTML файлами
    gulp.watch("./*.html").on('change', browserSync.reload)
}
//Таск вызывающий функцию styles
gulp.task('styles', styles);
//Таск вызывающий функцию scripts
gulp.task('scripts', scripts);
//Удаление временных файлов
// gulp.task('del', clean);
//отслеживание изменений
gulp.task('watch', watch);
//удаление файлов в папке build и запуск стилей и скриптов
gulp.task('build', gulp.series(gulp.parallel(styles, scripts)));
//
// =======
// const gulp = require('gulp');
// const concat = require('gulp-concat');
// const autoprefixer = require('gulp-autoprefixer');
// const cleanCSS = require('gulp-clean-css');
// const uglify = require('gulp-uglify');
// //const imagemin = require('gulp-imagemin');
// //const del = require('del');
// const browserSync = require('browser-sync').create();
// const sourcemaps = require('gulp-sourcemaps');
// const less = require('gulp-less');
// //Массив файлов стилей
// const cssFiles = [
//     './src/css/main.less',
//     './src/css/catalog.less',
//     './src/css/entryDoor.less',
//     './src/css/media.less'
// ]
// //Массив файлов скриптов
// const jsFiles = [
//     './src/js/lib.js',
//     './src/js/main.js'
// ]
// //Таск для обработки картинок
// /*gulp.task('default', () =>
//     gulp.src('src/images/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('build/images'))
// )*/
// //Таски для стилей CSS
// function styles(){
//     //Шаблон для поиска CSS файлов
//     //Все файлы по шаблону './src/css/**/*.css/'
//     return gulp.src(cssFiles)
//     .pipe(sourcemaps.init())
//     .pipe(less())
//     //объединение файлов в один
//     .pipe(concat('style.css'))
//     //автоматическое добавление префиксов
//     .pipe(autoprefixer({
//         browsers: ['>0.1%'],
//         cascade: false
//     }))
//     //Минификация стилей
//     .pipe(cleanCSS({
//         level: 2
//     }))
//     .pipe(sourcemaps.write('./'))
//     // Выходная папка для стилей
//     .pipe(gulp.dest('./build/css'))
//     .pipe(browserSync.stream())
// }

// //Таски для JS скриптов
// function scripts(){
//      //Шаблон для поиска JS файлов
//     //Все файлы по шаблону './src/js/**/*.js/'
//     return gulp.src(jsFiles)
//     //объединение файлов в один
//     .pipe(concat('script.js'))
//     //минификация скриптов
//     .pipe(uglify({
//         toplevel: true
//     }))
//     // Выходная папка для скриптов
//     .pipe(gulp.dest('./build/js'))
//     .pipe(browserSync.stream())
// }
// //удалить все в указанной папке
// // function clean(){
// //     return del(['build/*'])
// // }
// //Просмотр файлов
// function watch() {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
//     //следить за стилями
//     gulp.watch('./src/css/**/*.less', styles)
//     //следить за скриптами
//     gulp.watch('./src/js/**/*.js', scripts)
//     //следить за HTML файлами
//     gulp.watch("./*.html").on('change', browserSync.reload)
// }
// //Таск вызывающий функцию styles
// gulp.task('styles', styles);
// //Таск вызывающий функцию scripts
// gulp.task('scripts', scripts);
// //Удаление временных файлов
// // gulp.task('del', clean);
// //отслеживание изменений
// gulp.task('watch', watch);
// //удаление файлов в папке build и запуск стилей и скриптов
// gulp.task('build', gulp.series(gulp.parallel(styles, scripts)));
// //
// >>>>>>> 34118c178337749575192120fcc1c071137c9fd3
gulp.task('dev', gulp.series('build', 'watch'));