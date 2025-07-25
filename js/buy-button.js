document.addEventListener('DOMContentLoaded', () => {
  const ph = document.getElementById('buy-button-placeholder');
  if (!ph) return;
  // Si estás en /productos/, necesitas basePath:
  const base = location.pathname.includes('/productos/') ? '../' : '';
  fetch(`${base}components/buy-button.html`)
    .then(r => r.text())
    .then(html => { ph.innerHTML = html; })
    .catch(console.error);
});
