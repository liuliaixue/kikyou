$("#to-add-book").on('click',function(){
    // alert("to-add-book");
    console.log("to-add-book");
    var name = $('[name=name]').val();
    var code = $('[name=code]').val();
    if(name && code){
        $.ajax({
            type:"POST",
            url: '/gateway/api/addBook',
            data: { name: name, code: code },
            dataType: "json",
            success: function(data, textStatus) {
                
                console.log(arguments);
                if (data.error) {
                    alert(data.error);
                } else {
                    alert("添加书籍成功！");
                    
                }
            },
            error:function(){
                console.log(arguments);
                alert('fail');
            }

        });
    }else{
        alert("书籍名或编号错误！");
    }
})