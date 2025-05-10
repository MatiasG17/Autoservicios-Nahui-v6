// index.js
const imagenes = [
    'img/Fondo1.png',
    'img/Fondo2.jpg',
    'img/Fondo3.jpg',
    'img/Fondo4.jpg',
    'img/Fondo5.jpg'
  ];
  
  
  let indiceActual = 0;
  const heroSection = document.getElementById('hero');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  function actualizarFondo() {
    heroSection.style.backgroundImage = `url('${imagenes[indiceActual]}')`;
  }
  
  prevBtn.addEventListener('click', () => {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    actualizarFondo();
  });
  
  nextBtn.addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % imagenes.length;
    actualizarFondo();
  });
  
  // Asegura que la imagen inicial esté correcta al cargar
  actualizarFondo(); 
  