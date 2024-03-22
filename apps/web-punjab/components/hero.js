import "../style.css";


document.querySelector("#hero").innerHTML = `
<div class="flex-row-align-start-container container">
  <div class="section hero_main">
  <div class="hero_left">
        <h1 class="third-color headline hero_headline"><span id="hero_head">Dil Kehnda</span></br><span id='dynamicText'>WOW!</span></h1>
      <p class="multi-paragraph hero_desc">
      GDSC (Wonder of Wonders), aka GDSC WOW, is India's biggest student-run tech festival! This annual event brings together 20,000+ students from 500+ universities across the country for a massive celebration of technology and innovation.
      </p>
    <div class="ts_bookNow_button_container">
      <div class="button_bg"></div>
      <a id="hero_cta" href="https://gdscwow.xyz/">
      <button class="ts_bookNow_button">
        Get Tickets Now
      </button>
      </a>
      
    </div>
  </div>


  <div class="hero_right">
  
  <img class="hero_img" src="/images/star.png" alt="GDSC WOW">
  
  </div>
  
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