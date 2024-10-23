const toggleBtn = document.getElementById('sub-nav__toggle-btn');
const mobileNav = document.getElementById('mobile-nav');

toggleBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});
