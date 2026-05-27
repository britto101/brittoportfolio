AOS.init({
  duration: 1000,
  once: true
});

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('nav ul');

mobileMenuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
