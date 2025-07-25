document.addEventListener('DOMContentLoaded', function () {
  const placeholder = document.getElementById('related-products-placeholder');
  if (!placeholder) return;

  fetch('/components/related-products.html')
    .then(response => response.text())
    .then(html => {
      placeholder.innerHTML = html;
    })
    .catch(error => console.error('Error al cargar productos relacionados:', error));
});
