document.addEventListener('DOMContentLoaded', () => {
  fetch('../../CompReu/cable-related-product.html')
    .then(res => res.text())
    .then(html => {
      const placeholder = document.getElementById('cable-related-product-placeholder');
      if (placeholder) placeholder.innerHTML = html;
    })
    .catch(err => console.error('Error cargando cable-related-product.html:', err));
});