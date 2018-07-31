var gulp = require('gulp');
var webdriver = require('webdriver');

gulp.task('default', function() {
    return gulp.src('wdio.conf.js').pipe(webdriver({
        logLevel: 'verbose',
        waitforTimeout: 10000
    }));
});
