function cargarProducto(id) {
  const producto = productos[id];
  if (!producto) return;

  // Mostrar imágenes
  const imagesSection = document.getElementById('images-section');
  imagesSection.innerHTML = ''; // Limpia
  producto.imagenes.forEach(url => {
    const div = document.createElement('div');
    div.className = 'bg-white rounded-lg shadow-sm overflow-hidden';
    div.innerHTML = `<img src="${url}" alt="Imagen del producto"
                      class="w-full h-64 object-contain p-4 cursor-pointer hover:opacity-90 transition"
                      onclick="viewImage('${url}')" />`;
    imagesSection.appendChild(div);
  });

  // Mostrar especificaciones
  const specsList = document.getElementById('specs-list');
  specsList.innerHTML = ''; // Limpia
  producto.especificaciones.forEach(spec => {
    const li = document.createElement('li');
    li.textContent = spec;
    specsList.appendChild(li);
  });
}

// Ejecuta la función con el ID deseado
cargarProducto('C9200L-24P-4G-E');
