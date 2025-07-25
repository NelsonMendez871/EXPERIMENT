// js/subnav.js
// Cambia "#subnav-placeholder" por el selector donde quieras inyectar este segundo navbar

document.addEventListener('DOMContentLoaded', function() {
  const placeholder = document.getElementById('subnav-placeholder');
  if (!placeholder) return;

  fetch('/ProyectoVersion3.0/components/subnav.html')
    .then(response => {
      if (!response.ok) throw new Error(`Error ${response.status}`);
      return response.text();
    })
    .then(html => {
      placeholder.innerHTML = html;
    })
    .catch(error => console.error('Error loading subnav:', error));
});
