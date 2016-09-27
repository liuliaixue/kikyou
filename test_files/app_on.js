var express = require('express');
var app = express();
app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);

var admin  = express();

admin.on('mount',function(parent){
	console.log('Admin Mounted');
	// console.log(parent);
})

admin.get('/',function (req,res) {
	console.log('--- req ---')
	// console.log(req.method);
	// console.log(req.client);
	res.send('Admin Homepage')
})

app.use('/admin',admin)