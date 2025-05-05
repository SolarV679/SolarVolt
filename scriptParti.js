/*
Elaborado y comentado por Jairo Adair Antonio Cabrera del grupo Programación 405 del Colegio
de Estudios Cientificos y Tecnologicos del Estado de México Chimalhuacán Plantel II.
Esta página puede ser declarada como propia, por lo tanto, puede haber reclamos y/o disputas por 
el uso no autorizado o indebido del contenido o del código esta página o cualquier otra del sitio.
Este código ha sido corregido para asegurar compatibilidad con todos los navegadores modernos,
incluyendo Safari en móviles.
*/

const carousel = document.querySelector('.contenedor');      // Selecciona el carrusel
const carouselContainer = document.querySelector('.contenedor-grande');     // Selecciona el contenedor del carrusel
const items = document.querySelectorAll('.contenedor-participantes');     // Selecciona cada elemento dentro del carrusel

let isDragging = false;     // Variable para saber si se está arrastrando
let startPos = 0;           // Posición inicial del arrastre
let currentTranslate = 0;   // Desplazamiento actual del carrusel
let prevTranslate = 0;      // Desplazamiento anterior del carrusel
let currentIndex = 0;       // Índice actual del carrusel

function getPositionX(event) {      // Función para obtener la posición X según el toque o clic
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function dragStart(event) {     // Inicia el arrastre del carrusel
  isDragging = true;
  startPos = getPositionX(event);
  carousel.style.transition = 'none';     // Desactiva la transición durante el arrastre
}

function dragMove(event) {      // Mueve el carrusel mientras se arrastra
  if (!isDragging) return;
  event.preventDefault();     // Evita el scroll vertical en móviles (especialmente Safari)
  const currentPosition = getPositionX(event);
  const diff = currentPosition - startPos;
  currentTranslate = prevTranslate + diff;
  carousel.style.transform = `translateX(${currentTranslate}px)`;     // Desplaza el carrusel
}

function dragEnd() {      // Finaliza el arrastre y determina si se cambia de slide
  if (!isDragging) return;
  isDragging = false;
  const movedBy = currentTranslate - prevTranslate;

  if (movedBy < -100 && currentIndex < items.length - 1) {      // Cambia al siguiente slide si se arrastra a la izquierda
    currentIndex++;
  }
  if (movedBy > 100 && currentIndex > 0) {     // Cambia al anterior si se arrastra a la derecha
    currentIndex--;
  }
  setPositionByIndex();     // Establece la nueva posición del carrusel
}

function setPositionByIndex() {   // Actualiza la posición del carrusel según el índice actual
  currentTranslate = currentIndex * -carouselContainer.clientWidth;    // Calcula el desplazamiento según el ancho del contenedor
  prevTranslate = currentTranslate;
  carousel.style.transition = 'transform 0.5s ease';     // Activa la transición suave
  carousel.style.transform = `translateX(${currentTranslate}px)`;     // Aplica el nuevo desplazamiento
}

// Eventos del mouse para controlar el carrusel
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragMove);
carousel.addEventListener('mouseup', dragEnd);
carousel.addEventListener('mouseleave', dragEnd);

// Eventos para dispositivos táctiles, con soporte completo para Safari
carousel.addEventListener('touchstart', dragStart, { passive: false });
carousel.addEventListener('touchmove', dragMove, { passive: false });
carousel.addEventListener('touchend', dragEnd);

