var getNowDateString = function () {
    var nowDate = new Date();
    var year = nowDate.getFullYear();
    var month = nowDate.getMonth();
    var day = nowDate.getDate();

    year = year + "";
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    return year + month + day;
}

module.exports = {
    getNowDateString: getNowDateString

}