import "../style.css"

document.querySelector('#timer').innerHTML = `
<div class="timer-parent-container">
  <div class="timer-container">
    <h2 class="timer-heading">Grab Your Exclusive Discount</h2>
    <p class="timer-paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui culpa fuga, voluptatem voluptatibus iure aliquam consectetur et nesciunt voluptas eligendi commodi ullam beatae labore illum mollitia sit natus odio. Magnam.</p>
    <div class="actual-timer">

      <div class="time">
        <div class="time-data">
        <span id="days-tens">0</span>
        <span id="days-unit">0</span>
        </div>
        <div class="value">Days</div>
      </div>

      <div class="time">
        <div class="time-data">
        <span id="hours-tens">0</span>
        <span id="hours-unit">0</span></div>
        <div class="value">Hours</div>
      </div>

      <div class="time">
        <div class="time-data">
        <span id="minutes-tens">0</span>
        <span id="minutes-unit">0</span>
      </div>
        <div class="value">Minutes</div>
      </div>

      <div class="time">
        <div class="time-data">
          <span id="seconds-tens">0</span>
        <span id="seconds-unit">0</span>
        
        </div>
        <div class="value">Seconds</div>
      </div>
    </div>
  </div>
</div>
`
const targetDate = new Date("March 5, 2024 15:00:00").getTime(); // Change the Time According to your need


const countdownInterval = setInterval(() => {

  const now = new Date().getTime();
  const timeDifference = targetDate - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);


  document.getElementById("days-tens").textContent = Math.floor(days/10);
  document.getElementById("days-unit").textContent = days%10;
  document.getElementById("hours-unit").textContent = hours%10;
  document.getElementById("hours-tens").textContent = Math.floor(hours/10);
  
  document.getElementById("minutes-unit").textContent = minutes%10;
  document.getElementById("minutes-tens").textContent = Math.floor(minutes/10);
  document.getElementById("seconds-unit").textContent = seconds%10;
  document.getElementById("seconds-tens").textContent = Math.floor(seconds/10);

 
}, 1000);
