var hour = 0;
var minute = 59;
var second = 59;

var interval = setInterval(function () {

    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second--;

    if (Number(document.getElementById("second").innerHTML) == 0) {

        second = 59;
        minute--;

    } else if (Number(document.getElementById("minute").innerHTML) == 0) {

        document.getElementById("second").innerHTML = "0";
        clearInterval(interval);
    }

}, 1000);