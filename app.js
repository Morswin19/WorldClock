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
let mDegFirst = minute*6 + second*6/60;
let mDegLast = mDegFirst + 360;
let hDegFirst = hour*30 + minute*6/12 + second*6/60/12;
let hDegLast = hDegFirst + 360;

let secondsFunc = () => {
    time = new Date();
    second = time.getSeconds();
    minute = time.getMinutes();
    hour = time.getHours();
    let deg = second*6;
    let degM = minute*6 + second/60*6;
    let degH = hour*30 + minute*6/12 + second*6/60/12*6;
    clockS.style.transform = 'rotate(' + deg  + 'deg)';
    clockM.style.transform = 'rotate(' + degM + 'deg)';
    clockH.style.transform = 'rotate(' + degH + 'deg)';
}

setInterval(secondsFunc, 10);

let clockSecondsNY = document.getElementById('clockSecondsNY');
let clockMinutesNY = document.getElementById('clockMinutesNY');
let clockHoursNY = document.getElementById('clockHoursNY');


clockSecondsNY.animate([
    {transform: 'rotate(' + sDegFirst + 'deg)', offset: 0},
    {transform: 'rotate(' + sDegLast + 'deg)', offset: 1},
], {
    duration: 60000,
    easing: 'linear',
    iterations: Infinity,
    direction: 'normal',
});

clockMinutesNY.animate([
    {transform: 'rotate(' + mDegFirst + 'deg)', offset: 0},
    {transform: 'rotate(' + mDegLast + 'deg)', offset: 1},
],{
    duration: 3600000,
    easing: 'linear',
    iterations: Infinity,
    direction: 'normal',
})

clockHoursNY.animate([
    {transform: 'rotate(' + hDegFirst + 'deg)', offset: 0},
    {transform: 'rotate(' + hDegLast + 'deg)', offset: 1},
],{
    duration: 43200000,
    easing: 'linear',
    iterations: Infinity,
    direction: 'normal',
})


