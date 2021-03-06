
## 项目启动

进入项目目录
安装依赖
> npm install

安装完后输入
>npm start

启动完毕后，打开localhost:3000即可使用

## 技术栈
- **gulp**驱动
- **node+express**搭建服务器
- **socket.io**即时通信
- **jade**模板渲染生成HTML
- **react+redux**前端架构
- **sass**预编译生成css

## UI
- 模仿微信界面设计
- 提供用户登录注册功能
- 在线人数提醒
- 支持私聊和添加好友
- 支持发表情图和传送文件

##使用注意
- quick_start是我写的一个批处理命令脚本，在相关的依赖包安装好后，用于快速启动项目，具体功能是打开两个新窗口，一个运行gulp命令，一个运行set DEBUG=EasyChat:* & npm start命令
- 如果改动了
- 为了减少项目的启动使用时间，没有使用数据库，只使用了一个user对象存储数据。

##遇到的坑
- Babelify不能识别jsx语法，需要安装依赖**babel-preset-react**和**babel-preset-react**
- 在开发过程中，对js的一点小改动都要用**Browserify**重新打包，速度太慢，严重影响效率，于是使用watchify改善**Browserify**的后续打包处理。

-	在使用react-redux时，如果在回调函数里按如下方式拿整个应用的state时，会出现问题：
`const {state} = this.props;
socket('on',function(data){
//some coding using state;
})`
原因在于reduer是pure函数，在更新了state后，每次通过props拿到的state都是一个新的对象，写在外面的话，每次回调操作的store都是旧的state,应该这么写：
`socket('on',function(data){
const {state} = this.props;
//some coding using state;
})`

##github
https://github.com/ShiningZeng/EasyChat




