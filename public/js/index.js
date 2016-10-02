$("#toSend").on('click', function() {
    console.log("a");

    var fname = $("input[name=first_name]").val();
    var lname = $("input[name=last_name]").val();

    $.ajax({
        url: '/process_get',
        data: { first_name: fname, last_name: lname },
        dataType: "json",
        success: function() {
            console.log(arguments);
        }

    });
});
