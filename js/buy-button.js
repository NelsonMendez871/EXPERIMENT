document.addEventListener('DOMContentLoaded', () => {
  const ph = document.getElementById('buy-button-placeholder');
  if (!ph) return;
  fetch('../../components/buy-button.html')
    .then(r => r.text())
    .then(html => { ph.innerHTML = html; })
    .catch(console.error);
});