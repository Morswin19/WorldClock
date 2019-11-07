console.log("Hello Guinea Pig");

let warsawS = document.getElementById('warsawSeconds');
let warsawM = document.getElementById('warsawMinutes');
let warsawH = document.getElementById('warsawHours');
let warsawWhite = document.getElementById('warsawWhite');
let nyS = document.getElementById('nySeconds');
let nyM = document.getElementById('nyMinutes');
let nyH = document.getElementById('nyHours');
let nyWhite = document.getElementById('nyWhite');
let loS = document.getElementById('loSeconds');
let loM = document.getElementById('loMinutes');
let loH = document.getElementById('loHours');
let loWhite = document.getElementById('loWhite');
let toS = document.getElementById('toSeconds');
let toM = document.getElementById('toMinutes');
let toH = document.getElementById('toHours');
let toWhite = document.getElementById('toWhite');
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
    clockColor();
}

let clockColor = () => {
    time = new Date();
    hour = time.getHours();
    if (hour >= 12){
        warsawWhite.style.visibility = 'hidden'
    }
    if (hour >= 18 || hour < 6){
        nyWhite.style.visibility = 'hidden'
    }
    if (hour >= 13 || hour < 1){
        loWhite.style.visibility = 'hidden'
    }
    if (hour >= 5 && hour < 17){
        toWhite.style.visibility = 'hidden'
    }
}


setInterval(secondsFunc, 1000);


