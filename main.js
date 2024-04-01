function startClock() {
    var today = new Date();
    var time = today.toLocaleTimeString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
    document.getElementById('clock').innerHTML = time;
    var t = setTimeout(startClock, 500);
}
startClock();