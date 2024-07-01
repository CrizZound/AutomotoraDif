console.log("Está funcionando");

const carrito = [];

document.querySelectorAll('.agregar').forEach(button => {
    button.addEventListener('click', agregarAlCarrito);
});

function agregarAlCarrito(event) {
    const producto = event.target.closest('.producto');
    const nombre = producto.dataset.nombre;
    const precio = parseFloat(producto.dataset.precio);
    let stock = parseInt(producto.dataset.stock);

    if (stock > 0) {
        carrito.push({ nombre, precio });
        producto.dataset.stock = stock - 1;
        actualizarCarrito();
    } else {
        alert('¡Producto agotado!');
    }
}

function eliminarDelCarrito(index) {
    const producto = carrito[index];
    const productos = document.querySelectorAll('.producto');
    const productoHTML = Array.from(productos).find(p => p.dataset.nombre === producto.nombre);
    productoHTML.dataset.stock = parseInt(productoHTML.dataset.stock) + 1;

    carrito.splice(index, 1);
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoElemento = document.getElementById('carrito-lista');
    carritoElemento.innerHTML = '';

    carrito.forEach((producto, index) => {
        const li = document.createElement('li');
        li.textContent = ${producto.nombre} - $${producto.precio.toFixed(2)};
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', () => eliminarDelCarrito(index));
        li.appendChild(botonEliminar);
        carritoElemento.appendChild(li);
    });
}