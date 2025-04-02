const toggleBtn = document.getElementById('sub-nav__toggle-btn');
const mobileNav = document.getElementById('mobile-nav');
const mobileNavAnchors = document.getElementsByClassName('mobile-nav__itm-a');

// Si el ancho de la ventana es mayor o igual que 1000px, eliminar la clase 'show'
function checkWindowSize() {
  if (window.innerWidth > 800) {
    mobileNav.classList.remove('show');
  }
}
window.addEventListener('resize', checkWindowSize);

document.querySelectorAll('.dropdown__btn').forEach((button) => {
  button.addEventListener('click', () => {
    const dropdownList = button.nextElementSibling; // Selecciona el hermano que en este caso es el ul asociado

    // Alterna la visibilidad de la lista
    dropdownList.style.display =
      dropdownList.style.display === 'none' || dropdownList.style.display === ''
        ? 'block'
        : 'none';
  });
});

toggleBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});

// Para cada elemento en el mobile nav si es clickeado agrega o quita la clase show
Array.from(mobileNavAnchors).forEach((anchor) => {
  anchor.addEventListener('click', () => {
    document.getElementById('mobile-nav').classList.toggle('show');
  });
});

document
  .getElementById('cuestionario')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario, que es recargar la página al enviar

    // Verifica que todos los campos requeridos se hayan completado. Si el formulario no es válido, no redirige
    // y muestra los mensajes de validación predeterminados del navegador.
    if (this.checkValidity()) {
      // Redirigir a la página deseada
      window.location.href = '/ProyectoWebINA/paginas/AreasVocacionales.html';
    } else {
      // Si no es válido, va a mostrar los mensajes de campo requerido del form
      this.reportValidity();
    }
  });


window.addEventListener('resize', checkWindowSize);
