/*const-var   navbar*/ 
const navHamburger = document.querySelector(".navbar-hamburger")
const navbarMenu = document.querySelector(".navbar-menu")
const sliderVisible = document.querySelector('#slider-visble')
const buttonsVisible = document.querySelector('#buttons-visible')
 
/*Navbar - This way we're making a responsive navbar*/ 
navHamburger.addEventListener("click", () =>{
    navbarMenu.classList.toggle("navbar-menu_unvisible");
    sliderVisible.classList.toggle("slider__visible");
    buttonsVisible.classList.toggle("buttons__visible");

    /*This way we make sure our page it´s accesible for everyone*/
    if(navbarMenu.classList.contains("navbar-menu_visible")){
        navHamburger.setAttribute("aria-label", "Cerrar menú");
    }else{
        navHamburger.setAttribute("aria-label", "Abrir menú");    
    }
});

/*Slider*/
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}

/*To make it automatic*/
setInterval(function() {
    nextSlide();
},5000);