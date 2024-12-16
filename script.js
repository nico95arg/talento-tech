const carrito = [];
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total-carrito");

// agregar productos al carrito
document.querySelectorAll(".agregar-carrito").forEach(boton => {
  boton.addEventListener("click", () => {
    const producto = boton.parentElement;
    const nombre = producto.querySelector("h3").innerText;
    const precio = parseFloat(producto.querySelector("p").innerText.replace("Precio: $", ""));
    carrito.push({ nombre, precio });
    actualizarCarrito();
  });
});

//  actualizar el carrito
function actualizarCarrito() {
  listaCarrito.innerHTML = "";
  let total = 0;
  carrito.forEach((item, index) => {
    total += item.precio;
    listaCarrito.innerHTML += `<li>${item.nombre} - $${item.precio} <button onclick="eliminarDelCarrito(${index})">X</button></li>`;
  });
  totalCarrito.innerText = `Total: $${total}`;
}

//  eliminar productos del carrito
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

// Vaciar carrito
document.getElementById("vaciar-carrito").addEventListener("click", () => {
  carrito.length = 0;
  actualizarCarrito();
});

document.addEventListener("DOMContentLoaded", () => {
  const imagenes = document.querySelectorAll(".producto-imagen");

  imagenes.forEach((imagen) => {
    imagen.addEventListener("click", () => {
      const descripcion = imagen.previousElementSibling;

      // Mostrar u ocultar la descripción
      if (descripcion.style.display === "none" || descripcion.style.display === "") {
        descripcion.style.display = "block";
      } else {
        descripcion.style.display = "none";
      }
    });
  });
});

