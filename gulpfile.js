// 引入gulp
var gulp = require('gulp');

// 引入组件
var jshint = require('gulp-jshint');//检查js
var sass   = require('gulp-sass');  //编译Sass
var concat = require('gulp-concat');//合并
var uglify = require('gulp-uglify');//uglify 组件（用于压缩 JS）
var rename = require('gulp-rename');//重命名
var browserify = require('browserify');//browserify负责各个模块的依赖关系
var reactify = require('reactify');//reactify 责把JSX内容转换成浏览器可以识别的JS内容
var source = require('vinyl-source-stream');//vinyl-source-stream是一个文件流的处理插件
//检查js脚本的任务
// gulp.task('lint', function() {
//     gulp.src('./app/list.js') //可配置你需要检查脚本的具体名字。
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });

// 编译Sass
gulp.task('sass', function() {
    gulp.src('./public/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));//dest()写入文件
});

// 合并，压缩js文件
// 找到 js/ 目录下的所有 js 文件，压缩，重命名，最后将处理完成的js存放在 dist/js/ 目录下
// gulp.task('scripts', function() {
//     gulp.src('./public/js/*.js')
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('./dist'))
//         .pipe(rename('all.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('./dist'));

//         console.log('javascript compressed is done');//自定义提醒信息
// });

//执行gulp命令
gulp.task('scripts',function(){
    return browserify('./public/js/main.js')
    .transform(reactify)//browserify下的转换功能，我们把reactify传入，表示把JSX转换成JS
    .bundle()//把所有JS代码合并成一个文件，包括react等依赖的文件，这里返回的是一个字符串
    .pipe(source('bundle.js'))//转换成文件流
    .pipe(gulp.dest('build'))//插入到这个目录下
});

gulp.task('default', function(){
    gulp.run('sass', 'scripts');
    gulp.watch('./public/js/*.js', function(){
        gulp.run('scripts');
    });
    gulp.watch('./public/scss/*.scss', function(){
        gulp.run('sass');
    });
});