const abrirTerminos = document.getElementById("abrirTerminos");     //abre los cuadros de dialogo
  const modalTerminos = document.getElementById("modalTerminos");
  const cerrarTerminos = document.querySelector(".cerrarTerminos");     //cierra los cuadros de dialogo

  abrirTerminos.onclick = function(e) {
    e.preventDefault(); // Evita que salte al top
    modalTerminos.style.display = "block";
  }

  cerrarTerminos.onclick = function() {
    modalTerminos.style.display = "none";
  }

  // Cierra el modal al hacer clic fuera del contenido
  window.onclick = function(e) {
    if (e.target === modalTerminos) {
      modalTerminos.style.display = "none";
    }
  }

  const abrirPrivacidad = document.getElementById("abrirPrivacidad");
  const modalPrivacidad = document.getElementById("modalPrivacidad");
  const cerrarPrivacidad = document.querySelector(".cerrarPrivacidad");

  abrirPrivacidad.onclick = function(e) {
    e.preventDefault(); // Evita que salte al top
    modalPrivacidad.style.display = "block";
  }

  cerrarPrivacidad.onclick = function() {
    modalPrivacidad.style.display = "none";
  }

  // Cierra el modal al hacer clic fuera del contenido
  window.onclick = function(e) {
    if (e.target === modalPrivacidad) {
      modalPrivacidad.style.display = "none";
    }
  }

  const abrirCarrasco = document.getElementById("abrirCarrasco");
  const modalCarrasco = document.getElementById("modalCarrasco");
  const cerrarCarrasco = document.querySelector(".cerrarCarrasco");

  abrirCarrasco.onclick = function(e) {
    e.preventDefault(); // Evita que salte al top
    modalCarrasco.style.display = "block";
  }

  cerrarCarrasco.onclick = function() {
    modalCarrasco.style.display = "none";
  }

  // Cierra el modal al hacer clic fuera del contenido
  window.onclick = function(e) {
    if (e.target === modalCarrasco) {
      modalCarrasco.style.display = "none";
    }
  }

  const abrirDiego = document.getElementById("abrirDiego");
  const modalDiego = document.getElementById("modalDiego");
  const cerrarDiego = document.querySelector(".cerrarDiego");

  abrirDiego.onclick = function(e) {
    e.preventDefault(); // Evita que salte al top
    modalDiego.style.display = "block";
  }

  cerrarDiego.onclick = function() {
    modalDiego.style.display = "none";
  }

  // Cierra el modal al hacer clic fuera del contenido
  window.onclick = function(e) {
    if (e.target === modalDiego) {
      modalDiego.style.display = "none";
    }
  }

  const abrirAgus = document.getElementById("abrirAgus");
  const modalAgus = document.getElementById("modalAgus");
  const cerrarAgus = document.querySelector(".cerrarAgus");

  abrirAgus.onclick = function(e) {
    e.preventDefault(); // Evita que salte al top
    modalAgus.style.display = "block";
  }

  cerrarAgus.onclick = function() {
    modalAgus.style.display = "none";
  }

  // Cierra el modal al hacer clic fuera del contenido
  window.onclick = function(e) {
    if (e.target === modalAgus) {
      modalAgus.style.display = "none";
    }
  }

  const abrirLely = document.getElementById("abrirLely");
  const modalLely = document.getElementById("modalLely");
  const cerrarLely = document.querySelector(".cerrarLely");

  abrirLely.onclick = function(e) {
    e.preventDefault(); // Evita que salte al top
    modalLely.style.display = "block";
  }

  cerrarLely.onclick = function() {
    modalLely.style.display = "none";
  }

  // Cierra el modal al hacer clic fuera del contenido
  window.onclick = function(e) {
    if (e.target === modalLely) {
      modalLely.style.display = "none";
    }
  }

  const abrirAbad = document.getElementById("abrirAbad");
  const modalAbad = document.getElementById("modalAbad");
  const cerrarAbad = document.querySelector(".cerrarAbad");

  abrirAbad.onclick = function(e) {
    e.preventDefault(); // Evita que salte al top
    modalAbad.style.display = "block";
  }

  cerrarAbad.onclick = function() {
    modalAbad.style.display = "none";
  }

  // Cierra el modal al hacer clic fuera del contenido
  window.onclick = function(e) {
    if (e.target === modalAbad) {
      modalAbad.style.display = "none";
    }
  }

  const abrirHaide = document.getElementById("abrirHaide");
  const modalHaide = document.getElementById("modalHaide");
  const cerrarHaide = document.querySelector(".cerrarHaide");

  abrirHaide.onclick = function(e) {
    e.preventDefault(); // Evita que salte al top
    modalHaide.style.display = "block";
  }

  cerrarHaide.onclick = function() {
    modalHaide.style.display = "none";
  }

  // Cierra el modal al hacer clic fuera del contenido
  window.onclick = function(e) {
    if (e.target === modalHaide) {
      modalHaide.style.display = "none";
    }
  }

  const abrirJairo = document.getElementById("abrirJairo");
  const modalJairo = document.getElementById("modalJairo");
  const cerrarJairo = document.querySelector(".cerrarJairo");

  abrirJairo.onclick = function(e) {
    e.preventDefault(); // Evita que salte al top
    modalJairo.style.display = "block";
  }

  cerrarJairo.onclick = function() {
    modalJairo.style.display = "none";
  }

  // Cierra el modal al hacer clic fuera del contenido
  window.onclick = function(e) {
    if (e.target === modalJairo) {
      modalJairo.style.display = "none";
    }
  }

  function animarSalida() {
    event.preventDefault();
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = "index.html";
  }, 500);
  }

  const btnIzq = document.querySelector('.flecha.izquierda');
const btnDer = document.querySelector('.flecha.derecha');

btnIzq.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    setPositionByIndex();
  }
});

btnDer.addEventListener('click', () => {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    setPositionByIndex();
  }
});
