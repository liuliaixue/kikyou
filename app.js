var express = require('express');
var app = express();
var path = require('path');
var crypto = require('crypto');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

var fs = require('fs');
var tools = require('./modules/tools');

app.use(cookieParser('alan'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: '12345',
    name: 'testapp', //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: { maxAge: 15 * 60 * 1000 }, //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true,
}));

app.get(['/home/reg.html','/home/login.html'],function(req,res,next){
    if(req.session && req.session.user){
        // user already login
        res.redirect("/home/user.html");
    }else{
        next();
    }
});


app.use(express.static('public'));
// console.log(path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


var reg = require("./routes/reg");
var login = require("./routes/login");
var logout = require("./routes/logout");
app.use("/gateway/api", reg);
app.use("/gateway/api", login);
app.use("/gateway/api", logout);


/*路由*/
// 路由：字符串类型

var bookAPI = require("./routes/book")
app.use('/', bookAPI)





// 路由：字符串模式
app.get('/user/*man', function (req, res, next) {
    res.send('user');  // 比如： /user/man, /user/woman
});

// 路由：正则表达式
app.get(/animals?$/, function (req, res, next) {
    res.send('animal');  // 比如： /animal, /animals
});

// 路由：命名参数
app.get('/employee/:uid/:age', function (req, res, next) {
    res.json(req.params);  // 比如：/111/30，返回 {"uid": 111, "age": 30}
});

/*路由拆分*/
var user = express.Router();

user.get('/list', function (req, res, next) {
    res.send('/list');
});

user.get('/detail', function (req, res, next) {
    res.send('/detail');
});

app.use('/user', user); // mini app，通常做应用拆分



// 聊天室 start

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get("/chat", function (req, res, next) {
    res.send("welcome to chatroom");
});


//在线用户
var onlineUsers = {};
//当前在线人数
var onlineCount = 0;

io.on('connection', function (socket) {
    console.log('a user connected');

    //监听新用户加入
    socket.on('login', function (obj) {
        //将新加入用户的唯一标识当作socket的名称，后面退出的时候会用到
        socket.name = obj.userid;

        //检查在线列表，如果不在里面就加入
        if (!onlineUsers.hasOwnProperty(obj.userid)) {
            onlineUsers[obj.userid] = obj.username;
            //在线人数+1
            onlineCount++;
        }

        //向所有客户端广播用户加入
        io.emit('login', { onlineUsers: onlineUsers, onlineCount: onlineCount, user: obj });
        console.log(obj.username + '加入了聊天室');
    });

    //监听用户退出
    socket.on('disconnect', function () {
        //将退出的用户从在线列表中删除
        if (onlineUsers.hasOwnProperty(socket.name)) {
            //退出用户的信息
            var obj = { userid: socket.name, username: onlineUsers[socket.name] };

            //删除
            delete onlineUsers[socket.name];
            //在线人数-1
            onlineCount--;

            //向所有客户端广播用户退出
            io.emit('logout', { onlineUsers: onlineUsers, onlineCount: onlineCount, user: obj });
            console.log(obj.username + '退出了聊天室');
        }
    });

    //监听用户发布聊天内容
    socket.on('message', function (obj) {
        //向所有客户端广播发布的消息
        io.emit('message', obj);
        console.log(obj.username + '说：' + obj.content);
    });

});

// 聊天室 end

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
