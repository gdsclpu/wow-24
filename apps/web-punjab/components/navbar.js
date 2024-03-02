import "../style.css"

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
</nav>
</header>
`
