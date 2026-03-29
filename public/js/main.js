/* NCC Parish - main.js */

document.addEventListener('DOMContentLoaded', function () {
  highlightActiveNav();
  initGalleryLightbox();
  initFormValidation();
});

/* ---- Active nav link detection ---- */
function highlightActiveNav() {
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
      link.classList.add('active');
    } else if (href === '/' && currentPath === '/') {
      link.classList.add('active');
    }
  });
}

/* ---- Gallery lightbox ---- */
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (!galleryItems.length) return;

  let lightboxModal = document.getElementById('galleryLightboxModal');
  if (!lightboxModal) return;

  const lightboxImg = lightboxModal.querySelector('#lightboxImg');
  const lightboxCaption = lightboxModal.querySelector('#lightboxCaption');

  galleryItems.forEach(function (item) {
    item.addEventListener('click', function () {
      const img = item.querySelector('img');
      if (!img) return;
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      if (lightboxCaption) lightboxCaption.textContent = img.alt;
      const modal = new bootstrap.Modal(lightboxModal);
      modal.show();
    });
  });
}

/* ---- Form validation helpers ---- */
function initFormValidation() {
  document.querySelectorAll('form.needs-validation').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
}
