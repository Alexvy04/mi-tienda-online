let productos = [];
let carrito = [];

fetch('productos.json')
  .then(response => response.json())
  .then(data => {
    productos = data;
    mostrarProductos();
  });

function mostrarProductos() {
  const contenedor = document.getElementById('productos');
  contenedor.innerHTML = '';
  productos.forEach((producto, index) => {
    const div = document.createElement('div');
    div.className = 'producto';
    div.innerHTML = `<strong>${producto.nombre}</strong><br>$${producto.precio}<br><button onclick="agregarAlCarrito(${index})">Agregar al carrito</button>`;
    contenedor.appendChild(div);
  });
}

function agregarAlCarrito(index) {
  carrito.push(productos[index]);
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById('carrito');
  lista.innerHTML = '';
  carrito.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio}`;
    lista.appendChild(li);
  });
}

function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}
