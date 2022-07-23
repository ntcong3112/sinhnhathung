var end = new Date('07/24/2022 00:00 AM');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {

        clearInterval(timer);
        window.location.href = "index1.html";
        return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('countdown').innerHTML = days + ' ngày ';
    document.getElementById('countdown').innerHTML += hours + ' giờ ';
    document.getElementById('countdown').innerHTML += minutes + ' phút ';
    document.getElementById('countdown').innerHTML += seconds + ' giây';
}

timer = setInterval(showRemaining, 1000);
