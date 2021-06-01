let visualizador = document.querySelector(".visualizador");
let descripcion = document.querySelectorAll(".descripcion");

//botones slider 
let anterior = document.querySelector("#prev");
let siguiente = document.querySelector("#next");

//botones slider estreno - moviles
let anterior_e = document.querySelector("#prev_e");
let siguiente_e = document.querySelector("#next_e");

//botones slider proximos - moviles
let anterior_p = document.querySelector("#prev_p");
let siguiente_p = document.querySelector("#next_p");

//sliders
let sliders = [];
sliders[0] = document.querySelector(".Slider");
sliders[1] = document.querySelector(".container_estrenos");
sliders[2] = document.querySelector(".content_p");
//variables de items
let items_slider = document.querySelectorAll(".carrucel_items");
let items_estrenos = document.querySelectorAll(".seccion_e");
let items_proximos = document.querySelectorAll(".seccion_p");

var posicion = [0, 0, 0];
let lugar = [];
lugar[0] = items_slider[0].clientWidth;
lugar[1] = items_estrenos[0].clientWidth;
lugar[2] = items_proximos[0].clientWidth;




setInterval(slider_pos_mobile(), 10);

visualizador.addEventListener("click", e => { //Este evento sirve para la visualizacion de la desripcion
    for (i = 0; i < descripcion.length; i++) {
        descripcion[i].style.transition = "all 3s";
        descripcion[i].classList.toggle("mostrar_descripcion");
    }
    visualizador.classList.toggle("moviment_visual");
    document.querySelector(".dis_i").classList.toggle("fa-angle-right");
});

anterior.addEventListener("click", e => {
    descripcion_ocultar()
    var pos = 0;
    atras(pos, items_slider.length);
    slider_pos(pos);
});

siguiente.addEventListener("click", e => {
    descripcion_ocultar()
    var pos = 0;
    adelante(pos, items_slider.length);
    slider_pos(pos);

});



function slider_pos_mobile() {
    var pos_1 = 1;
    var pos_2 = 2;
    sliders[1].style.transition = "all 2s";

    if (window.visualViewport.width < 1024) {
        anterior_e.addEventListener("click", e => {

            atras(pos_1, items_estrenos.length);
            slider_pos(pos_1);
        });
        siguiente_e.addEventListener("click", e => {
            adelante(pos_1, items_estrenos.length);
            slider_pos(pos_1);
        });

        anterior_p.addEventListener("click", e => {
            atras(pos_2, items_proximos.length);
            elemets_proximos();
        });
        siguiente_p.addEventListener("click", e => {
            adelante(pos_2, items_proximos.length);
            elemets_proximos();
        });
    }
}


function slider_pos(n) {
    document.querySelector("#pos").innerHTML = posicion[0] + 1;
    sliders[n].style.transform = "translate(-" + (lugar[n] * posicion[n]) + "px)";
}

function descripcion_ocultar() {}

function elemets_proximos() {
    for (let i = 0; i < items_proximos.length; i++) {
        items_proximos[i].style.transform = "translate(-" + (lugar[2] * posicion[2]) + "px)";
        items_proximos[i].style.transition = "all 2s";
    }
}

function atras(a, n) {
    if (posicion[a] > 0) {
        posicion[a] -= 1;
    } else {
        posicion[a] = n - 1;
    }
}

function adelante(a, n) {
    if (posicion[a] < n - 1) {
        posicion[a] += 1;
    } else {
        posicion[a] = 0;
    }
}