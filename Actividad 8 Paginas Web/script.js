window.onscroll = function() {
    mostrarOcultarBoton();
};

function mostrarOcultarBoton() {
    var boton = document.getElementById("btnVolverArriba");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        boton.style.display = "block";
    } else {
        boton.style.display = "none";
    }
}

// Función para hacer el desplazamiento suave hacia arriba
function volverArriba() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}