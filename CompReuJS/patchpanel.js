document.addEventListener('DOMContentLoaded', () => {
  fetch('../../CompReu/patchpanel-related-product.html')
    .then(res => res.text())
    .then(html => {
      const placeholder = document.getElementById('patchpanel-related-product-placeholder');
      if (placeholder) placeholder.innerHTML = html;
    })
    .catch(err => console.error('Error cargando patchpanel-related-product.html:', err));
});