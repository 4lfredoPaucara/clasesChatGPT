// Definición de la clase Producto
class Producto {
    constructor(nombre, descripcion, precio) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio;
    }
  }
  
  // Definición de la clase Carrito
  class Carrito {
    constructor() {
      this.productos = [];
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  
    eliminarProducto(producto) {
      this.productos.splice(this.productos.indexOf(producto), 1);
    }
  
    calcularTotal() {
      let total = 0;
      for (let producto of this.productos) {
        total += producto.precio;
      }
      return total;
    }
  }
  
  // Definición de la clase Orden
  class Orden {
    constructor(cliente, direccion, carrito) {
      this.cliente = cliente;
      this.direccion = direccion;
      this.carrito = carrito;
    }
  
    mostrarResumen() {
      let resumen = "Resumen de la orden:\n";
      resumen += "Cliente: " + this.cliente + "\n";
      resumen += "Dirección: " + this.direccion + "\n";
      resumen += "Productos:\n";
      for (let producto of this.carrito.productos) {
        resumen += "- " + producto.nombre + " - " + producto.precio + " USD\n";
      }
      resumen += "Total: " + this.carrito.calcularTotal() + " USD\n";
      return resumen;
    }
  }
  
  // Crear algunos productos de ejemplo
  const producto1 = new Producto("Camiseta", "Camiseta de algodón", 20);
  const producto2 = new Producto("Pantalón", "Pantalón de mezclilla", 30);
  const producto3 = new Producto("Zapatos", "Zapatos de cuero", 50);
  
  // Agregar los productos al carrito
  const carrito = new Carrito();
  carrito.agregarProducto(producto1);
  carrito.agregarProducto(producto2);
  carrito.agregarProducto(producto3);
  
  // Crear una orden con los productos del carrito
  const orden = new Orden("Juan Pérez", "Calle 123, Ciudad", carrito);
  
  // Mostrar el resumen de la orden en la consola
  console.log(orden.mostrarResumen());