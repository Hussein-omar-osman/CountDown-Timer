let newYear = '1 January 2023';
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function countDown() {
  const newYearsDate = new Date(newYear);
  const currentDate = new Date();

  const totalSeconds = Math.floor((newYearsDate - currentDate) / 1000);

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;
  // console.log(totalSeconds, days, hours, minutes, seconds);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

countDown();

function formatTime(time) {
  if (time < 10) {
    return (time = `0${time}`);
  } else {
    return (time = time);
  }
}

setInterval(countDown, 1000);

const dateBorn = document.getElementById('dateBorn');
const monthBorn = document.getElementById('monthBorn');
const yearBorn = document.getElementById('yearBorn');
const h1 = document.getElementById('h1');
const btn = document.getElementById('submit');
btn.addEventListener('click', function () {
  newYear = `${dateBorn.value} ${monthBorn.value} 2022`;
  h1.innerText = 'Days Remaining';
});
