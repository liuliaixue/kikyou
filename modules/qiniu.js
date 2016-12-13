//qiniu 测试

var qiniu = require('qiniu');

// 初始化ak,sk
qiniu.conf.ACCESS_KEY = 'C6zJv3pJd9NaHqodJom5QwacN50HopI9vbldfe1X';
qiniu.conf.SECRET_KEY = 'HTOixXgmbsN8f9F8lRR7T9cnYelMoLgwm6m59Glj';

var bucket = "shabby-2016";
var key = "nice-san.jpg";

var putPolicy = new qiniu.rs.PutPolicy(bucket + ":" + key);

var token = putPolicy.token();


console.log(token);

//key 上传空间的文件名需要和 putPolicy 中的key 相同
var filePath = "./public/avatar/upload_770dfeeef55790a83af7e56bd51d364e.jpg";
var extra = new qiniu.io.PutExtra();

qiniu.io.putFile(token, key, filePath, null, function (err, ret) {
  if (!err) {
    // 上传成功， 处理返回值
    console.log(ret.key, ret.hash, ret.returnBody);
    // ret.key & ret.hash
  } else {
    // 上传失败， 处理返回代码
    console.log(err)
    // http://developer.qiniu.com/docs/v6/api/reference/codes.html
  }
});

/*

var qiniu = require('qiniu');

// 初始化ak,sk
qiniu.conf.ACCESS_KEY = 'C6zJv3pJd9NaHqodJom5QwacN50HopI9vbldfe1X';
qiniu.conf.SECRET_KEY = 'HTOixXgmbsN8f9F8lRR7T9cnYelMoLgwm6m59Glj';

// var bucket = "shabby-2016";
// var key = "nice-san.jpg";


Qiniu = function (bucket, key, filePath, null , callback){
  var putPolicy = new qiniu.rs.PutPolicy(bucket + ":" + key);
  var token = putPolicy.token();

  qiniu.io.putFile(token, key, filePath, null, function (err, ret) {
    if (!err) {
      // 上传成功， 处理返回值
      console.log(ret.key, ret.hash, ret.returnBody);
      // ret.key & ret.hash
      callback(err, ret)
    } else {
      // 上传失败， 处理返回代码
      console.log(err)
      callback(err, ret)
    }
  });

};

module.exports = Qiniu;
*/