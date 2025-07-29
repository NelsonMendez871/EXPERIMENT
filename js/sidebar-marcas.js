document.addEventListener('DOMContentLoaded', function () {
  const placeholder = document.getElementById('sidebar-marcas-placeholder');
  if (!placeholder) return;

  fetch('../../components/sidebar-marcas.html')
    .then(response => response.text())
    .then(data => {
      placeholder.innerHTML = data;
    })
    .catch(error => console.error('Error cargando el sidebar de marcas:', error));
});