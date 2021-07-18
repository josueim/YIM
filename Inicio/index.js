/*const-var   navbar*/ 
const navHamburger = document.querySelector(".navbar-hamburger")
const navbarMenu = document.querySelector(".navbar-menu")
    /*buttons*/ 
var buttonR = document.querySelector(".container-button--right")
var buttonL = document.querySelector(".container-button--left")
    /*Slider Container*/
const container = document.querySelector("#container")
/*const slider*/
const slider = document.querySelector("#slider")
let sliderSection = document.querySelectorAll(".container-slider__section")
let sliderSectionLast = sliderSection[sliderSection.length -1];
const btnRight = document.querySelector("#button-right")
const btnLeft = document.querySelector("#button-left")

 

/*Navbar - This way we're making a responsive navbar*/ 
navHamburger.addEventListener("click", () =>{
    navbarMenu.classList.toggle("navbar-menu_unvisible");
    buttonR.classList.toggle("container-button--right__unactive");
    buttonL.classList.toggle("container-button--left__unactive");
    container.classList.toggle("container__unvisible")

    /*This way we make sure our page it´s accesible for everyone*/
    if(navbarMenu.classList.contains("navbar-menu_visible")){
        navHamburger.setAttribute("aria-label", "Cerrar menú");
    }else{
        navHamburger.setAttribute("aria-label", "Abrir menú");    
    }
});

/*This way we're making an automatic and manual slider slider*/
slider.insertAdjacentElement('afterbegin', sliderSectionLast);
/*funtion move right*/
function Next() {
    let sliderSectionFirst = document.querySelectorAll(".container-slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    },500);
}
/*funtion move left*/
function Prev() {
    let sliderSection = document.querySelectorAll(".container-slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast); 
        slider.style.marginLeft = "-100%";
    },500);
}
    /*visible content*/
function VisibleContent() {
    sliderContentS.classList.toggle("slider-content__visible");
    sliderContentA.classList.toggle("slider-content__visible");
    sliderContentL.classList.toggle("slider-content__visible");
    setTimeout(function(){
        sliderContentS.classList.toggle("slider-content__visible");
        sliderContentA.classList.toggle("slider-content__visible");
        sliderContentL.classList.toggle("slider-content__visible");
    },300);
}
/*To make it manual*/
btnRight.addEventListener('click', () =>{
    Next();
    VisibleContent()
})
btnLeft.addEventListener('click', () =>{
    Prev();
    VisibleContent()
})
/*To make it automatic*/
setInterval(function() {
    Next();
    VisibleContent()
},3000);