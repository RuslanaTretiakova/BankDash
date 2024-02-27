const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
  dropdown.querySelector('button').addEventListener('click', () => {
    dropdown.classList.toggle('dropdown--open');
  });
});

document.addEventListener('click', (event) => {
  if (event.target.closest('.dropdown')) {
    return;
  }

  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove('dropdown--open');
  });
});
