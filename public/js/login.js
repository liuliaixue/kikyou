$("#toSend").on('click', function() {
    console.log("login");

    var name = $("input[name=name]").val();
    var password = $("input[name=password]").val();

    console.log(name,password);
    if (name && password ) {
        $.ajax({
            url: '/login_get',
            data: { userpass: password, username: name },
            dataType: "json",
            success: function(data, textStatus) {
                console.log(arguments);
                if (data.error) {
                    alert(data.error);
                } else {
                    alert("用户登录成功！");
                    
                }
            }

        });

    } else {
        alert("请将信息填写完整！");
        return;
    }



});
