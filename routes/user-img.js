var express = require('express');
var router = express.Router();
var formidable = require("formidable");
var path = require('path');

var fs = require('fs');
AVATAR_UPLOAD_FOLDER = '/avatar/';

var qupload = require('../modules/qiniu');
var User = require("../modules/users.js");





router.post('/user-img', function (req, res, next) {

    var form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, '../public', AVATAR_UPLOAD_FOLDER);//上传文件的保存路径
    form.keepExtensions = true;//保存扩展名
    form.maxFieldsSize = 20 * 1024 * 1024;//上传文件的最大大小
    form.parse(req, function (err, fields, files) {
        // console.log("上传成功");
        // console.log(fields, files);
        // console.log(files.fulAvatar.path)
        if (files && files.fulAvatar) {
            qupload(files.fulAvatar.name, files.fulAvatar.path, function (e, r) {
                if(req.session.user && r ){
                    User.updateHeadImg(req.session.user.id , qupload.basicURL + r.key ,function(e,r){
                        if(!e){
                            console.log("upload to qiniu success");
                            res.redirect("/home/user.html")
                            next();
                        }else{
                            console.log(e);
                        }
                    })
                }else{
                    console.log("user not found or file not found" );
                }
                
            })
        }


    });

    



    // next();
})

module.exports = router;


