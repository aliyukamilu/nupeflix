$('header').html(`
  <div class="d-flex p-3 align-items-center justify-content-between">
    <div class="d-flex align-items-center flex-1">
      <a href='home.html' style="width: 15%;">
        <img src="../assets/img/logo.png" width="100%">
      </a>
      <div class="navItems" style="padding-left: 40px;">
        <a href="home.html">Home</a>
        <a href="#">Live TV</a>
        <a href="#">Documentry</a>
        <a href="#">Movies</a>
        <a href="#">Music</a>
      </div>
    </div>
    <div class="rightNavItems d-flex align-items-center">
      <button class="btn">
        <i class="fas fa-search"></i>
      </button>
      <button class="btn">
        <i class="fas fa-bell"></i>
      </button>
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>

    <div class='sideMenu'>
      <a href="home.html">Home</a>
      <a href="#">Live TV</a>
      <a href="#">Documentry</a>
      <a href="#">Movies</a>
      <a href="#">Music</a>
    </div>

    
  </div>
`)

const hamburgerC = document.querySelector(".hamburger");
const courseAside = document.querySelector(".sideMenu")

hamburgerC.addEventListener("click", mobileMenuC);

function mobileMenuC() {
  hamburgerC.classList.toggle("active");
  courseAside.classList.toggle("active");

}