document.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.getElementById("sidebar-links-placeholder");
  if (!placeholder) return;

  fetch('../../components/sidebar-links.html')
    .then(response => response.text())
    .then(html => {
      placeholder.innerHTML = html;
    })
    .catch(error => {
      console.error("Error cargando sidebar-links:", error);
    });
});