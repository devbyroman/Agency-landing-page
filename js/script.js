const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
const overlay = document.querySelector('.overlay');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  navList.classList.remove('active');
  overlay.classList.remove('active');
});
