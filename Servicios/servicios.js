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