let menu = document.querySelector(".menu_nav");
let submenu = document.querySelector(".menu_submenu");
let btn_principal = document.querySelectorAll(".text_title-header");
let row = document.querySelectorAll(".menu_submenu-items");
let button_up = document.querySelector(".content-button_arriba");
/*footer*/
let btn_secc = document.querySelectorAll(".btn-secc");


/*visualizar el menu*/
menu.addEventListener('click', e => {
    submenu.classList.toggle("visible-submenu");
    for (i = 0; i < row.length; i++) {
        if (row[i].clientHeight > 0) {
            row[i].classList.toggle("visible-submenu_items");
        }
    }
});

/*visualizar los items del sub menu*/
for (i = 0; i < btn_principal.length; i++) {
    btn_principal[i].addEventListener('click', e => {
        var pos = e.target.value;
        row[pos].classList.toggle("visible-submenu_items");
    });
}

/* boton subir scroll*/
document.addEventListener('scroll', e => {
    let scroll = document.documentElement.scrollTop;
    if (scroll > 100) {
        button_up.style.height = "15%";
    } else if (scroll < 100) {
        button_up.style.height = "0%";
    }
});


button_up.addEventListener("click", e => { window.scrollTo(0, 0); });

/* modal footer*/
for (i = 0; i < btn_secc.length; i++) {
    btn_secc[i].addEventListener("click", e => {
        var pos = Number(e.target.value) - 1;
        if (pos < btn_secc.length - 1) {
            document.querySelector("#salir").classList.add("visible-modal");
        }
        switch (pos) {
            case 0:
                document.querySelector(".libro_r").classList.add("visible-modal");
                break;
            case 1:
                document.querySelector(".politica").classList.add("visible-modal");
                break;
            case 2:
                document.querySelector(".Termino-condiciones").classList.add("visible-modal");
                break;
            case 3:
                alert("trabaja");
                break;
        }

    });

}

document.querySelector("#salir").addEventListener("click", e => {
    document.querySelector("#salir").classList.remove("visible-modal");
    document.querySelector(".libro_r").classList.remove("visible-modal");
    document.querySelector(".politica").classList.remove("visible-modal");
    document.querySelector(".Termino-condiciones").classList.remove("visible-modal");
});
