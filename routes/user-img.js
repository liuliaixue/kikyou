var express = require('express');
var router = express.Router();
var formidable = require("formidable");
var path = require('path');

var fs = require('fs');
AVATAR_UPLOAD_FOLDER = '/avatar/';

router.post('/user-img', function (req, res, next) {
    // console.log(req.body);
    // console.log(req.files)
    // console.log(req.file)
    console.log("正在上传文件");
    res.send("正在上传文件")
    var form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, '../public', AVATAR_UPLOAD_FOLDER);//上传文件的保存路径
    form.keepExtensions = true;//保存扩展名
    form.maxFieldsSize = 20 * 1024 * 1024;//上传文件的最大大小
    form.parse(req, function (err, fields, files) {
        console.log(fields);
        console.log(files);
    });
    next();
})

module.exports = router;