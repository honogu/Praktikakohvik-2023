const countDate = new Date('2023-03-01 12:00:00');
const animationDuration = 1000;
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const animateValue = (className, end, duration) => {
    if (end >= 100 || end <= 0) return;
    var current = 0;
    var obj = document.querySelectorAll(className);
    var stepTime = Math.abs(Math.floor(duration / end));
    var timer = setInterval(function() {
        current += 1;
        obj.forEach(element => element.innerText = current);
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}
const countdown = () => {
    const now = new Date().getTime();
    const gap = countDate - now;

    if (gap < 0) {
        clearInterval(myInterval)
    } else {
        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        document.querySelectorAll(".dayNr").forEach(element => element.innerText = textDay);
        document.querySelectorAll(".hourNr").forEach(element => element.innerText = textHour);
        document.querySelectorAll(".minuteNr").forEach(element => element.innerText = textMinute);
        document.querySelectorAll(".secondNr").forEach(element => element.innerText = textSecond);
    }
}
const myInterval = setInterval(countdown, 1000);
export const animateCountdown = () => {
    const now = new Date().getTime();
    const gap = countDate - now;
    var dayRange = Math.floor(gap / day);
    var hourRange = Math.floor((gap % day) / hour);
    var minuteRange = Math.floor((gap % hour) / minute);
    var secondRange = Math.floor((gap % minute) / second);

    animateValue('.dayNr', dayRange, animationDuration);
    animateValue('.hourNr', hourRange, animationDuration);
    animateValue('.minuteNr', minuteRange, animationDuration);
    animateValue('.secondNr', secondRange - animationDuration / 1000, animationDuration);
    setTimeout(myInterval, animationDuration);
}
