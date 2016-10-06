var express = require('express');
var app = express();

app.use(express.static('public'));

// app.get('/index.html', function(req, res) {
//     console.log(__dirname);
//     res.sendFile(__dirname + "/" + "index.html");
// })

// app.get('/process_get', function(req, res) {

//     // 输出 JSON 格式
//     console.log(req.query);
//     response = {
//         first_name1: req.query.first_name,
//         last_name1: req.query.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
// })
var reg = require("./routes/reg");
app.use("/register_get",reg);


var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
