var gulp = require('gulp'),
    gUtil = require('gulp-util'),
    concat = require('gulp-concat'),
    browerify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect'),
    gulpIf = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyHtml = require('gulp-minify-html'),
    imagemin = require('gulp-imagemin'),
    pngCruch = require('imagemin-pngcrush');


var jsSrc,
    sassStyleSrc,
    allSassSrc,
    jsonSrc,
    env,
    outputDir,
    outputStyle,
    htmlsrc,
    imgSrc;

    env = process.env.NODE_ENV || 'development';

    if(env === 'development'){
        outputDir = 'builds/development';
        outputStyle = 'expanded';
    }else{
        outputDir = 'builds/productions';
        outputStyle = 'compressed';
    }

    jsSrc = 'components/scripts/*.js';
    sassStyleSrc = 'components/sass/style.scss';
    allSassSrc = 'components/sass/**/*.scss';
    htmlsrc = 'builds/development/*.html'
    imgSrc = 'builds/development/images/*.*';

gulp.task('js', function(){
    gulp.src(jsSrc)
        .pipe(concat('script.js'))
        .pipe(browerify())
        .pipe(gulpIf(env === 'production', uglify()))
        .pipe(gulp.dest(outputDir + '/js'))
        .pipe(connect.reload())
});

gulp.task('compass', function(){
    gulp.src(sassStyleSrc)
        .pipe(compass({
            sass: 'components/sass',
            image: outputDir +  '/images',
            outputStyle: outputStyle

        }))
        .on('error', gUtil.log)
        .pipe(gulp.dest(outputDir + '/css'))
        .pipe(connect.reload())
});

gulp.task('connect', function(){
   connect.server({
       root: outputDir,
       livereload: true
   });
});

gulp.task('html', function(){
   gulp.src(htmlsrc)
        .pipe(gulpIf(env === 'production', minifyHtml()))
        .pipe(gulpIf(env === 'production', gulp.dest(outputDir)))
        .pipe(connect.reload())
});

gulp.task('images', function(){
   gulp.src(imgSrc)
        .pipe(gulpIf(env === 'production', imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngCruch()]
        })))
        .pipe(gulpIf(env === 'production', gulp.dest(outputDir + '/images')))
        .pipe(connect.reload())
});

gulp.task('watch', function(){
    gulp.watch(jsSrc, ['js']);
    gulp.watch(allSassSrc, ['compass']);
    gulp.watch(htmlsrc, ['html']);
    gulp.watch(imgSrc, ['images']);
});

gulp.task('default', ['html', 'js', 'compass', 'connect', 'images', 'watch']);
