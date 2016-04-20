var gulp = require('gulp');

// gulp jade
var jade = require('gulp-jade');

// gulp sass
var sass = require('gulp-sass');

//browser sync
var browserSync = require('browser-sync').create();

//Watch
gulp.task('watch', ['browserSync'], function(){
   gulp.watch('**/*.jade', ['jade']);
   gulp.watch('css/**/*.*', ['sass']);
});


//jade task
gulp.task('jade', function() {
   
   var YOUR_LOCALS = {};
   
   gulp.src('*.jade')
    
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true

    }))
    .pipe(gulp.dest('.'))
    .pipe(browserSync.reload({
        stream:true 
    }))
});

//sass task

gulp.task('sass', function() {
    return gulp.src('css/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.reload({
        stream:true 
    }))
});

//browser sync
gulp.task('browserSync', function(){
  
    browserSync.init({
        port: 8082,
        server: {
            baseDir : '',
        },
         
    })
});