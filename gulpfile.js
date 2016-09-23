// gulp只负责文件执行功能
var gulp = require('gulp');
//browserify负责各个模块的依赖关系
var browserify = require('browserify');
//reactify 责把JSX内容转换成浏览器可以识别的JS内容
var reactify = require('reactify');
//vinyl-source-stream是一个文件流的处理插件
var source = require('vinyl-source-stream');
//执行gulp命令
gulp.task('default',function(){
    return browserify('app/layout.js')
    //这里是browserify需要管理的文件，因为layout.js依赖list.js
    //所以browserify会自动引入list.js
    .transform(reactify)//browserify下的转换功能，我们把reactify传入，表示把JSX转换成JS
    .bundle()//把所有JS代码合并成一个文件，包括react等依赖的文件，这里返回的是一个字符串
    .pipe(source('bundle.js'))//转换成文件流
    .pipe(gulp.dest('build'))//插入到这个目录下
});