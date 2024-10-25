const toggleBtn = document.getElementById('sub-nav__toggle-btn');
const mobileNav = document.getElementById('mobile-nav');
const mobileNavAnchors = document.getElementsByClassName('mobile-nav__itm-a');

toggleBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});

Array.from(mobileNavAnchors).forEach((anchor) => {
  anchor.addEventListener('click', () => {
    document.getElementById('mobile-nav').classList.toggle('show');
  });
});

function checkWindowSize() {
  // Si el ancho de la ventana es mayor que 1000px, eliminar la clase 'show'
  if (window.innerWidth >= 1000) {
    mobileNav.classList.remove('show');
  }
}
window.addEventListener('resize', checkWindowSize);
