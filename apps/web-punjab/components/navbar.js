import "../style.css"
import { changeDetails } from "../switch"

const DEFAULT_LOCATION = "WOW";

const HOTSPOT_MAP = {
  "punjab": "PUN",
  "chandigarh": "PUN",
  "telangana": "HYD",
  "karnataka": "BLR",
  "new delhi": "DEL",
  "maharashtra": "PNE",
  "andhra pradesh": "VZG",
  "madhya pradesh": "IDR"
}

const HOTSPOT_DETAILS = {
  "PUN": {
    headline: "Dil Kehnda",
    tickeLink: "https://konfhub.com/gdscwowpunjab2024",
    eventDate: "April 6, 2024 10:00:00",
    speakers: [],
    ticketBenefits: []
  },
  "PNE": {
    headline: "Dil Kehnda",
    tickeLink: "https://konfhub.com/gdscwowpune2024",
    eventDate: "April 6, 2024 10:00:00",
    speakers: [],
    ticketBenefits: []
  },
  "HYD": {
    headline: "Dil Kehnda",
    tickeLink: "https://konfhub.com/gdscwowpunjab2024",
    eventDate: "April 6, 2024 10:00:00",
    speakers: [],
    ticketBenefits: []
  },
  "BLR": {
    headline: "Dil Kehnda",
    tickeLink: "https://konfhub.com/gdscwowpunjab2024",
    eventDate: "April 6, 2024 10:00:00",
    speakers: [],
    ticketBenefits: []
  },
  "DEL": {
    headline: "Dil Kehnda",
    tickeLink: "https://konfhub.com/gdscwowpunjab2024",
    eventDate: "April 6, 2024 10:00:00",
    speakers: [],
    ticketBenefits: []
  },
  "VZG": {
    headline: "Dil Kehnda",
    tickeLink: "https://konfhub.com/gdscwowpunjab2024",
    eventDate: "April 6, 2024 10:00:00",
    speakers: [],
    ticketBenefits: []
  },
  "IDR": {
    headline: "Dil Kehnda",
    tickeLink: "https://konfhub.com/gdscwowpunjab2024",
    eventDate: "April 6, 2024 10:00:00",
    speakers: [],
    ticketBenefits: []
  }
}


let WOW_REGIONS = Object.keys(HOTSPOT_MAP).map(i=>i[0].toUpperCase()+i.split(" ")[0].slice(1) + (i.split(" ").length>1?" "+i.split(" ")[1][0].toUpperCase( )+i.split(" ")[1].slice(1):""))

function changeLocation(Region){

    console.log({Region});


    if(Object.keys(HOTSPOT_MAP).map(i=>i.toLowerCase()).includes(Region.toLowerCase())){
        document.getElementById("userState").innerText = Region[0].toUpperCase()+Region.split(" ")[0].slice(1) + (Region.split(" ").length>1?" "+Region.split(" ")[1][0].toUpperCase( )+Region.split(" ")[1].slice(1):"")
        if(Region.split(" ")[0].length>7){
             document.getElementById("userState").style.fontSize = "0.8rem"
        }else{
             document.getElementById("userState").style.fontSize = "1rem"

        }
    }else{
        // document.getElementById("userState").innerText = HOTSPOT_MAP['PB']
    }
     let star = document.querySelector('.nav_geo_star')
    star.style.rotate = star.style.rotate=='180deg'?'0deg':'180deg'


    changeDetails(Region)
}




document.querySelector('#nav').innerHTML = `
<header class="header" id="header">
<nav class="nav container">
    <a href="#" class="nav__logo">
        <img src="/images/logobig.png" alt="" class="nav__logo_img">
    </a>

    <div class="nav__menu">
        <ul class="nav__list">
            <li class="nav__item">
                <a href="#" class="nav__link active-link">
                    <i class="bx bx-home-alt-2"></i>
                    <span>Home</span>
                </a>
            </li>

            <li class="nav__item">
                <a href="#speakers" class="nav__link">
                    <i class="bx bx-building-house"></i>
                    <span>Speakers</span>
                </a>
            </li>

            <li class="nav__item">
                <a href="#tickets" class="nav__link">
                    <i class="bx bx-award"></i>
                    <span>Tickets</span>
                </a>
            </li>

            <!-- <li class="nav__item">
                <a href="#contact" class="nav__link">
                    <i class="bx bx-phone"></i>
                    <span>Sessions</span>
                </a>
            </li> -->
        </ul>
    </div>
    <div class="nav_geo">
        <img class="nav_geo_star" src="/images/star.png"/>
        <h2 class="nav_geo_main" id="userState">${DEFAULT_LOCATION}</h2>
        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="nav_geo_dropdown_arrow" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
        </svg>

        <div class="nav_geo_selector">
           
            
        </div>


    </div>
</nav>
</header>
`




function setSelector(LIST){
    console.log({LIST});
   return LIST.reduce((prev,curr,ind)=>prev+`<div id="geo-${ind}" class="nav_geo_item">
                <img class="" src="/images/star.png"/>
                <h3 class="">${curr}</h3>
            </div>`,"")
}

document.querySelector(".nav_geo_selector").innerHTML = setSelector(WOW_REGIONS)


document.querySelectorAll('.nav_geo_item').forEach(item => {
  item.addEventListener('click', function() {
    let selLocInd = item.getAttribute("id").replace("geo-","")
    let myloc = Object.keys(HOTSPOT_MAP)[Number(selLocInd)]
    changeLocation(myloc);
   
  });
});


/*

 <div class="nav_geo_item">
                <img class="" src="/images/star.png"/>
                <h3 class="">Pune</h3>
            </div>
            <div class="nav_geo_item">
                <img class="" src="/images/star.png"/>
                <h3 class="">Delhi</h3>
            </div>
*/


 var requestOptions = {
      method: 'GET',
    };

    fetch("https://ip.ba3a.tech/", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log({result});
        changeLocation(result.regionName.toLowerCase())
        // changeDetails(result.region);
      })
      .catch(error => console.log('error', error));

// changeLocation(DEFAULT_LOCATION)