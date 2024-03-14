const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.aside');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu--open');
  aside.classList.toggle('aside--open');
});

document.addEventListener('click', (event) => {
  if (event.target.closest('.mobile-menu') || event.target.closest('.aside')) {
    return;
  }

  aside.classList.remove('aside--open');
  mobileMenu.classList.remove('mobile-menu--open');
});
