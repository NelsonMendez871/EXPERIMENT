// js/breadcrumb.js
document.addEventListener('DOMContentLoaded', function () {
  fetch('/components/breadcrumb.html')
    .then(response => response.text())
    .then(data => {
      const placeholder = document.getElementById('breadcrumb-placeholder');
      if (placeholder) {
        placeholder.innerHTML = data;
      } else {
        console.error('No se encontró el div con id breadcrumb-placeholder');
      }
    })
    .catch(error => console.error('Error al cargar breadcrumb:', error));
});
