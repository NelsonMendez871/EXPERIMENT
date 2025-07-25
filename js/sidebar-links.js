document.addEventListener("DOMContentLoaded", () => {
  fetch("/ProyectoVersion3.0/components/sidebar-links.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("sidebar-links-placeholder").innerHTML = html;
    })
    .catch(error => {
      console.error("Error cargando sidebar-links:", error);
    });
});
