/*const-var   navbar*/ 
const navHamburger = document.querySelector(".navbar-hamburger")
const navbarMenu = document.querySelector(".navbar-menu")
const usVisible = document.querySelector('#us')
 
/*Navbar - This way we're making a responsive navbar*/ 
navHamburger.addEventListener("click", () =>{
    navbarMenu.classList.toggle("navbar-menu_unvisible");
    usVisible.classList.toggle("us__visible")

    /*This way we make sure our page it´s accesible for everyone*/
    if(navbarMenu.classList.contains("navbar-menu_visible")){
        navHamburger.setAttribute("aria-label", "Cerrar menú");
    }else{
        navHamburger.setAttribute("aria-label", "Abrir menú");    
    }
});