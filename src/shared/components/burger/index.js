const mobileMenu = document.querySelector('.j-mobile-menu');
const asideOverlay = document.querySelector('.j-aside-overlay');

mobileMenu.addEventListener('click', () => {
  document.documentElement.classList.toggle('menu-open');
});

asideOverlay.addEventListener('click', () => {
  document.documentElement.classList.remove('menu-open');
});
