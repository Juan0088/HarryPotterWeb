const alo = document.querySelectorAll("#gafa")


alo.forEach(Gafas =>{
  Gafas.addEventListener('click', () => {
  Gafas.classList.remove('regreso');
  Gafas.classList.add('caida');
  setTimeout(() => {
    Gafas.classList.remove('caida');
    Gafas.classList.add('regreso');
  }, 500);
});
})
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section")
let sliderSectionLast = sliderSection[sliderSection.length -1]

const btnright = document.querySelector("#btn-right")
const btnleft = document.querySelector("#btn-left")

slider.insertAdjacentElement("afterbegin", sliderSectionLast)

function siguiente(){
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0]
    slider.style.marginLeft = "-200%"
    slider.style.transition = ".7s"
    setTimeout(function(){
        slider.style.transition = "none"
        slider.insertAdjacentElement("beforeend", sliderSectionFirst)
        slider.style.marginLeft = "-100%"
    }, 700)
    
}
function prev(){
    let sliderSection = document.querySelectorAll(".slider-section")
    let sliderSectionLast = sliderSection[sliderSection.length -1]
    slider.style.marginLeft = "0"
    slider.style.transition = "0.7s"
    setTimeout(function(){
        slider.style.transition = "none"
        slider.insertAdjacentElement("afterbegin", sliderSectionLast)
        slider.style.marginLeft = "-100%"
    }, 700)
    
}
btnright.addEventListener("click", function(){
    siguiente()
})
btnleft.addEventListener("click", function(){
    prev()
})
setInterval(function(){
    siguiente();
},4500);

const togle = document.getElementById("mode")
const contenedor = document.getElementById("contenedor")

togle.addEventListener("click",cambiar)

function cambiar(){
    togle.classList.toggle("active")
    contenedor.classList.toggle("active")
}
