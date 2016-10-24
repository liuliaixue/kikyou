var express = require('express');
var app = express();
var path = require('path');
var crypto = require('crypto');
var session = require('express-session');
var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(session({
    secret: '12345',
    name: 'testapp', //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: { maxAge: 60000 }, //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true,
}));

app.use(express.static('public'));
console.log(path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/index.html', function(req, res) {
    console.log(__dirname);
    res.sendFile(__dirname + "/" + "index.html");
})

app.get('/process_get', function(req, res) {

    // 输出 JSON 格式
    console.log(req.query);
    response = {
        first_name1: req.query.first_name,
        last_name1: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})


var reg = require("./routes/reg");
var login = require("./routes/login");
app.use("/register_get", reg);
app.use("/login_get", login);


// var template = require('./routes/template-file');
// app.use('/template-file',template)

var template = require('./routes/usesession');
app.use('/home/usesession.html', template)







var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
