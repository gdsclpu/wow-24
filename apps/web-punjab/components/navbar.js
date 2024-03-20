import "../style.css"

const DEFAULT_LOCATION = "punjab";
var LOCATION_LIST = ['Punjab','Delhi','Pune']



function changeLocation(State){

    if(LOCATION_LIST.map(i=>i.toLowerCase()).includes(State.toLowerCase())){
        document.getElementById("userState").innerText = State[0].toUpperCase() + State.slice(1)
    }
     let star = document.querySelector('.nav_geo_star')
    star.style.rotate = star.style.rotate=='180deg'?'0deg':'180deg'
}




document.querySelector('#nav').innerHTML = `
<header class="header" id="header">
<nav class="nav container">
    <a href="#" class="nav__logo">
        <img src="/images/logo.png" alt="" class="nav__logo-img">
    </a>

    <div class="nav__menu">
        <ul class="nav__list">
            <li class="nav__item">
                <a href="#home" class="nav__link active-link">
                    <i class="bx bx-home-alt-2"></i>
                    <span>Home</span>
                </a>
            </li>

            <li class="nav__item">
                <a href="#popular" class="nav__link">
                    <i class="bx bx-building-house"></i>
                    <span>Region</span>
                </a>
            </li>

            <li class="nav__item">
                <a href="#value" class="nav__link">
                    <i class="bx bx-award"></i>
                    <span>About</span>
                </a>
            </li>

            <li class="nav__item">
                <a href="#contact" class="nav__link">
                    <i class="bx bx-phone"></i>
                    <span>Activities</span>
                </a>
            </li>

            <li class="nav__item">
                <a href="#contact" class="nav__link">
                    <i class="bx bx-phone"></i>
                    <span>Sessions</span>
                </a>
            </li>
        </ul>
    </div>
    <div class="nav_geo">
        <img class="nav_geo_star" src="/images/star.png"/>
        <h2 class="nav_geo_main" id="userState">${DEFAULT_LOCATION}</h2>
        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="nav_geo_dropdown_arrow" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
        </svg>

        <div class="nav_geo_selector">
            <div class="nav_geo_item">
                <img class="" src="/images/star.png"/>
                <h3 class="">Pune</h3>
            </div>
            <div class="nav_geo_item">
                <img class="" src="/images/star.png"/>
                <h3 class="">Delhi</h3>
            </div>
            
        </div>


    </div>
</nav>
</header>
`

document.querySelectorAll('.nav_geo_item').forEach(item => {
  item.addEventListener('click', function() {
    let selLoc = item.querySelector("h3").innerText
    changeLocation(selLoc);
   
  });
});

changeLocation(DEFAULT_LOCATION)