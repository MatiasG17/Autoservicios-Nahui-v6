
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const detalle = document.getElementById("servicio-seleccionado");
  const titulo = document.getElementById("nombre-servicio");
  const imagen = document.getElementById("imagen-servicio");
  const btnLimpiar = document.getElementById("btn-limpiar");

  // Mapa de imágenes según servicio
  const imagenes = {
    "Mantenimiento GNV y GLP": "img/Servicio1.jpg",
    "Certificación Anual": "img/Servicio2.jpg",
    "Certificación Quinquenal": "img/Servicio3.jpg",
    "Conversiones a GNV y GLP": "img/Servicio4.jpg",
    "Venta de Repuestos": "img/Servicio5.jpg"
  };

  cards.forEach(card => {
    card.addEventListener("click", function () {
      const servicio = this.querySelector("h3").textContent;
      titulo.textContent = servicio;
      imagen.src = imagenes[servicio] || "img/default.jpg";
      detalle.classList.remove("oculto");
      window.scrollTo({ top: detalle.offsetTop - 60, behavior: "smooth" });
    });
  });

  btnLimpiar.addEventListener("click", function () {
    detalle.classList.add("oculto");
    titulo.textContent = "";
    imagen.src = "";
  });
});
