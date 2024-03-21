import "../style.css";


document.querySelector("#hero").innerHTML = `
<div class="flex-row-align-start-container container">
  <div class="section hero_main">
  <div class="hero_left">
        <h1 class="third-color headline hero_headline">Dil Kehnda </br><span id='dynamicText'>WOW!</span></h1>
      <p class="multi-paragraph hero_desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    <div class="ts_bookNow_button_container">
      <div class="button_bg"></div>
      
      <button class="ts_bookNow_button">
        Get Tickets Now
      </button>
      
    </div>
  </div>


  <div class="hero_right">
  
  <img class="hero_img" src="/images/star.png" alt="GDSC WOW">
  
  </div>
  
  <a id="hero_cta" href="https://gdscwow.xyz/">
  </div>
  
  </div>`


   var typing=new Typed("#dynamicText", {
       strings: [
    "WOW" ,          //English
    "वाह!",         // Hindi
    "ওয়াও!",    // Bengali
    "வாவ்!",       // Tamil
    "వావ్!",       // Telugu
    "ವಾವ್!",       // Kannada
    "വാവ്!",       // Malayalam
    "વાહ!",        // Gujarati
    "वाह!",         // Marathi
    "ਵਾਹ!",        // Punjabi
    "واہ!"         // Urdu
],
       typeSpeed: 100,
       backSpeed: 100,
       backDelay:900,
       loop: true,
   });