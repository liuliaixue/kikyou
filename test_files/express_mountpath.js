var express = require('express');

var app = express();

// app.get('/', function(req, res){
//   res.send('hello world');
// });

// app.listen(3000);

// app.locals.title = 'My App';
// app.locals.strftime = require('strftime');
// app.locals.email = 'me@myapp.com';


var admin = express();

admin.get('/', function (req, res) {
  console.log(admin.mountpath); // [ '/adm*n', '/manager' ]
  res.send('Admin Homepage');
})

admin.listen(3000);

var secret = express();
secret.get('/', function (req, res) {
  console.log(secret.mountpath); // /secr*t
  res.send('Admin Secret');
});

admin.use('/secr*t', secret); // load the 'secret' router on '/secr*t', on the 'admin' sub app
app.use(['/adm*n', '/manager'], admin); // l