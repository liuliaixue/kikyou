var express = require('express');
var app = express();
app.get('/', function(req, res){
  res.send('hello world, alan');
});

var requireAuthentication=function(){
	console.log('requireAuthentication :1');
}

var loadUser=function () {
	console.log("loadUser :2");
}

app.all('/api/*', requireAuthentication,loadUser, loadUser);



// var admin  = express();
// admin.on('mount',function(parent){
// 	console.log('Admin Mounted');
// 	// console.log(parent);
// })
// admin.get('/',function (req,res) {
// 	console.log('--- req ---')
// 	// console.log(req.method);
// 	// console.log(req.client);
// 	res.send('Admin Homepage')
// })
// app.use('/admin',admin)






app.listen(3000);