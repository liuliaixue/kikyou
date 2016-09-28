var mysql  = require('mysql');  

//创建一个connection
var connection = mysql.createConnection({
    // host: '192.168.1.2', //主机
    user: 'root', //MySQL认证用户名
    password: 'liuliaixue', //MySQL认证用户密码
    port: '3306', //端口号
    database: 'nodesample'
});


connection.connect();

var userModSql = 'UPDATE userinfo SET UserName = ?,UserPass = ? WHERE Id = ?';
var userModSql_Params = ['钟慰', '5678',1];
//改
connection.query(userModSql,userModSql_Params,function (err, result) {
   if(err){
         console.log('[UPDATE ERROR] - ',err.message);
         return;
   }        
  console.log('--------------------------UPDATE----------------------------');
  console.log('UPDATE affectedRows',result.affectedRows);
  console.log('-----------------------------------------------------------------\n\n');
});

connection.end();