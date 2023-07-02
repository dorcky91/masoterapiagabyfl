var btnMenu = document.getElementById("navegacion-movil");
var btnCerrar = document.getElementById("cerrar-navegacion");

btnMenu.addEventListener("click", function () {
  var menu = document.getElementById("navegacion");
  menu.classList.toggle("activo");
});
btnCerrar.addEventListener("click", function () {
  var menu = document.getElementById("navegacion");
  menu.classList.toggle("activo");
});

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
