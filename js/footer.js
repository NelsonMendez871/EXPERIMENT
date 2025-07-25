document.addEventListener('DOMContentLoaded', function () {
  const placeholder = document.getElementById('footer-placeholder');
  if (!placeholder) return;

  fetch('/ProyectoVersion3.0/components/footer.html')
    .then(response => response.text())
    .then(data => {
      placeholder.innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
});
