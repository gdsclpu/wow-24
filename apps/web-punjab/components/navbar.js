import "../style.css"

const DEFAULT_LOCATION = "WOW";
var LOCATION_LIST = { 
    PB:'Punjab',
    CH:'Punjab',
    MH: 'Pune' ,
    DL:'Delhi'
                    }


let WOW_REGIONS = Object.values(LOCATION_LIST).filter((e,i)=>Object.values(LOCATION_LIST).indexOf(e)==i)

function changeLocation(Region){


    if(Object.keys(LOCATION_LIST).map(i=>i.toUpperCase()).includes(Region.toUpperCase())){
        document.getElementById("userState").innerText = LOCATION_LIST[Region.toUpperCase()]
    }else{
        document.getElementById("userState").innerText = LOCATION_LIST['PB']
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
   return LIST.reduce((prev,curr)=>prev+`<div id="geo-${Object.keys(LOCATION_LIST).filter((cr)=>curr==LOCATION_LIST[cr])[0]}" class="nav_geo_item">
                <img class="" src="/images/star.png"/>
                <h3 class="">${curr}</h3>
            </div>`,"")
}

document.querySelector(".nav_geo_selector").innerHTML = setSelector(WOW_REGIONS)


document.querySelectorAll('.nav_geo_item').forEach(item => {
  item.addEventListener('click', function() {
    let selLoc = item.getAttribute("id").replace("geo-","")
    console.log(selLoc);
    changeLocation(selLoc);
   
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
        // console.log({result});
        changeLocation(result.region)
        // changeDetails(result.region);
      })
      .catch(error => console.log('error', error));

// changeLocation(DEFAULT_LOCATION)