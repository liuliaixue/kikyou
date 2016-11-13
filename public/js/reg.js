$("#toSend").on('click', function() {
    console.log("a");

    var name = $("input[name=name]").val();
    var password = $("input[name=password]").val();
    var password2 = $("input[name=password-check]").val();

    console.log(name,password,password2);
    if (name && password && password2) {
        if (password != password2) {
            alert("两次密码不同！");
            return;
        }

        $.ajax({
            url: '/gateway/api/register',
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

    } else {
        alert("字段不能为空");
        return;
    }



});
