//botones del footer
var Btn_F = document.querySelectorAll(".o_pie");
var salida = document.getElementById("salir");
presionar();

function presionar() {
    //footer


    salida.addEventListener("click", e => {
        salida.style.transition = "all 0.3s";

        document.querySelector(".libro_r").style.visibility = "hidden";
        document.querySelector(".libro_r").style.opacity = "3%";
        document.querySelector(".politica").style.visibility = "hidden";
        document.querySelector(".politica").style.opacity = "3%";
        document.querySelector(".Termino-condiciones").style.visibility = "hidden";
        document.querySelector(".Termino-condiciones").style.opacity = "3%";
        salida.style.visibility = "visible";
        salida.style.visibility = "hidden";
        salida.style.transform = "rotate(0deg)";

        document.querySelector(".contentVentanaE").style.visibility = "hidden";
    });
    Btn_F[0].addEventListener("click", e => {
        document.querySelector(".contentVentanaE").style.display = "block";
        document.querySelector(".libro_r").style.transition = "all 1s";
        document.querySelector(".libro_r").style.opacity = "100%";
        document.querySelector(".libro_r").style.visibility = "visible";


        salir();
    });
    Btn_F[1].addEventListener("click", e => {
        document.querySelector(".contentVentanaE").style.visibility = "visible";
        document.querySelector(".politica").style.transition = "all 1s";
        document.querySelector(".politica").style.opacity = "100%";
        document.querySelector(".politica").style.visibility = "visible";

        salir();
    });
    Btn_F[2].addEventListener("click", e => {
        document.querySelector(".contentVentanaE").style.visibility = "visible";
        document.querySelector(".Termino-condiciones").style.transition = "all 1s";
        document.querySelector(".Termino-condiciones").style.opacity = "100%";
        document.querySelector(".Termino-condiciones").style.visibility = "visible";

        salir();
    });
    Btn_F[3].addEventListener("click", e => { alert("trabaja"); });
}

function salir() {

    salida.style.visibility = "visible";
    salida.style.transition = "all 0.3s";
    salida.style.transform = "rotate(360deg)";
}