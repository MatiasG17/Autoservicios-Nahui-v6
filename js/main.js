// Menú hamburguesa
const hamburgerBtn = document.getElementById('hamburger-btn');
  const menuMobile = document.getElementById('menu-mobile');

  hamburgerBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('show');
  });
