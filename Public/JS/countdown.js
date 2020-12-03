window.onload = () => {
  const countdown = new Countdown();
}

function Countdown() {
  this.intervalGetValue();
};

Countdown.prototype.intervalGetValue = () => {
  let countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();

  // Update the count down every 1 second
  let x = setInterval(function () {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    if(document.getElementById('days').innerHTML != days) document.getElementById('days').innerHTML = (days < 10 ? '0' : '') + days;
    if(document.getElementById('hours').innerHTML != hours) document.getElementById('hours').innerHTML = (hours < 10 ? '0' : '') + hours;
    if(document.getElementById('minutes').innerHTML != minutes) document.getElementById('minutes').innerHTML = (minutes < 10 ? '0' : '') + minutes;
    if(document.getElementById('seconds').innerHTML != seconds) document.getElementById('seconds').innerHTML = (seconds < 10 ? '0' : '') + seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);
}