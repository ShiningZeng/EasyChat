// 引入gulp
var gulp = require('gulp');

// 引入组件
var jshint = require('gulp-jshint');//检查js
var sass   = require('gulp-sass');  //编译Sass
var concat = require('gulp-concat');//合并
var minifyCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');//uglify 组件（用于压缩 JS）
var rename = require('gulp-rename');//重命名
var browserify = require('browserify');//browserify负责各个模块的依赖关系
var babelify = require('babelify');//babelify 责把babel/内容转换成浏览器可以识别的JS/es5内容
var watchify = require('watchify'); //用于配合browserity进行高效的js编译
var plugins = require('gulp-load-plugins')();
var source = require('vinyl-source-stream');//vinyl-source-stream是一个文件流的处理插件
var path = require('path');
var gutil = require('gulp-util');//日志工具
var envify = require('gulp-envify');//

//browserify打包处理js文件，watchify改进browserify后续打包工作
gulp.task('scripts', bundle);

function bundle() {
    var customOpts = {
      entries: ['./src/js/main.js'],
      debug: true
    };
    var opts = Object.assign({}, watchify.args, customOpts);
    var b = watchify(browserify(opts))
        .transform(babelify)
        .on('update', bundle)// 当任何依赖发生改变的时候，运行打包工具
        .on('log', gutil.log)// 输出编译日志到终端
    return b.bundle()
        //.on('error', function(error){console.log(Object.assign({},error,{codeFrame:'...',stream:'...'}))})
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))// 如果有错误发生，记录这些错误
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist/js'));
}


gulp.task('lint:register', function() {
    gulp.src('./src/js/register.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        //.pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
})

gulp.task('lint:login', function() {
    gulp.src('./src/js/login.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        //.pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
})

gulp.task('compress', function() {
    gulp.src('./dist/js/bundle.js')
        .pipe(envify({
              NODE_ENV: 'production'
            }))
        .pipe(uglify())
        .pipe(rename('bundle.min.js'))
        .pipe(gulp.dest('./dist/js'))
})

/* 编译Sass */
gulp.task('sass', function() {
    gulp.src('./src/sass/main.scss')
        .pipe(sass())
        .on('error', function (err) {
            console.error('compile sass file error: %s', err.message);
        })
        .pipe(rename('style-debug.css')) // 将未压缩的css文件放入css-debug中供DEBUG
        .pipe(gulp.dest('./dist/css'))
        .pipe(minifyCss())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./dist/css'))
})

//gulp 默认任务
gulp.task('default', function(){
    gulp.run('sass', 'scripts', 'lint:register', 'lint:login');
    gulp.watch(['./src/sass/includes/chatInterface/*.scss',
        './src/sass/includes/*.scss',
        './src/sass/*.scss'], function(){
            setTimeout(function(){
                gulp.run('sass')
            },300);
    })
    gulp.watch('./src/js/register.js', function() {
        gulp.run('lint:register');
    })
    gulp.watch('./src/js/login.js', function() {
        gulp.run('lint:login');
    })
});



