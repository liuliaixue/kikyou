$("#toSend").on('click', function() {
    console.log("a");

    var name = $("input[name=name]").val();
    var password = $("input[name=password]").val();
    var password2 = $("input[name=password_check]").val();

    if (name == "" || password == "" || password2 == "") {
        alert("字段不能为空");
        return;
    }
    if (password != password2) {
        alert("两次密码不同！");
        return;
    }


    $.ajax({
        url: '/register_get',
        data: { userpass: password, username: name },
        dataType: "json",
        success: function(data, textStatus) {
            console.log(arguments);
            if (data.error) {
                alert(data.error);
            } else {
                alert("用户注册成功！");
            }
        }

    });
});
