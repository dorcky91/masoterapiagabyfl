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
