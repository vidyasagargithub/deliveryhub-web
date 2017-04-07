var gulp = require('gulp');
var browserSync = require('browser-sync').create();
gulp.task("serve", function () {
    browserSync.init({
        server: {
            baseDir: './',
        },
        port: 5000
    })
    gulp.watch(["*.html", "./*.html", "../**/*.html"]);
});

gulp.task("default", ['serve']);