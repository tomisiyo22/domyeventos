class Mountain {
    constructor(marca, rodado, precio) {
        this.marca = marca;
        this.rodado = rodado;
        this.precio = precio;
        this.imagen = "";
    }
}

const mountains = [
    new Mountain("RAPTOR", 29, 150000),
    new Mountain("CRAZY", 26, 145000),
    new Mountain("BMZ", 29, 200000),
    new Mountain("REDM", 29, 500000),
    new Mountain("ORANG", 26, 400000),
    new Mountain("WONF", 29, 350000)
]

const carrito = [];

let botonAñadir = document.getElementsByClassName("btn-add-cart");
console.log(botonAñadir);
let price = document.getElementsByClassName("price");
let rodado = document.getElementsByClassName("rodado");



let iconoCarrito = document.getElementById("icono");
let carritoCreador = document.createElement("div");
let otraPag = document.getElementById('div-carrito')

  

//iconoCarrito.onclick = function() {
    
   // window.open("index2.html", "_blank");
//};


let raptor = document.getElementById("raptor-bike");

raptor.onclick = () => {
    carrito.forEach(myFunction)
    carrito.push(mountains[0]);
    carrito.forEach(myFunction);

};


function myFunction(item) {
    console.log(item.marca);
};

let crazy = document.getElementById('crazy-bike');

crazy.onclick = () => {
    carrito.push(mountains[1]);
    carrito.forEach(myFunction);
}

    let bmz = document.getElementById('bmz-bike');
    
    bmz.onclick = () => {
        carrito.push(mountains[2]);
        carrito.forEach(myFunction);
    }

    let redm = document.getElementById('redm-bike');

    redm.onclick = () => {
        carrito.push(mountains[3]);
        carrito.forEach(myFunction);
    }

    let orang = document.getElementById('orang-bike');
    orang.onclick = () => {
        carrito.push(mountains[4]);
        carrito.forEach(myFunction);
    }

    let wonf = document.getElementById('wonf-bike');
    wonf.onclick = () => {
        carrito.push(mountains[5]);
        carrito.forEach(myFunction);
    }

//iconoCarrito.onclick = () => {
  //  window.open("index2.html", "_blank");
    //let otroHTML = document.createElement('h1');
    //otroHTML.innerText = "Carrito";
    //otraPag.append(otroHTML);

    
//}
document.addEventListener("DOMContentLoaded", function () {
    const carrito = [];
    let totalCarrito = 0;

    function agregarAlCarrito(producto) {
        carrito.push(producto);
        actualizarCarrito();
    }
    
    function actualizarCarrito() {
        const carritoLista = document.getElementById("carrito-lista");
        carritoLista.innerHTML = "";
    
        carrito.forEach((producto) => {
            const listItem = document.createElement("li");
    
            const nombreProducto = document.createElement("span");
            nombreProducto.textContent = `${producto.marca}`;
    
            const precioProducto = document.createElement("span");
            precioProducto.textContent = ` - $${producto.precio.toFixed(2)}`;
    
            listItem.appendChild(nombreProducto);
            listItem.appendChild(precioProducto);
    
            carritoLista.appendChild(listItem);
        });
    
        calcularTotal();
    }
    
    function calcularTotal() {
        let total = 0;
    
        carrito.forEach((producto) => {
            total += producto.precio;
        });

        const totalCarritoElement = document.getElementById("total-carrito");
        totalCarritoElement.textContent = `Total: $${total.toFixed(2)}`;
    }
    
    
    const botonesAgregarAlCarrito = document.querySelectorAll(".btn-add-cart");
    botonesAgregarAlCarrito.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            const producto = mountains[index];
            agregarAlCarrito(producto);
        });
    });
});

function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}


guardarCarritoEnLocalStorage();


function mostrarCarritoEnDOM() {
    const carritoLista = document.getElementById("carrito-lista");
    carritoLista.innerHTML = ""; 

    if (carrito.length === 0) {
        
        const mensajeVacio = document.createElement("p");
        mensajeVacio.textContent = "El carrito está vacío";
        carritoLista.appendChild(mensajeVacio);
    } else {
       
        carrito.forEach((producto) => {
            const listItem = document.createElement("li");

            const nombreProducto = document.createElement("span");
            nombreProducto.textContent = `${producto.marca}`;

            const precioProducto = document.createElement("span");
            precioProducto.textContent = ` - $${producto.precio.toFixed(2)}`;

            listItem.appendChild(nombreProducto);
            listItem.appendChild(precioProducto);

            carritoLista.appendChild(listItem);
            calcularTotal();
        });
    }
}


mostrarCarritoEnDOM();

