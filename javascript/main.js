var btnMenu = document.getElementById("navegacion-movil");
var btnCerrar = document.getElementById("cerrar-navegacion");
var menu = document.getElementById("navegacion");
var overlay = document.getElementById("overlay");

btnMenu.addEventListener("click", controlarNavegacion);
btnCerrar.addEventListener("click", controlarNavegacion);
overlay.addEventListener("click", controlarNavegacion);

function controlarNavegacion() {
  console.log("lol");
  menu.classList.toggle("activo");
  overlay.classList.toggle("mostrar");
}

let animacionImagen = document.querySelectorAll(".animacion");

let observador = new IntersectionObserver((entradas) =>
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
    } else {
      entrada.target.classList.remove("visible");
    }
  })
);

// animacionImagen.forEach((element) => {
//   observador.observe(element);
// });
