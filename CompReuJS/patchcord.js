document.addEventListener('DOMContentLoaded', () => {
  fetch('../../CompReu/patchcord-related-product.html')
    .then(res => res.text())
    .then(html => {
      const placeholder = document.getElementById('patchcord-related-product-placeholder');
      if (placeholder) placeholder.innerHTML = html;
    })
    .catch(err => console.error('Error cargando patchcord-related-product.html:', err));
});