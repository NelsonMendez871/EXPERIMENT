document.addEventListener('DOMContentLoaded', function() {
  const placeholder = document.getElementById('subnav-placeholder');
  if (!placeholder) return;

  fetch('../../components/subnav.html')
    .then(response => {
      if (!response.ok) throw new Error(`Error ${response.status}`);
      return response.text();
    })
    .then(html => {
      placeholder.innerHTML = html;
    })
    .catch(error => console.error('Error loading subnav:', error));
});