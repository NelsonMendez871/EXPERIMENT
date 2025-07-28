// js/footer.js
document.addEventListener('DOMContentLoaded', function () {
  const placeholder = document.getElementById('footer-placeholder');
  if (!placeholder) return;

  const basePath = location.pathname.includes('/productos/') ? '../' : '';

  fetch(`${basePath}../../components/footer.html`)
    .then(response => response.text())
    .then(data => {
      placeholder.innerHTML = data;
    })
    .catch(error => console.error('Error al cargar footer:', error));
});
