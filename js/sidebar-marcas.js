document.addEventListener('DOMContentLoaded', function () {
  fetch('/components/sidebar-marcas.html')
    .then(response => response.text())
    .then(data => {
      const placeholder = document.getElementById('sidebar-marcas-placeholder');
      if (placeholder) {
        placeholder.innerHTML = data;
      }
    })
    .catch(error => console.error('Error cargando el sidebar de marcas:', error));
});
