const countdown = () => {
    const countDate = new Date('March 23, 2022 12:00:00');
    const now = new Date().getTime();
    const gap = countDate - now;

    if (gap < 0) {
        clearInterval(myInterval)
    } else {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

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