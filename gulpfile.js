var gulp = require('gulp'),
    sass = require('gulp-sass')
 

gulp.task("sass",function(){
    
    return gulp.src('src/scss/asset.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    
})

gulp.task('default',function(){
    
    
    gulp.watch('src/scss/*.scss',['sass'])
    
    
})