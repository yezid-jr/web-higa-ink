
// Función para abrir modales
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("show");
    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
  }
}

// Función para cerrar modales
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove("show");
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
  }
}

// Exponer funciones al ámbito global para el HTML
window.openModal = openModal;
window.closeModal = closeModal;

// Cerrar modal al hacer clic fuera del contenido
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal')) {
    const modalId = e.target.id;
    closeModal(modalId);
  }
});

// Cerrar modal con la tecla Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const openModal = document.querySelector('.modal.show');
    if (openModal) {
      closeModal(openModal.id);
    }
  }
});

// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Manejo del formulario de contacto
// document.addEventListener('DOMContentLoaded', function() {
//   const contactForm = document.querySelector('#contact form');
//   if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//       e.preventDefault();
      
//       // Aquí puedes agregar tu lógica para enviar el formulario
//       // Por ejemplo, usando fetch() para enviar a un servidor
      
//       // Por ahora, solo mostrar un mensaje de confirmación
//       alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
      
//       // Limpiar el formulario
//       this.reset();
//     });
//   }
// });

// Efecto de parallax simple para el hero
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector('.bg-gradient-to-b');
  if (parallax) {
    parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
  // Asegurar que todos los modales estén ocultos al cargar
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.classList.remove('show');
  });
  
  console.log('Página cargada correctamente');
});

// Funcionalidad del menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const closeMenuButton = document.getElementById('close-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuOverlay = document.getElementById('menu-overlay');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

  // Función para abrir el menú
  function openMobileMenu() {
    mobileMenu.classList.add('open');
    menuOverlay.classList.add('active');
    mobileMenuButton.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Función para cerrar el menú
  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    menuOverlay.classList.remove('active');
    mobileMenuButton.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  // Event listener para el botón hamburguesa
  mobileMenuButton.addEventListener('click', function() {
    if (mobileMenu.classList.contains('open')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Event listener para el botón X
  closeMenuButton.addEventListener('click', closeMobileMenu);

  // Cerrar menú al hacer clic en el overlay
  menuOverlay.addEventListener('click', closeMobileMenu);

  // Cerrar menú al hacer clic en un enlace
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
      closeMobileMenu();
    });
  });

  // Cerrar menú con la tecla Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  // Cerrar menú al cambiar el tamaño de pantalla a desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 768 && mobileMenu.classList.contains('open')) {
      closeMobileMenu();
    }
  });
});

