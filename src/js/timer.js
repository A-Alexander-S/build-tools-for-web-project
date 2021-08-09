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

let hours = timerInputHours.value * 60 * 60 * 1000;
let minutes = timerInputMinutes.value * 60 * 1000;
let seconds = timerInputSecond.value * 1000;

let startTime = new Date().getTime();
let endTime = startTime + hours + minutes + seconds;

function updateCuntDown() {

  let diff = endTime - startTime;
  console.log("startTime " + startTime);
  console.log("endTime" + endTime);
  console.log("diff " + diff);
  // diff -= 1000;
  if (diff > 0) {
    // let hours = timerInputHours.value * 60 * 60 * 1000;
    // let minutes = timerInputMinutes.value * 60 * 1000;
    // let seconds = timerInputSecond.value * 1000;

    // Math.floor((diff / (1000 * 60 * 60)) % 24)
    // Math.floor((diff / 1000 / 60) % 60)
    // Math.floor((diff / 1000) % 60)

    timerCountHours.innerHTML = Math.floor((diff / (1000 * 60 * 60)) % 24);
    timerCountMinutes.innerHTML = Math.floor((diff / 1000 / 60) % 60);
    timerCountSecond.innerHTML = Math.floor((diff / 1000) % 60);
  };
};

timerBtnStart.addEventListener("click", (e) => {
  e.preventDefault();

  // let interval = setInterval(() => {
  updateCuntDown();
  // }, 1000);
  // timerCountHours.innerHTML = timerInputHours.value;
  // timerCountMinutes.innerHTML = timerInputMinutes.value;
  // timerCountSecond.innerHTML = timerInputSecond.value;
});

// console.log("timerInputHours.value" + timerInputHours.value);
// console.log("endTime" + endTime);

timerBtnStop.addEventListener("click", (e) => {
  e.preventDefault();
});



// let interval = setInterval(() => {
//   updateCuntDown();
// }, 1000);


