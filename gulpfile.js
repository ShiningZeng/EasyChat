// 引入gulp
var gulp = require('gulp');

// 引入组件
var watchify = require('watchify');
var jshint = require('gulp-jshint');//检查js
var sass   = require('gulp-sass');  //编译Sass
var concat = require('gulp-concat');//合并
var minifyCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');//uglify 组件（用于压缩 JS）
var rename = require('gulp-rename');//重命名
var browserify = require('browserify');//browserify负责各个模块的依赖关系
var babelify = require('babelify');//babelify 责把babel/内容转换成浏览器可以识别的JS/es5内容
var plugins = require('gulp-load-plugins')();
var source = require('vinyl-source-stream');//vinyl-source-stream是一个文件流的处理插件
var path = require('path');
var assign = require('lodash.assign');
var gutil = require('gulp-util');
//检查js脚本的任务
// gulp.task('lint', function() {
//     gulp.src('./app/list.js') //可配置你需要检查脚本的具体名字。
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });


// 编译Sass
gulp.task('sass', function() {
    gulp.src(['./src/sass/main.scss', './src/sass/container.scss', './src/sass/includes/*.scss'])
        .pipe(concat('style-debug.css'))
        .pipe(sass())
        .on('error', function (err) {
            console.error('compile sass file error: %s', err.message);
        })
        .pipe(gulp.dest('./dist/css')) // 将未压缩的css文件放入css-debug中供DEBUG
        .pipe(minifyCss())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./dist/css'));//dest()写入文件
});

//执行gulp命令
// gulp.task('scripts',function(){
//     gulp.src('./src/js/mainES6.js', { read: false })
//     .pipe(browserify({
//       transform: ['babelify']
//     }))
//     .on('error', function(err){console.log(err.message)})
//     .pipe(rename('bundle.js'))
//     .pipe(gulp.dest('dist/js'))

// });
// 在这里添加自定义 browserify 选项
var customOpts = {
  entries: ['./src/js/mainES6.js'],
  debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));
b.transform(babelify);

gulp.task('scripts', bundle); // 这样你就可以运行 `gulp js` 来编译文件了
b.on('update', bundle); // 当任何依赖发生改变的时候，运行打包工具
b.on('log', gutil.log); // 输出编译日志到终端

function bundle() {
  return b.bundle()
    // 如果有错误发生，记录这些错误
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/js'));
}


//gulp 默认任务
gulp.task('default', function(){
    gulp.run('sass', 'scripts');
    // gulp.watch('./src/js/*.js', function(){
    //     gulp.run('scripts')
    // });
    gulp.watch('./src/sass/*.scss', function(){
        gulp.run('sass');
    })
    gulp.watch('./src/sass/includes/*.scss', function(){
        gulp.run('sass');
    })
});