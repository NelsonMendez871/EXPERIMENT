document.addEventListener('DOMContentLoaded', () => {
  fetch('../../CompReu/jack-related-product.html')
    .then(res => res.text())
    .then(html => {
      const placeholder = document.getElementById('jack-related-product-placeholder');
      if (placeholder) placeholder.innerHTML = html;
    })
    .catch(err => console.error('Error cargando jack-related-product.html:', err));
});