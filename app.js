const newYear = '1 Jan 2023';

function countDown() {
  const newYearsDate = new Date(newYear);
  const currentDate = new Date();

  const totalSeconds = Math.floor((newYearsDate - currentDate) / 1000);

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;
  console.log(totalSeconds, days, hours, minutes, seconds);
}

countDown();

// setInterval(countDown, 1000);
