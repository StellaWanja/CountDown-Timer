const cDay = document.getElementById("days");
const cHour = document.getElementById("hours");
const cMin = document.getElementById("min");
const cSec = document.getElementById("sec");

const newYearsDate = '1 Jan 2021';

const countDown = () => {
    const newYears = new Date(newYearsDate);
    const currentDate = new Date();

    const totalSecTime = (newYears - currentDate) / 1000;

    const day = Math.floor(totalSecTime /3600 / 24);
    const hr = Math.floor(totalSecTime / 3600) %24;
    const min = Math.floor(totalSecTime / 60) % 60;
    const sec = Math.floor(totalSecTime ) % 60;

    cDay.innerHTML = day.toString();
    cHour.innerHTML = formatTime(hr.toString());
    cMin.innerHTML = formatTime(min.toString());
    cSec.innerHTML = formatTime(sec.toString());
}

const formatTime = (time) => {
    return time < 10 ? "0" + time : time;
}

countDown();

setInterval(countDown, 1000);

