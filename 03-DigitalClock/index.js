const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    let ampm = "AM"

    if (h>12){
        h= h - 12;
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    
    hourEl.innerText = h;
    minuteEl.innerText = minute;
    secondEl.innerText = second;
    ampmEl.innerText = ampm;
    setTimeout( () => {
        updateClock();
    }, 1000);
}

updateClock();