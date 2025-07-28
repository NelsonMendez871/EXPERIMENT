document.addEventListener('DOMContentLoaded', () => {
  // Cargar el contenido reutilizable de cables
  fetch('../../CompReu/cable-related-product.html')
    .then(res => res.text())
    .then(html => {
      const placeholder = document.getElementById('cable-related-product-placeholder');
      if (placeholder) placeholder.innerHTML = html;
    });
});