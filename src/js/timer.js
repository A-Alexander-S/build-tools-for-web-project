import { Howl, Howler } from 'howler';

const timerInput = document.getElementsByClassName("timer__input");

const timerInputHours = document.querySelector(".timer__input-hours");
const timerInputMinutes = document.querySelector(".timer__input-minutes");
const timerInputSecond = document.querySelector(".timer__input-second");



const timerCountDown = document.querySelector(".timer__count-down");

let timerCountHours = document.querySelector(".timer__count-hours");
let timerCountMinutes = document.querySelector(".timer__count-minutes");
let timerCountSecond = document.querySelector(".timer__count-seconds");


let timerBtnStart = document.querySelector(".timer__btn-start");
let timerBtnStop = document.querySelector(".timer__btn-stop");

var sound = new Howl({
  src: ['../assets/sound.mp3']
});

function timer() {

  let timersFinished = false;

  let hours = timerInputHours.value * 60 * 60 * 1000;
  let minutes = timerInputMinutes.value * 60 * 1000;
  let seconds = timerInputSecond.value * 1000;

  let startTime = new Date().getTime();
  let endTime = startTime + hours + minutes + seconds;

  let diff = endTime - startTime;
  console.log("startTime " + startTime);
  console.log("endTime   " + endTime);
  console.log("diff 1 " + diff);

  timerBtnStop.addEventListener("click", (e) => {
    e.preventDefault();
    clearInterval(interval);
  });

  let interval = setInterval(function updateCuntDown() {
    console.log("updateCuntDown " + diff);
    console.log("timersFinished " + timersFinished);

    diff -= 1000;
    if (diff >= 0) {

      timerCountHours.innerHTML = Math.floor((diff / (1000 * 60 * 60)) % 24);
      timerCountMinutes.innerHTML = Math.floor((diff / 1000 / 60) % 60);
      timerCountSecond.innerHTML = Math.floor((diff / 1000) % 60);

    } else {
      timersFinished = true;
      clearInterval(interval);
      timersFinished = false;
      sound.play();
    }
  }, 1000);
};


timerBtnStart.addEventListener("click", (e) => {
  e.preventDefault();

  timer();
});

timerBtnStop.addEventListener("click", (e) => {
  e.preventDefault();
});

