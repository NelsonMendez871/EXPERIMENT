// js/related-products.js
document.addEventListener('DOMContentLoaded', function () {
  const placeholder = document.getElementById('related-products-placeholder');
  if (!placeholder) return;

  // Detectar si estamos dentro de la carpeta /productos/
  const basePath = location.pathname.includes('/productos/') ? '../' : '';

  fetch(`${basePath}../../components/related-products.html`)
    .then(response => response.text())
    .then(html => {
      placeholder.innerHTML = html;
    })
    .catch(error => console.error('Error al cargar productos relacionados:', error));
});
