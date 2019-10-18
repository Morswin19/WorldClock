console.log("Hello Guinea Pig");

let clockS = document.getElementById('clockSeconds');
let clockM = document.getElementById('clockMinutes');
let clockH = document.getElementById('clockHours');
let time = new Date();
let second = time.getSeconds();
let minute = time.getMinutes();
let hour = time.getHours();
let sDegFirst = second*6;
let sDegLast = sDegFirst + 360;

let secondsFunc = () => {
    time = new Date();
    second = time.getSeconds();
    minute = time.getMinutes();
    hour = time.getHours();
    let deg = second*6;
    let degM = minute*6 + second/60*6;
    let degH = hour*30 + second/3600*6;
    clockS.style.transform = 'rotate(' + deg  + 'deg)';
    clockM.style.transform = 'rotate(' + degM + 'deg)';
    clockH.style.transform = 'rotate(' + degH + 'deg)';
}

setInterval(secondsFunc, 10);

let clockSecondsNY = document.getElementById('clockSecondsNY');

clockSecondsNY.animate([
    {transform: 'rotate(' + sDegFirst + 'deg)', offset: 0},
    {transform: 'rotate(' + sDegLast + 'deg)', offset: 1},
], {
    duration: 60000,
    easing: 'linear',
    iterations: Infinity,
    direction: 'normal',
});
