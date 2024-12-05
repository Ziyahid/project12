document.addEventListener("DOMContentLoaded", () => {
let [s, m, h] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopWatch() {
    s++;
    if (s == 60) {
        s = 0;
        m++;
        if (m == 60) {
            m = 0;
            h++;
        }
    }
    displayTime.innerHTML = formatTime(h) + ":" + formatTime(m) + ":" + formatTime(s);
}


function formatTime(unit) {
    return unit < 10 ? "0" + unit : unit; 
}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
}

function watchStop() {
    clearInterval(timer);
    timer = null;
}

function watchReset() {
    clearInterval(timer);
    timer = null;
    [s, m, h] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
}


document.querySelectorAll('.btns img')[0].addEventListener('click', watchStop);  // Stop button
document.querySelectorAll('.btns img')[1].addEventListener('click', watchStart); // Start button
document.querySelectorAll('.btns img')[2].addEventListener('click', watchReset); // Reset button
});
