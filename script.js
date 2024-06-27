
const mates = [
    { id: 1, nombre: "camionero", precio: 32000, categoria: "mates", rutaImg: "camionero.jpg" },
    { id: 2, nombre: "criollo", precio: 25000, categoria: "mates", rutaImg: "criollo.jpg" },
    { id: 3, nombre: "torpedo", precio: 30000, categoria: "mates", rutaImg: "torpedo.jpg" },
    { id: 4, nombre: "imperial", precio: 40000, categoria: "mates", rutaImg: "imperial.jpg" },
]

window.addEventListener('scroll', function () {

    let textAnimation = document.getElementById('textContainer')

    // posicion del texto
    let objectPosicion = textAnimation.getBoundingClientRect().top

    // ver height de la web
    let screenSize = window.innerHeight

    if (objectPosicion < screenSize) {
        textAnimation.style.animation = 'mover 1.4s ease-in-out'
    }

    let imageMontañitaAnimation = document.getElementById("montContainer")
    let posicionMontañita = imageMontañitaAnimation.getBoundingClientRect().top

    if (posicionMontañita < screenSize) {
        imageMontañitaAnimation.style.animation = 'mover 1.4s ease-in-out'
    }
})

const typed = new Typed('.typed', {
    strings: [
        '--------------> yerba seca',
    ],
    typeSpeed: 50,
});

const typed2 = new Typed('.typed2', {
    strings: [
        '----------------------> el agua debe caer junto a la bombilla',
    ],
    typeSpeed: 50,
});

function renderizarMates(mates) {
    let contenedorDeMates = document.getElementById("shopAtajo");
    contenedorDeMates.innerHTML = "";

    mates.forEach(mate => {
        let cartaMate = document.createElement("div");

        cartaMate.className = "card";
        cartaMate.innerHTML = `
            <img class="card-img-top" class="imgMate" src=../img/${mate.rutaImg}>
            <div class="card-body">
                <h5 class="card-title nombreMate">${mate.nombre}</h5>
                <p class="card-text priceText">Mismo precio en 12 cuotas sin interes. $ ${mate.precio}</p>
                <a href="pages/shop.html">
                <button class="goToShop">Ir al shop</button>
                </a>
            </div>
        `

        contenedorDeMates.appendChild(cartaMate);
    });
}

renderizarMates(mates)

document.addEventListener("DOMContentLoaded", function () {
    var yearSpan = document.getElementById("year");
    var currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});
