document.addEventListener('DOMContentLoaded', () => {
  fetch('../../CompReu/fibraoptica-related-product.html')
    .then(res => res.text())
    .then(html => {
      const placeholder = document.getElementById('fibraoptica-related-product-placeholder');
      if (placeholder) placeholder.innerHTML = html;
    })
    .catch(err => console.error('Error cargando fibraoptica-related-product.html:', err));
});