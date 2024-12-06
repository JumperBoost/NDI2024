const aboveTheOcean = document.getElementById("aboveTheOcean");
let blurValue = 0;


let timer;
let is8bit = false;
startTimer();

function startTimer(interval = 1000) {
    timer = setInterval(function () {
        blurValue = "blur("+Math.abs(gaussianRandom(0, 2))+"px)";
        aboveTheOcean.style.filter = blurValue;
    }, interval);
}

function stopTimer() {
    clearInterval(timer);
}

function gaussianRandom(mean=0, variance=1) {
    const u = 1 - Math.random();
    const v = Math.random();
    const z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    return z * variance + mean;
}




