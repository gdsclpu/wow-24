import "../style.css";

document.querySelector("#who-should-join-us").innerHTML =
  `<h2 class="second-color">Who Should Join Us?</h2>
<p class="multi-paragraph">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<div class="flex-row-container">
  <div class="full-width-image">
    <img src="/images/whoJoinUsLeftImg.png" alt="Left Image">
  </div>
  <div class="half-width-image-container">
    <div class="half-width-image">
      <img src="/images/whoJoinUsRightTopImg.png" alt="Top Right Image">
    </div>
    <div class="half-width-image">
      <img src="/images/whoJoinUsRightBottomImg.png" alt="Bottom Right Image">
    </div>
  </div>
</div>`;
