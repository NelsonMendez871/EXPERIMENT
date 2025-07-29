// js/footer.js
document.addEventListener('DOMContentLoaded', function () {
  const placeholder = document.getElementById('footer-placeholder');
  if (!placeholder) return;

  // Si estamos en /EXPERIMENT/productos/ sube un nivel, si no no
  const basePath = location.pathname.includes('/productos/') ? '../' : '';

  fetch(`${basePath}components/footer.html`)
    .then(response => {
      if (!response.ok) throw new Error(`Error ${response.status}`);
      return response.text();
    })
    .then(data => {
      placeholder.innerHTML = data;
    })
    .catch(error => console.error('Error al cargar footer:', error));
});
