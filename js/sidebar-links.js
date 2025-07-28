// js/sidebar-links.js
document.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.getElementById("sidebar-links-placeholder");
  if (!placeholder) return;

  // Detectar si estamos dentro de /productos/
  const basePath = location.pathname.includes('/productos/') ? '../' : '';

  fetch(`${basePath}../../components/sidebar-links.html`)
    .then(response => response.text())
    .then(html => {
      placeholder.innerHTML = html;
    })
    .catch(error => {
      console.error("Error cargando sidebar-links:", error);
    });
});
