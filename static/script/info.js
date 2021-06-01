let actores = document.querySelectorAll(".container--grid");
let regresar = document.querySelector("#pasar");
let pasar = document.querySelector("#regresar");


let btn_MeGusta = document.querySelector("#MeGusta");
let btn_NoMeGusta = document.querySelector("#NoMeGusta");
let lista = document.querySelector("#lista");


let listo = document.querySelector(".btn_list-listo");
let valoracion = document.querySelectorAll(".informacion-btn_tra");

//
let items = document.querySelectorAll(".des_artistas");
let lugar = items[0].clientWidth;
var posicion = 0;

pasar.addEventListener("click", e => {
    var n = 1;
    position(n);
});

regresar.addEventListener("click", e => {
    var n = 2;
    position(n);

});

btn_MeGusta.addEventListener("click", e => {
    btn_MeGusta.classList.add("btn_mgusta");
    btn_NoMeGusta.classList.remove("btn_nmgusta");
});

btn_NoMeGusta.addEventListener("click", e => {
    btn_NoMeGusta.classList.add("btn_nmgusta");
    btn_MeGusta.classList.remove("btn_mgusta");
});

lista.addEventListener("click", e => {
    document.querySelector(".container_list").classList.add("btn_lista");
    document.querySelector(".list").classList.add("btn_sub-lista");
});

listo.addEventListener("click", e => {
    document.querySelector(".container_list").classList.remove("btn_lista");
    document.querySelector(".list").classList.remove("btn_sub-lista");
});

for (i = 0; i < valoracion.length; i++) {
    valoracion[i].addEventListener("click", e => {
        document.querySelector(".triller").style.transition = "all 2s";
        var pos = Number(e.target.value) - 1;
        if (pos == 0) {
            valoracion[1].classList.remove("btn_activado");
            valoracion[0].classList.add("btn_activado");
            document.querySelector(".triller").classList.remove("triller_transition");
        } else {
            valoracion[0].classList.remove("btn_activado");
            valoracion[1].classList.add("btn_activado");
            document.querySelector(".triller").classList.add("triller_transition");
        }

    });
}

function position(a) {
    if (a == 1) {
        if (posicion < items.length - 7) {
            posicion++;
        } else {
            posicion = 0;
        }
    } else if (a == 2) {
        if (posicion > 0) {
            posicion--;
        } else {
            posicion = items.length - 7;
        }
    }

    for (i = 0; i < items.length; i++) {
        actores[i].style.transform = "translate(-" + (lugar * posicion) + "px)";
    }
}