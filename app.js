console.log("Hello Guinea Pig");

let warsawS = document.getElementById('warsawSeconds');
let warsawM = document.getElementById('warsawMinutes');
let warsawH = document.getElementById('warsawHours');
let nyS = document.getElementById('nySeconds');
let nyM = document.getElementById('nyMinutes');
let nyH = document.getElementById('nyHours');
let loS = document.getElementById('loSeconds');
let loM = document.getElementById('loMinutes');
let loH = document.getElementById('loHours');
let toS = document.getElementById('toSeconds');
let toM = document.getElementById('toMinutes');
let toH = document.getElementById('toHours');
let time = new Date();
let second = time.getSeconds();
let minute = time.getMinutes();
let hour = time.getHours();

let secondsFunc = () => {
    time = new Date();
    second = time.getSeconds();
    minute = time.getMinutes();
    hour = time.getHours();
    let deg = second*6;
    let degM = minute*6 + second/60*6;
    let warsawDegH = hour*30 + minute*6/12 + second*6/60/12*6;
    let nyDegH = hour*30 + minute*6/12 + second*6/60/12*6 - 180;
    let toDegH = hour*30 + minute*6/12 + second*6/60/12*6 + 210;
    let loDegH = hour*30 + minute*6/12 + second*6/60/12*6 - 30;
    warsawS.style.transform = 'rotate(' + deg  + 'deg)';
    nyS.style.transform = 'rotate(' + deg  + 'deg)';
    loS.style.transform = 'rotate(' + deg  + 'deg)';
    toS.style.transform = 'rotate(' + deg  + 'deg)';
    warsawM.style.transform = 'rotate(' + degM + 'deg)';
    nyM.style.transform = 'rotate(' + degM + 'deg)';
    loM.style.transform = 'rotate(' + degM + 'deg)';
    toM.style.transform = 'rotate(' + degM + 'deg)';
    warsawH.style.transform = 'rotate(' + warsawDegH + 'deg)';
    nyH.style.transform = 'rotate(' + nyDegH + 'deg)';
    toH.style.transform = 'rotate(' + toDegH + 'deg)';
    loH.style.transform = 'rotate(' + loDegH + 'deg)';
}



setInterval(secondsFunc, 1000);


