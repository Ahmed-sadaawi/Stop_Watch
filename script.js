// بسم الله الرحمن الرحيم

let tensElement = document.getElementById("tens");
let secondsElement = document.getElementById("seconds");
let minutesElement = document.getElementById("minutes");

let tens = 0;
let seconds = 0;
let minutes = 0;
let Interval;

let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

start.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
}
stop.onclick = function () {
    clearInterval(Interval);
}
reset.onclick = function () {
    clearInterval(Interval);
    tens = 0;
    seconds = 0;
    minutes = 0;
    tensElement.innerHTML = "0" + tens;
    secondsElement.innerHTML = "0" + seconds;
    minutesElement.innerHTML = "0" + minutes;
}

function startTime() {
    tens++;
    if (tens <= 9) {
        tensElement.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        tensElement.innerHTML = tens;
    }
    if (tens > 99) {
        tens = 0;
        tensElement.innerHTML = "0" + tens;
        seconds++;
        secondsElement.innerHTML = "0" + seconds;
    }
    if (seconds > 9) {
        secondsElement.innerHTML = seconds;
    }
    if (seconds > 99) {
        seconds = 0;
        secondsElement.innerHTML = "0" + seconds;
        minutes++;
        minutesElement.innerHTML = "0" + minutes;
    }
}

