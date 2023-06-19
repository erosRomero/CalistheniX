// Obtener los elementos necesarios
const navbarToggle = document.querySelector(".navbarToggle");
const navbarNavegacion = document.querySelector(".navbarNavegacion");

// Agregar evento click al icono de hamburguesa
navbarToggle.addEventListener('click', function() {
  navbarNavegacion.classList.toggle('mostrar');
});