// js/productos.js
document.addEventListener('DOMContentLoaded', () => {
  const basePath = location.pathname.includes('/productos/') ? '../' : '';
  const productoKey = obtenerNombreProducto(); // p.ej. "C9200L-24P-4G-E"

  fetch(`${basePath}data/productos.json`)
    .then(res => res.json())
    .then(data => {
      const producto = data[productoKey];
      if (!producto) {
        console.error('Producto no encontrado:', productoKey);
        return;
      }

      renderImagenes(producto.imagenes, basePath);
      renderEspecificaciones(producto.especificaciones);
      renderDetalles(producto.detalles);
    })
    .catch(err => console.error('Error cargando productos.json:', err));
});

/** Obtiene el nombre del archivo HTML sin extensión */
function obtenerNombreProducto() {
  const path = window.location.pathname;
  const file = path.substring(path.lastIndexOf('/') + 1);
  return file.replace('.html', '');
}

/** Renderiza imagen principal y miniaturas */
function renderImagenes(imagenes, basePath) {
  const imgMain = document.getElementById('img_main');
  const thumbs = document.getElementById('thumbnails');
  if (!imgMain || !thumbs) return;

  // Principal
  imgMain.src = imagenes[0];
  imgMain.alt = 'Imagen principal';

  // Miniaturas
  thumbs.innerHTML = '';
  imagenes.forEach(url => {
    const div = document.createElement('div');
    div.className = 'w-20 h-20 border rounded p-1 cursor-pointer hover:border-blue-400 transition';
    div.innerHTML = `<img src="${url}" alt="Vista" class="w-full h-full object-contain" onclick="toExchangeImage(this)" />`;
    thumbs.appendChild(div);
  });
}

/** Renderiza lista de especificaciones */
function renderEspecificaciones(especs) {
  const container = document.getElementById('especificaciones-tecnicas');
  if (!container || !Array.isArray(especs)) return;

  container.innerHTML = '';
  const ul = document.createElement('ul');
  ul.className = 'space-y-2 text-gray-700';

  especs.forEach(texto => {
    const li = document.createElement('li');
    li.className = 'flex items-start text-[#0D274D]';
    li.innerHTML = `
      <i class="fa-solid fa-circle text-[10px] text-[#0D274D] mt-1.5 mr-2"></i>
      <span>${texto}</span>
    `;
    ul.appendChild(li);
  });

  container.appendChild(ul);
}

/** Renderiza los bloques <details> desde data.producto.detalles */
function renderDetalles(detalles) {
  const container = document.getElementById('product-details');
  if (!container || !Array.isArray(detalles)) return;

  container.innerHTML = '';

  detalles.forEach((seccion, index) => {
    const detailsEl = document.createElement('details');
    if (index === 0) detailsEl.open = true;
    detailsEl.className = 'group border border-gray-200 rounded-lg overflow-hidden shadow-sm mb-4';

    // summary
    const summary = document.createElement('summary');
    summary.className = 'flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors';
    summary.innerHTML = `
      <h3 class="font-semibold text-black flex items-center">
        <svg class="w-5 h-5 mr-2 text-blue-600 transition-transform group-open:rotate-90" fill="none"
          stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9 5l7 7-7 7"></path>
        </svg>
        ${seccion.titulo}
      </h3>
      <span class="text-blue-600 text-xs whitespace-nowrap font-medium">Ver detalles</span>
    `;
    detailsEl.appendChild(summary);

    // content
    const content = document.createElement('div');
    content.className = 'p-4 bg-white grid grid-cols-1 md:grid-cols-2 gap-4';

    seccion.items.forEach(item => {
      const flex = document.createElement('div');
      flex.className = 'flex items-start';
      flex.innerHTML = `
        <div class="flex-shrink-0 h-5 w-5 text-blue-500 mt-0.5">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <div class="ml-2">
          <p class="text-gray-700">
            ${ item.label ? `<span class="font-medium">${item.label}</span> ` : '' }${item.value}
          </p>
        </div>`;
      content.appendChild(flex);
    });

    detailsEl.appendChild(content);
    container.appendChild(detailsEl);
  });
}

/** Funciones auxiliares */
function toExchangeImage(element) {
  document.getElementById('img_main').src = element.src;
}
function viewImage(src) {
  window.open(src, '_blank');
}
