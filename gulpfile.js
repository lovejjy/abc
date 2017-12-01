var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('ajax', function () {
    gulp.src('.')
        .pipe(webserver({
            host: 'localhost',
            port: 8090,
            livereload: true,
            fallback: 'index.html'
        }));
});
gulp.task('webserver', function () {
    gulp.src('.')
        .pipe(webserver({
            host: 'localhost',
            port: 8080,
            middleware: function (req, res,next) {  
                var data = {
                    li:["一键缴费","网上理财","保险保障","房屋贷款","假装贷款","汽车贷款","金辉旅游","资金归集","旅游度假"]
                };
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.end(JSON.stringify(data));
            }
        }))
});
gulp.task('default', function () {
    gulp.start('webserver','ajax');
});