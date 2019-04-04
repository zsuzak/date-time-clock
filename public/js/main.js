var d = new Date();
var month = d.getUTCMonth()+1;
var day = d.getUTCDate();

month = (month < 10) ? "0" + month : month;
day = (day < 10) ? "0" + day : day;

var full = month + '.' + day+ '.' + d.getUTCFullYear();

function showTime () {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if (h == 0) {
        h = 12;
    }
    
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = full + " " + h + ":" + m + ":" + s + " " + session;
    document.getElementById("dt-display").innerText = time;
    document.getElementById("dt-display").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();