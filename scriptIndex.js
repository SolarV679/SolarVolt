/*
Elaborado y comentado por Jairo Adair Antonio Cabrera del grupo Programación 405 del Colegio
de Estudios Cientificos y Tecnologicos del Estado de México Chimalhuacán Plantel II.
Esta página puede ser declarada como propia, por lo tanto, puede haber reclamos y/o disputas por 
el uso no autorizado o indebido del contenido o del código esta página o cualquier otra del sitio.
*/

const carousel = document.querySelector('.xd');
const carouselContainer = document.querySelector('.xd-contenedor');
const items = document.querySelectorAll('.xd-Info');

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let currentIndex = 0;
const carouselWidth = carouselContainer.clientWidth;

function getPositionX(event) {      // Función para obtener la posición X según el toque
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function dragStart(event) {     // Inicia el arrastre
  isDragging = true;
  startPos = getPositionX(event);
  carousel.style.transition = 'none';     // Desactiva la transición durante el arrastre
}

function dragMove(event) {      // Actualiza la posición del carrusel mientras se arrastra
  if (!isDragging) return;
  const currentPosition = getPositionX(event);
  const diff = currentPosition - startPos;
  currentTranslate = prevTranslate + diff;
  carousel.style.transform = `translateX(${currentTranslate}px)`;
}

function dragEnd() {      // Finaliza el arrastre y determina si se cambia de slide
  if (!isDragging) return;
  isDragging = false;
  const movedBy = currentTranslate - prevTranslate;
  
  if (movedBy < -100 && currentIndex < items.length - 1) {      // Si se arrastra una cantidad significativa se cambia de slide
    currentIndex++;
  }
  if (movedBy > 100 && currentIndex > 0) {
    currentIndex--;
  }
  setPositionByIndex();
}

function setPositionByIndex() {   // Actualiza la posición del carrusel según el índice actual  
  currentTranslate = currentIndex * -carouselWidth;
  prevTranslate = currentTranslate;
  carousel.style.transition = 'transform 0.5s ease';
  carousel.style.transform = `translateX(${currentTranslate}px)`;
}

carousel.addEventListener('mousedown', dragStart);      // Eventos para mouse
carousel.addEventListener('mousemove', dragMove);
carousel.addEventListener('mouseup', dragEnd);
carousel.addEventListener('mouseleave', dragEnd);

carousel.addEventListener('touchstart', dragStart);     // Eventos para dispositivos táctiles
carousel.addEventListener('touchmove', dragMove);
carousel.addEventListener('touchend', dragEnd);

const abrirBeneficios = document.getElementById("abrirBeneficios");
const modalBeneficios = document.getElementById("modalBeneficios");
const cerrarBeneficios = document.querySelector(".cerrarBeneficios");

abrirBeneficios.onclick = function(e) {
  e.preventDefault(); // Evita que salte al top
  modalBeneficios.style.display = "block";
}

cerrarBeneficios.onclick = function() {
  modalBeneficios.style.display = "none";
}

// Cierra el modal al hacer clic fuera del contenido
window.onclick = function(e) {
  if (e.target === modalBeneficios) {
    modalBeneficios.style.display = "none";
  }
}

const abrirProposito = document.getElementById("abrirProposito");
const modalProposito = document.getElementById("modalProposito");
const cerrarProposito = document.querySelector(".cerrarProposito");

abrirProposito.onclick = function(e) {
  e.preventDefault(); // Evita que salte al top
  modalProposito.style.display = "block";
}

cerrarProposito.onclick = function() {
  modalProposito.style.display = "none";
}

// Cierra el modal al hacer clic fuera del contenido
window.onclick = function(e) {
  if (e.target === modalProposito) {
    modalProposito.style.display = "none";
  }
}

const abrirTerminos = document.getElementById("abrirTerminos");
  const modalTerminos = document.getElementById("modalTerminos");
  const cerrarTerminos = document.querySelector(".cerrarTerminos");

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

function goToParticipantes() {          // Función para cambiar de página entre index y partcipantes
  setTimeout(() => {      // Establece un tiempo al hacer cambio de paginas
  window.location.href = "participantes.html";
}, 500);
}

function animarSalida() {
  document.body.classList.add('fade-out');
}