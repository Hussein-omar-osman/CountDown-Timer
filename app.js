const newYear = '1 Jan 2023';
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
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
}

countDown();

setInterval(countDown, 1000);
