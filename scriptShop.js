const productos = [
    { id: 5, nombre: "camionero", precio: 32000, categoria: "mates", rutaImg: "camionero.webp", stock: 4 },
    { id: 6, nombre: "criollo", precio: 25000, categoria: "mates", rutaImg: "criollo.webp", stock: 5 },
    { id: 7, nombre: "torpedo", precio: 30000, categoria: "mates", rutaImg: "torpedo.webp", stock: 3 },
    { id: 8, nombre: "imperial", precio: 40000, categoria: "mates", rutaImg: "imperial.webp", stock: 4 },
    { id: 9, nombre: "termo stanley 1l", precio: 80500, categoria: "termos", rutaImg: "stanley.jpg", stock: 2 },
    { id: 10, nombre: "termo media manija 1l", precio: 62000, categoria: "termos", rutaImg: "mediaManija.jpg", stock: 4 },
    { id: 11, nombre: "canasta cuero 1", precio: 22000, categoria: "equipos", rutaImg: "canasta-black.png", stock: 3 },
    { id: 12, nombre: "canasta cuero 2", precio: 28000, categoria: "equipos", rutaImg: "canastaCuero2.jpg", stock: 2 },
    { id: 13, nombre: "mochila matera tela", precio: 30000, categoria: "equipos", rutaImg: "mochilaTela.png", stock: 4 },
    { id: 14, nombre: "mochila matera premium", precio: 40000, categoria: "equipos", rutaImg: "mochilaPremium.png", stock: 2 },
];

function loadProducts(shop) {
    const contenedorShop = document.getElementById("shopList")
    contenedorShop.innerHTML = ""

    shop.forEach(producto => {
        let productCard = document.createElement("div");
        productCard.className = "col-lg-3 col-md-4 col-sm-6 mb-4"
        productCard.innerHTML = `
            <div class="card bg-dark h-100 shopCards">
                <img src="../img/${producto.rutaImg}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.categoria}</p>
                    <p class="card-text text-success"><strong>$ ${producto.precio}</strong></p>
                    <div class="botonCarrito">
                        <button>Comprar</button>
                    </div>
                </div>
            </div>
        `;

        contenedorShop.appendChild(productCard)
    });
}

loadProducts(productos)

// eventos para filtrar los diferentes productos
document.getElementById("filtroMates").addEventListener('click', function () {
    let productosFiltrados = productos.filter(producto => producto.categoria === "mates");
    loadProducts(productosFiltrados)
})

document.getElementById("filtroTermos").addEventListener('click', function () {
    let productosFiltrados = productos.filter(producto => producto.categoria === "termos")
    loadProducts(productosFiltrados)
});

document.getElementById("filtroEquipos").addEventListener('click', function () {
    let productosFiltrados = productos.filter(producto => producto.categoria === "equipos")
    loadProducts(productosFiltrados)
});

// input search
let inputBusqueda = document.getElementById("inputBusqueda")
inputBusqueda.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        let productosBuscados = buscarProductos(productos)
        loadProducts(productosBuscados)
    }
});

function buscarProductos(productos) {
    let inputBusqueda = document.getElementById("inputBusqueda")
    let textoBusqueda = inputBusqueda.value.toLowerCase()
    return productos.filter(producto =>
        producto.nombre.toLowerCase().includes(textoBusqueda) ||
        producto.categoria.toLowerCase().includes(textoBusqueda)
    );
}

// Obtener referencia al botón de búsqueda por su id
let botonSearch = document.getElementById("search")

// Agregar event listener para el evento click
botonSearch.addEventListener("click", function () {
    let productosBuscados = buscarProductos(productos)
    loadProducts(productosBuscados)
});

// Función para buscar productos con boton search
function buscarProductos(productos) {
    let inputBusqueda = document.getElementById("inputBusqueda")
    let textoBusqueda = inputBusqueda.value.trim().toLowerCase()

    return productos.filter(producto =>
        producto.nombre.toLowerCase().includes(textoBusqueda) ||
        producto.categoria.toLowerCase().includes(textoBusqueda)
    )
}
