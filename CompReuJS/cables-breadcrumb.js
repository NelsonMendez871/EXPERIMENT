document.addEventListener('DOMContentLoaded', () => {
  fetch('CompReu/cable-breadcrumb.html')
    .then(res => res.text())
    .then(html => {
      const placeholder = document.getElementById('breadcrumb-placeholder');
      if (placeholder) {
        placeholder.innerHTML = html;
        // Obtener el nombre del archivo sin extensión
        const path = window.location.pathname;
        const file = path.substring(path.lastIndexOf('/') + 1);
        const nombreProducto = file.replace('.html', '').replace('cable-', '');
        // Poner el nombre en el breadcrumb
        const nameSpan = document.getElementById('breadcrumb-product-name');
        if (nameSpan) nameSpan.textContent = nombreProducto;
      }
    });
});