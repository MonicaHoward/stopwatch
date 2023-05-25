let startButtonElement = document.querySelector('#start-button');
let stopButtonElement = document.querySelector('#stop-button');
let resetButtonElement = document.querySelector('#reset-button');

let secondsEl = document.querySelector('#seconds');
let tensEl = document.querySelector('#tens');

let seconds = 00;
let tens = 00;

let Interval;


startButtonElement.addEventListener('click', function() {
    console.log("clicked!!!!");
    Interval = setInterval(startTimer, 10);


})

stopButtonElement.addEventListener('click', function(){
    console.log('click')
    clearInterval(Interval);
})


resetButtonElement.addEventListener('click', function(){
    console.log("reset click")
    clearInterval(Interval);
    tens = '00';
    seconds = '00';
    tensEl.innerHTML = tens;
    secondsEl.innerHTML = seconds;

})

function startTimer () {
    tens++;
    console.log(tens)

    if (tens <=9) {
        tensEl.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        tensEl.innerHTML = tens;
    }
    if (tens > 99){
        console.log('??', tens);
        seconds++;
        secondsEl.innerHTML = "0" + seconds;
        tens = 0;
        tensEl.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        secondsEl.innerHTML = seconds;
    }
}