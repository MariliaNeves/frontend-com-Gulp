// gulpfile.js
var gulp = require('gulp'),  
  browserSync = require('browser-sync');


gulp.task('server', function() {
    browserSync.init({
        injectChanges: true,
        server : {
          baseDir: 'src'
        }
    });
    gulp.watch('src/**/*').on('change', browserSync.reload);
});

