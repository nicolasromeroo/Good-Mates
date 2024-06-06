/*
numero = Number(prompt("decime tu edad")) 

if (numero < 18) {
    alert("sos menor de edad")
} else if (numero >= 18) {
    alert("podes ingresar")
} */

/*
let edad = Number(prompt("ingrese su edad"))

let añoNacimiento = 2024 - edad
alert("usted nació en el " + añoNacimiento)

alert("el año que viene va a tener " + (edad + 1))
*/


// convertir todo el string a mayuscula - toUpperCase, o minuscula - toLowerCase
/*
let nombre = prompt("decime tu nombre")
nombre = nombre.toUpperCase()
console.log(nombre) */

/*
let nota = Number(prompt("Ingrese nota del parcial"))
const notaParaAprobar = 7


if (nota > 0 && nota <= 10) {
    if (nota >= notaParaAprobar) {
        alert("Felicitaciones, aprobaste.")
    } else {
        alert("Lo sentimos, estas reprobado.")
    }
} else {
    alert("Fuera de los parámetros solicitados para ingresar.")
} */


/* 
 A && B && C && para que sea true las condiciones A, B y C deben ser verdaderas, si alguna de las 3 es falsa, el resultado de la condicion es false.

 A || B || C para que sea true basta con que una de las condiciones A, B o C sea verdadero, si las 3 son falsas el resultado de la condicion es false

 OPERADOR NOT ! simplemente niega
 Si A era true !A es false

 OPERADOR DISTINTO !=    OPERADOR ESTRICTAMENTE !==

*/

/*
let nombreIngresado = prompt("Ingresar nombre")
nombreIngresado = nombreIngresado.toUpperCase()

if ((nombreIngresado != "" ) && ((nombreIngresado == "NICOLAS") || (nombreIngresado == "nicolas"))) {
    alert(nombreIngresado)
} else {
    alert("Error: ingresar nombre válido")
}*/

// VALIDAR SI UN VALOR NO ES UN NUMERO

/*
let nota = Number(prompt("Ingrese nota del parcial"))
const notaParaAprobar = 7

if (nota > 0 && nota <= 10) {
    if (nota >= notaParaAprobar) {
        alert("APROBASTE")
    } else {
         alert("DESAPROBADO")
    }
} else {
    alert("Nota ingresada fuera de los parametros esperados o incorrecta") 
} */


// LOGIN CON USUARIO Y CONTRASEÑA


/*
let usuario = "Nicolasdev"
let contraseña = "1234"

let usuarioIngresado = prompt("Ingrese usuario")
let contraseñaIngresada = prompt("Ingrese contraseña")

if ((usuarioIngresado === usuario) && (contraseñaIngresada === contraseña)) {
    alert("Bienvenido " + usuarioIngresado)
} else {
    alert("usuario o contraseña incorrectos")
} */


/*
let alturaSolicitada = Number(prompt("Ingrese su altura en centímetros"))

if (!isNaN(alturaSolicitada)) {
    if ((alturaSolicitada >= 100) && (alturaSolicitada <= 200) && (alturaSolicitada !== "")) {
        if (alturaSolicitada <= 150) {
            alert("Estatura baja")
        } else if ((alturaSolicitada > 150) && (alturaSolicitada <= 180)) {
            alert("Altura promedio")
        } else if (alturaSolicitada > 180) {
            alert("Estatura alta")
        }
    } else {
        alert("Por favor, ingrese algún dato.")
    }
} else {
    alert("El dato ingresado debe ser numérico.")
} */

/*
let numero = Number(prompt("ingrese un numero"))

for (let i = 0; i < numero; i++) {
    console.log(i)
} */


/* TABLA PARA MULTIPLICAR */

/*
let numero = Number(prompt("Ingrese numero a multiplicar"))

for (let i = 0; i <= 10; i++) {
    console.log(numero + " X " + i + " = " + i * numero) 
} */

/*
for (let i = 0; i < 5; i++) {
   
    if (i === 3) {
        continue
    }

    console.log(i)
    
} */

/* EJERCICIO PARA INICIAR SESION CON USUARIO Y CALCULADORA */

/*
let nombre = prompt("Ingrese su nombre de usuario")

while (nombre != "nicoromeroooo") {
    alert("Nombre de usuario INCORRECTO")

    nombre = prompt("Ingrese su nombre de usuario")
} 

let mensaje = "1 para sumar\n2para restar\n3para multiplicar\n4para dividir\n0 para salir"
let opcion = Number(prompt(mensaje))

while (opcion != 0) {
    let num1 = Number(prompt("ingrese un numero"))
    let num2 = Number(prompt("ingrese otro numero"))

    if (opcion === 1) {
        alert("RESULTADO " + (num1 + num2))
    } else if (opcion === 2) {
        alert("RESULTADO " + (num1 - num2))
    } else if (opcion === 3) {
        alert("RESULTADO " + (num1 * num2))
    } else if (opcion === 4) {
        alert("RESULTADO " + (num1 / num2))
    } 

    opcion = Number(prompt(mensaje))
}  */

/* escribir un programa que me pida 3 nombres y una nota
x nombre
*/

/*
let opcion1 = Number(prompt("Ingrese 1 oara averiguar notas.\nIngrese 0 para salir."))

if (opcion1 === 1) {
    do {
        let primerAlumno = prompt("Ingrese primer alumno").toUpperCase()
        let segundoAlumno = prompt("Ingrese primer alumno").toUpperCase()
        let tercerAlumno = prompt("Ingrese primer alumno").toUpperCase()
    
        if (primerAlumno === "NICOLAS") {
            alert("NICOLAS TU NOTA ES 6")
        } else {
            alert("Ingrese un nombre correcto")
        }
    
        if (segundoAlumno === "JUAN") {
            alert("JUAN TU NOTA ES 10")
        } else {
            alert("Ingrese un nombre correcto")
        }
    
        if (tercerAlumno === "PEDRO") {
            alert("PEDRO TU NOTA ES 3")
        } else {
            alert("Ingrese un nombre correcto")
        }
    
    } while (opcion1 === 0)
} */

/*
for (i = 1 ;i <= 10;i++) {
    alumno = prompt("Ingrese alumno número " + i).toUpperCase()

    if (alumno === "NICOLAS") {
        alert("Nicolas tu nota es un 10")
    } else if (alumno === "TOMAS") {
        alert("Tomas tu nota es un 5")
    } else if (alumno === "FACUNDO") {
        alert("Facundo tu nota es un 5")
    } else if (alumno === "PEDRO") {
        alert("Pedro tu nota es un 9")
    } else if (alumno === "JUAN") {
        alert("Juan tu nota es un 1")
    } else if (alumno === "BRIAN") {
        alert("Brian tu nota es un 4")
    } else if (alumno === "ALEXIS") {
        alert("Alexis tu nota es un 3")
    } else if (alumno === "LUIS") {
        alert("Luis tu nota es un 6")
    } else if (alumno === "MARTIN") {
        alert("Martin tu nota es un 10")
    } else if (alumno === "MARIANO") {
        alert("Mariano tu nota es un 10")
    }
} */

/* 
opciones repetidas -> BUCLE
    cantidad exacta -> FOR
    NO cantidad exacta -> WHILE or DO WHILE

*/

/*
let total = 0
let alumnos = Number(prompt("Ingrese cantidad de alumnos del curso"))
let cantParaSaber = Number(prompt("Ingrese cantidad de alumnos a saber."))

if (cantParaSaber <= alumnos) {
    for (i = 0;i < cantParaSaber; i++) {
        let nombre = prompt("Ingrese nombre del alumno.")
        let nota = Number(prompt("Ingrese nota del alumno."))
        
        alert(nombre + " tu nota es " + nota)
        total += nota
    }
} else {
    alert("Número o dato incorrecto")
}

let promedio = total / cantParaSaber
alert("El promedio es de " + promedio)
*/

//    LOGIN

/*
let usuarioBD = "nicolasdev"
let contraBD = "nico123"

let usuario 
let contra
let sesionIniciada = false 
let cantidadIntentos = 0

do {
    usuario = prompt("Ingrese nombre de usuario")
    contra = prompt("Ingrese su contraseña")
    cantidadIntentos++
    if (usuario === usuarioBD && contra === contraBD) {
        sesionIniciada = true
    }

} while (!sesionIniciada && cantidadIntentos < 3)

if (cantidadIntentos >= 3) {
    alert("Intente nuevamente más tarde")
} else if (sesionIniciada = true){
    alert("BIENVENIDO AL SISTEMA")
} 
/* else if (sesionIniciada = true) {
    alert("Bienvenido al sistema")
} */

/*
EJERCICIO -> Pedir un texto mediante prompt, concatenar un valor en cada repeticion, realizando una salida por cada resultado, hasta que se ingrese "ESC".
*/

/*

let palabra1 
let siguientePal 

// for (i = 0; i < 10; i++) 
// método con DO WHILE
/*do {
    palabra1 = prompt("Ingrese una palabra") 
    
    alert(siguientePal += palabra1)
} while (palabra1 !== "ESC")*/
/*
while (palabra1 !== "ESC") {
    palabra1 = prompt("Ingrese una palabra") 
/* VVV    método con IF dentro de WHILE    VVV
    if (palabra1 === "ESC") {
     alert("SALIENDO") 
    } else {
        alert(siguientePal += palabra1)
    }
  
    alert(siguientePal += palabra1)      
} */

/* FUNCIONES */

/* pasar un prompt a mayusculas con funciones */

/*
function uppercase(nombreAbajo) {
    alert("Bienvenido/a " + (nombreAbajo.toUpperCase()))
}

let nombre = prompt("Ingrese su nombre")
uppercase(nombre) */

/*
function saludar(nombreDeLaPersona) {
    alert("Bienvenido/a " + (nombreDeLaPersona.toUpperCase()) + "!")
}

function principal() {
    nombre = prompt("Ingrese su nombre")
    saludar(nombre)
}

principal() */

// CONCATENAR NOMBRE Y APELLIDO CON FUNCIONES

/*
function concatenar(name, surname) {
    alert("Bienvenido " + (name.toUpperCase()) + " " + (surname.toUpperCase()))
}

let nombre = prompt("Ingrese nombre")
let apellido = prompt("Ingrese apellido") 

concatenar(nombre, apellido) */


// E COMMERCE !!!


/*
function menu() {
    let opcion
    let total = 0 
    do {
        opcion = Number(prompt("Ingrese opcion:\n1_ Manzanas $1000\n2_ Bananas $800\n3_ Palta $5000\nPresiona 0 para finalizar tu compra o para salir."))
        if (opcion < 0 || opcion > 3) {
            alert("Opcion ingresada INCORRECTA")
        } else if (opcion === 1) {
            total = agregarAlCarrito("Manzanas", 1000, total)
        } else if (opcion === 2) {
            total = agregarAlCarrito("Bananas", 800, total)
        } else if (opcion === 3) {
            total = agregarAlCarrito("Palta", 5000, total)
        }
    } while (opcion !== 0)

    alert("El total de su compra es de " + total)
}

function agregarAlCarrito(fruta, precio, total) {
    let cantidadEnGramos = Number(prompt("Ingrese cantidad en gramos"))
    let subtotal = precio * cantidadEnGramos / 1000
    total += subtotal
    alert("Se agregaron " + fruta + " al carrito por un total de: " + subtotal)
    alert("Total hasta el momento es: " + total)

    return total
}

menu () */

// E COMMERCE ELECTRONICA (imp)

/*
function menu() {
    let total = 0
    let opcion
    do {
        opcion = Number(prompt("Ingrese una opcion:\n1_ Monitor $100.000\n2_ Teclado $80.000\n3_ Mouse $60.000\n4_ CPU $500.000\nPRESIONE 0 PARA SALIR"))
        if (opcion === 1) {
            total = procesar("Monitor", 100000, total)
        } else if (opcion === 2) {
            total = procesar("Teclado", 80000, total)
        } else if (opcion === 3) {
            total = procesar("Mouse", 60000, total)
        } else if (opcion === 4) {
            total = procesar("CPU", 500000, total)
        }
    } while (opcion !== 0)

    alert("El total de su compra es de " + total)
}

function procesar(producto, precio, total) {
    let cantidad = Number(prompt("Ingrese cantidad del producto"))
    subtotal = precio
    total += subtotal

    alert("Se agregó " + producto + " al carrito por un total de: " + subtotal)
    alert("El total hasta el momento es de: " + total)

    return total
}

menu() */

//    CALCULADORA (con FUNCIONES C/ PARÁMETROS)

/*
function calculadora(primerNumero, segundoNumero, operacion) {
    if (operacion === "+") {
        return resultado = num1 + num2
    } else if (operacion === "-") {
        return resultado = num1 - num2
    } else if (operacion === "*") {
        if (num2 <= 0) {
            alert("el divisor no puede ser 0 o menor, intente nuevamente")
        }
        return resultado = num1 * num2
    } else if (operacion === "/") {
        return resultado = num1 / num2
    }
}
let num1 = Number(prompt("Ingrese primer número"))
let num2 = Number(prompt("Ingrese segundo número"))
let operacion = prompt("Ingrese operacion")

calculadora(num1, num2, operacion)

alert("El resultado de tu operacion es: " + resultado) */

// PRACITCA P/ PRIMERA PRE ENTREGA

/*
        function menuPromedios() {
            let equipo
            let total = 0 
            do {
                equipo = Number(prompt("Averiguá el promedio de tu equipo favorito\n1_ Chacarita\n2_ Deportivo Maipu\n3_ Quilmes AC\nPresiona 0 para salir."))

                if (equipo < 0 || equipo > 3) {
                    alert("Opcion ingresada INCORRECTA")
                } else if (equipo === 1) {
                    total = promedios(3, 94, total)
                } else if (equipo === 2) {
                    total = promedios(2, 55, total)
                } else if (equipo === 3) {
                    total = promedios(8, 203, total)
                }
            } while (opcion !== 0)
        
            alert("El promedio de " + equipo + " es de: " + total)
        }
        
        function promedios(temporadasEn1ra, goles, total) {
            let subtotalPromedios = goles / temporadasEn1ra
            total += subtotalPromedios
        
            return total
        }
        
        menuPromedios()

    /* else if (opcionPrincipal === 2) {
        function menuGoles() {
            let equipo
            let total = 0 
            do {
                equipo = Number(prompt("¿Cuántos goles tiene tu equipo favorito en los últimos dos partidos?\n1_ Chacarita\nDeportivo Maipu\n3_ Quilmes AC\nPresiona 0 para salir."))
                if (equipo < 0 || equipo > 3) {
                    alert("Opcion ingresada INCORRECTA")
                } else if (equipo === 1) {
                    total = goles(1, 3, total)
                } else if (equipo === 2) {
                    total = goles(2, 1, total)
                } else if (equipo === 3) {
                    total = goles(0, 1, total)
                }
            } while (opcion !== 0)
        
            alert(equipo + " tiene un total de " + total + " goles en los últimos 2 partidos.")
        }
    
        function goles(golesPenultimoPartido, golesUltimoPartido, total) {
            let subtotalGoles = golesPenultimoPartido + golesUltimoPartido
            total += subtotal
        
            return total
        }
        
        menuGoles () */

// STOCKS de PRODUCTOS

/*
let producto = {
    nombre: "Galletas",
    precio: 550,
    vendido: false,
}

if (!("stock" in producto)) {

    function obtenerStock() {
        producto.stock = Number(prompt("Ingrese stock del producto"))
        return producto.stock
    }

    obtenerStock()
}

alert("La cantidad de este producto es de: " + producto.stock + " cajas.")




// calculadora que retorna 2 valores

/*
function calculadora(num1, num2) {
    return {
        suma: num1 + num2,
        resta: num1 - num2
    }
}

console.log(calculadora(5, 3)) */


// si me falta un dato lo puedo pedir con un prompt y un bucle tipo if

/*
if (!("dni" in persona)) {
    persona.dni = Number(prompt("Ingrese su DNI"))
} */

// CLASES en javascript

/*
class Stock {
    constructor(producto, precio, stock) {
        this.producto = producto,
        this.precio = precio,
        this.stock = stock,
        this.vendido = false                
    }
}

let stockProductos = new Stock("Vainillas", 850, 20)

console.log(stockProductos) */




// TIENDA con la opcion de ver informacion de un producto(OBJETOS), posibilidad de agregar al carrito, consultar total, finalizar compra y salir
// para retornar mas de un valoro propiedad, se puede usar objetos 
//                                                         objeto = {
//                                                                debito: x
//                                                                credito: x
//                                                                }  

//                                                          return objeto.debito + objeto.credito

/*
function menu() {
    let opcion
    let total = 0 

    let producto1 = {
        nombre: "Galletas",
        precio: 550,
        vendido: false,
    }
    let producto2 = {
        nombre: "Alfajor",
        precio: 300,
        vendido: false,
    }
    let producto3 = {
        nombre: "Gaseosa",
        precio: 1000,
        vendido: false,
    }

    do {
        opcion = Number(prompt("Ingrese opcion:\n1_ Ver informacion de los productos\n2_ Comprar\n3_ Ver total y finalizar compra\n\nPresiona 0 para salir."))
        if (opcion < 0 || opcion > 3) {
            alert("Opcion ingresada INCORRECTA")
        } else if (opcion === 1) {
            alert(producto1.nombre + ", " + producto1.precio + "\n" + producto2.nombre + ", " + producto2.precio + "\n" + producto3.nombre + ", " + producto3.precio)
        } else if (opcion === 2) {

            let productoSeleccionado = Number(prompt("1_ Galletas\n2_ Alfajor\n3_ Gaseosa"))

            if (productoSeleccionado === 1) {
                total = agregarAlCarrito("galletas", 550, total)

            } else if (productoSeleccionado === 2) {
                total = agregarAlCarrito("alfajor", 300, total)

            } else if (productoSeleccionado === 3) {
                total = agregarAlCarrito("gaseosa", 1000, total)

            }
        } else if (opcion === 3) {
            //subtotal = total
            //total += subtotal

            alert("Finalizó su compra con un total de " + total)
            }

            //si FINALIZO la compra, NO retorno!!
            //si quiero CONSERVAR o utilizar el total para seguir el programa, retorno

            //return total

        //alert("Finalizó su compra con un total de " + total)
    }   while (opcion !== 0)
}

function agregarAlCarrito(producto, precio, total) {
    let subtotal = precio
    total += subtotal
    alert("Se agregó " + producto.toUpperCase() + " al carrito por un total de: " + subtotal)
    alert("Total hasta el momento es: " + total)

    return total
}

menu() 
*/




//    ARRAYS
/*
let numeros = [1, 2, 3, 4] //indices, va desde la posicion 0
let palabras = ["hola", "chau", "bien", "mal"]
let booleanos = [true, false, false, true, false] */

//let cantidadNumeros = numeros.length 
//LENGTH es la propiedad que nos dice el largo de nuestro array
//console.log(cantidadNumeros) 

//numeros.push(5) //para agregar datos, se pone PUSH ()
//console.log(numeros)

//numeros.unshift(10) //para agregar datos al principio se usa UNSHIFT
//console.log(numeros)

//PARA QUITAR usamos SHIFT para eliminar el primer dato del array, y POP elimina el ultimo.
//método SPLICE elimina o agrega datos en el medio del array (a partir del indice 0 empieza a contar en que dato se para, y se le indica la cantidad de datos a borra. Tambien se pueden agregar datos)

//numeros.splice(2, 1, "hola")
//console.log(numeros)


//para generar string usamos JOIN
//let stringListaNumeros = numeros.join(", ")
//alert(stringListaNumeros) 

//con CONCAT unimos dos arrays numero.concat(nombres)

//SLICE hace una copia del array suprimiendo lo indicado
//(desde que indice. hasta que posicion)

//                indexof 
//                  VVV


/*
let instituto = [
    { numTarjetas: 4, nombre: "Manuel", apellido: "Roffo" },
    { numTarjetas: 6, nombre: "Ezequiel", apellido: "Parnisari" },
    { numTarjetas: 8, nombre: "Nicolas", apellido: "Watson" }
]

let listaMayorAMenor = instituto.reverse()

let convocados = ["Watson", "Alarcon", "Roffo", "Parnisari", "Martinez"]

function menu() {
    let opcion
    let jugador
    let partido
    let jugadoresFiltrados

    do {
        opcion = Number(prompt("Jugadores en riesgo de juego por amarillas acumuladas: Manuel Roffo, Ezequiel Parnisari, Nicolas Watson.\n\nIngrese número de opción:\n\n1 - Consultar tarjetas amarillas a lo largo del torneo.\n2 - Consultar si el jugador está convocado para el próximo partido.\n3 - Ordenar de mayor a menor cantidad de tarjetas.\n4 - Ver total tarjetas amarillas en el torneo.\nPresiona 0 para salir."))

        if (opcion === 1) {
            jugador = prompt("Ingrese nombre del jugador del que desea consultar tarjetas.")

            if (jugador !== -1) {
                if (jugador === "Manuel") {
                    alert("El jugador " + jugador + " tiene " + instituto[0].numTarjetas + " tarjetas amarillas.")
                } else if (jugador === "Ezequiel") {
                    alert("El jugador " + jugador + " tiene " + instituto[1].numTarjetas + " tarjetas amarillas.")
                } else if (jugador === "Nicolas") {
                    alert("El jugador " + jugador + " tiene " + instituto[2].numTarjetas + " tarjetas amarillas.")
                } else {
                    alert("No se encontró el jugador. Por favor, ingrese nuevamente.")
                }
            }

        } else if (opcion === 2) {

            //jugadorConv = prompt("Ingrese nombre del jugador para consultar los convocados").toUpperCase()

            
            //console.log(jugadoresFiltrados)
            
            jugador = prompt("Consultá los convocados.")
            
            partido = convocados.includes(jugador)
            //jugadoresFiltrados = convocados.filter(jugador => jugador.nombre)

            if (partido === true) {
                alert("El jugador " + jugador + " está convocado al próximo partido.")
            } else if (partido === false) {
                alert("El jugador " + jugador + " NO está convocado al próximo partido, o no se encontró en la lista de jugadores.")
            }
        } else if (opcion === 3) {

            instituto.sort((a, b) => {
                if (a.numTarjetas > b.numTarjetas) {
                    return -1
                }
                if (a.numTarjetas < b.numTarjetas) {
                    return 1
                }
                return 0
            })
            console.log(instituto)

            /*
            listaMayorAMenor = instituto.map(jugador => jugador.nombre)



            /* return {
                nombre: jugador.nombre,
                numTarjetas: jugador.numTarjetas
            } 
            listaDef = listaMayorAMenor.join("\n")
            alert(listaDef) */ /*
}  else if (opcion === 4) {
let totalTarjetas = instituto.reduce((acumulador, jugador) =>  acumulador + jugador.numTarjetas, 0) 
alert("El total de tarjetas amarillas en el torneo es de " + totalTarjetas + " tarjetas.")
}
} while (opcion !== 0)
}

menu()

/*
function paraCadaJugador(instituto, accion) {
for (const jugador of instituto) {
accion(jugador.nombre)
}
}

paraCadaJugador(instituto, console.log)*/

/*
function paraCadaJugador(instituto, accion) {
    for (const jugador of instituto) {
        accion(jugador.apellido)
    }
} */
/*
instituto.forEach((jugador) => alert(jugador.nombre))
*/

/*
let boca = [
    { nroCamiseta: 2, nombre: "Jonatan", apellido: "Maidana", posicion: "defensor" },
    { nroCamiseta: 15, nombre: "Nicolas", apellido: "Valentini", posicion: "defensor" },
    { nroCamiseta: 5, nombre: "Fernando", apellido: "Gago", posicion: "mediocampista" },
    { nroCamiseta: 10, nombre: "Roman", apellido: "Riquelme", posicion: "mediocampista" },
    { nroCamiseta: 9, nombre: "Martin", apellido: "Palermo", posicion: "delantero" },
    { nroCamiseta: 7, nombre: "Rodrigo", apellido: "Palacios", posicion: "delantero" },
    { nroCamiseta: 11, nombre: "Cristian", apellido: "Pavon", posicion: "delantero" }
] */

/*
let resultado = boca.find((player) => player.nroCamiseta === 9)

console.log(resultado) */

/*
let nombreJugador = prompt("Buscá algún jugador.")
let jugadoresFiltrados = boca.filter(jugador => jugador.nombre.includes(nombreJugador.substring(0, 2)))

console.log(jugadoresFiltrados) */


// EJERCICO DE FUNCIONES DE ORDEN SUPERIOR 1
// funcion ordenar que reciba un array, una propiedad y forma ASC o DES


// let productos = [
//     { id: 10, stock: 0, nombre: "computadora", categoria: "tecnologia", precio: 1000 },
//     { id: 20, stock: 4, nombre: "botines", categoria: "deportes", precio: 200 },
//     { id: 30, stock: 5, nombre: "mouse", categoria: "tecnologia", precio: 70 },
//     { id: 40, stock: 1, nombre: "mueble", categoria: "electrodomesticos", precio: 100 },
//     { id: 50, stock: 0, nombre: "pelota de futbol", categoria: "deportes", precio: 60 },
//     { id: 60, stock: 3, nombre: "batidora", categoria: "electrodomesticos", precio: 150 }
// ]

// const listar = (lista, propiedad1, propiedad2) => lista.map(producto => producto[propiedad1] + " - " + producto[propiedad2]).join("\n")

// let carrito = []
// let opcionMenu

// do {
//     opcionMenu = Number(prompt("1 - agregar producto al carrito\n2 - filtrar por categoria\n3 - mostrar mas info\n4 - finalizar compra\n0 - salir"))

//     if (opcionMenu === 1) {
//         agregarAlCarrito(productos, carrito)
//     } else if (opcionMenu === 2) {
//         filtrarPorCategoria(productos)
//     } else if (opcionMenu === 3) {
//         let idProducto = Number("Seleccione producto por ID para ver mas info\n" + listar(productos, "id", "nombre"))
//         let productoBuscado = productos.find(producto => producto.id === idProducto)
//         alert("Nombre: " + productoBuscado.nombre + " - Stock: " + productoBuscado.stock)
//     } else if (opcionMenu === 4) {
//         let total = carrito.reduce((acum, producto) => acum + producto.subtotal, 0)
//         alert("Valor total de la compra: " + total + "\nGracias por su compra.")
//     }
// } while (opcionMenu !== 0)


// function filtrarPorCategoria(productos) {
//     let categorias = []
//     productos.forEach(producto => {
//         if (!categorias.includes(producto.categoria)) {
//             categorias.push(producto.categoria)
//         }
//     })

//     let categoria
//     let salida

//     do {
//         categoria = prompt("Ingrese alguna de las siguientes categorias: " + categorias.join(", ")).toLowerCase()
//         if (categorias.includes(categoria)) {
//             let productosFiltrados = productos.filter(producto => producto.categoria === categoria)
//             salida = productosFiltrados.map(producto => producto.nombre).join("\n")
//         } else {
//             alert("Categoria incorrecta")
//         }
//         //alert(listar(productosFiltrados, "nombre", "categoria"))
//     } while (!categorias.includes(categoria))
//     alert(salida)

// }


// function agregarAlCarrito(productos, carrito) {
//     let opcion

//     do {
//         opcion = Number(prompt("Seleccione producto por ID" + listar(productos, "id", "nombre")))

//         let productoBuscado = productos.find(producto => producto.id === opcion)
//         let posicionProductoEnCarrito = carrito.findIndex(producto => producto.id === opcion)
//         console.log(productoBuscado)

//         if (productoBuscado) {
//             if (posicionProductoEnCarrito !== -1) {
//                 carrito[posicionProductoEnCarrito].unidades++
//                 carrito[posicionProductoEnCarrito].subtotal = carrito[posicionProductoEnCarrito].precioUnitario * carrito[posicionProductoEnCarrito].unidades
//             } else {
//                 carrito.push({
//                     id: productoBuscado.id,
//                     nombre: productoBuscado.nombre,
//                     precioUnitario: productoBuscado.precio,
//                     unidades: 1,
//                     subtotal: productoBuscado.precio
//                 })
//             }
//         } else if (opcion !== 0) {
//             alert("ID incorrecto.")
//         }
//     } while (opcion !== 0);
//     console.log(carrito)
// }

// // funcion LISTAR


// function listar(lista, propiedad1, propiedad2) {
//     //let salida = ""

//     for (let i = 0; i < lista.length; i++) {
//         salida = salida + lista[i][propiedad1] + " - " + lista[i][propiedad2] + "\n"
//     } 

// for (const producto of lista) {
//     salida = salida + producto[propiedad1] + " - " + producto[propiedad2] + "\n"
// } 

// lista.forEach(producto => {
//     salida = salida + producto[propiedad1] + " - " + producto[propiedad2] + "\n"
// });

// // return salida


// const resultado = lista.map(producto => producto[propiedad1] + " - " + producto[propiedad2]).join("\n")
// return resultado
// }

// let listaString = listar(productos, "nombre", "categoria")
// alert(listaString) 

// // funcion ORDENAR que reciba un array, una propiedad y forma ASC o DES

// /*
// function ordenar(lista, propiedad, formaAsc) {
//     lista.sort((a, b) => {
//         if (a[propiedad] < b[propiedad]) {
//             return 1 // asc
//         } else if (a[propiedad] > b[propiedad]) {
//             return -1  // desc
//         } else {
//             return 0
//         }
//     })
//     if (formaAsc) {
//         lista.reverse()
//     }
// }

// ordenar(productos, "categoria", true) */


// // funcion FILTRAR por propiedades

// /*
// let categoriaIngresada = prompt("Ingrese categoría.").toLowerCase()
// let productosFiltrados = productos.filter(producto => producto.categoria === categoriaIngresada)

// console.log(productosFiltrados) */


// let valorIngresado = prompt("Ingrese categoria").toLowerCase()
// let productosFiltrados = filtrar(productos, "nombre")
// console.log(productosFiltrados)

// function filtrar(lista, propiedad) {
//     return lista.filter(producto => producto[propiedad].toLowerCase() === valorIngresado)
// } 

// // generar otro array con la propiedad producto agotado para los productos que no haya en stock


// let nuevoArray = productos.map(producto => {
//     let productoAgotado = true
//     if (producto.stock === 0) {
//         productoAgotado = false
//     }
//     return {
//         nombre: producto.nombre,
//         id: producto.id,
//         categoria: producto.categoria,
//         enStock: productoAgotado
//     }
// })

// console.log(nuevoArray) 

// CREAR TARJETAS DE PRODUCTOS y FILTRAR BÚSQUEDAS

let goodMates = [
    { id: 10, stock: 5, nombre: "camionero", categoria: "mates", precio: 40000, rutaImagen: "camionero-comun.jpeg" },
    { id: 20, stock: 4, nombre: "staley 1l", categoria: "termos", precio: 80000, rutaImagen: "termos.jpg" },
    { id: 30, stock: 2, nombre: "canasta 1", categoria: "equipos", precio: 90000, rutaImagen: "duo-con-bombillas.jpeg" },
    { id: 32, stock: 3, nombre: "canasta 2", categoria: "equipos", precio: 95000, rutaImagen: "canasta-black.png" },
    { id: 28, stock: 7, nombre: "media manija", categoria: "termos", precio: 50000, rutaImagen: "termo-media-manija.png" },
    { id: 12, stock: 4, nombre: "torpedo", categoria: "mates", precio: 50000, rutaImagen: "grabado-laser.png" }
]

principal(goodMates)

function principal(productos) {
    let carrito = []
     
    let botonBuscar = document.getElementById("search")
    botonBuscar.addEventListener("click", () => filtrarYRenderizar(productos, carrito))
    renderizarProductos(productos, carrito)
}

//  FUNCIONES

function filtrarYRenderizar(productos, carrito) {
    let productosFiltrados = filtrarProductos(productos)
    renderizarProductos(productosFiltrados, carrito)
}


function filtrarProductos(productos) {
    let inputBusqueda = document.getElementById("inputBusqueda")
    return productos.filter(producto => producto.categoria.includes(inputBusqueda.value) || producto.nombre.includes(inputBusqueda))
}


function renderizarProductos(productos, carrito) {
    let contenedorDeProductos = document.getElementById("contenedorProductos")
    contenedorDeProductos.innerHTML = ""

    productos.forEach(producto => {
        let tarjetaDelProducto = document.createElement("div")

        tarjetaDelProducto.className = "tarjetaDelProducto"
        tarjetaDelProducto.innerHTML = `
                <h3>${producto.nombre}</h3>
                <img src=./img/${producto.rutaImagen}>
                <h4>Precio: ${producto.precio}</h4>
                <button class="buttonCarrito" id="${producto.id}">Agregar al carrito</button>
            `
        contenedorDeProductos.appendChild(tarjetaDelProducto)

        let botonAgregarAlCarrito = document.getElementById(producto.id)
        // botonAgregarAlCarrito.addEventListener("click", agregarAlCarrito)
        botonAgregarAlCarrito.addEventListener("click", (e) => agregarAlCarrito(e, productos, carrito))
        
    })
}

function agregarAlCarrito(e, productos, carrito) {
    // console.log(e.target)
    // console.log(e.target.id)

    let idDelProducto = Number(e.target.id)

    let productoEnCarrito = carrito.findIndex(producto => producto.id === idDelProducto)
    let productoBuscado = productos.find(producto => producto.id === idDelProducto)

    if (productoEnCarrito !== -1) {
        carrito[productoEnCarrito].unidades++
        carrito[productoEnCarrito].subtotal = carrito[productoEnCarrito].precioUnitario * carrito[productoEnCarrito].unidades
    } else {
        carrito.push({
            id: productoBuscado.id,
            nombre: productoBuscado.nombre,
            precioUnitario: productoBuscado.precio,
            unidades: 1,
            subtotal: productoBuscado.precio
        })
    }

    console.log(carrito)
    renderizarCarrito(carrito)
}

function renderizarCarrito(carrito) {
    let contenedorCarrito = document.getElementById("contenedorCarrito")
    contenedorCarrito.innerHTML = ""

    carrito.forEach(producto => {
        let tarjetaProductoCarrito = document.createElement("div")
        tarjetaProductoCarrito.className = "tarjetaProductoCarrito"
        tarjetaProductoCarrito.innerHTML = `
            <p>${producto.nombre}</p>
            <p>${producto.precioUnitario}</p>
            <p>${producto.unidades}</p>
            <p>${producto.subtotal}</p>
            <button id=eliminar${producto.id}>ELIMINAR</button>
        `
        contenedorCarrito.appendChild(tarjetaProductoCarrito)
    })
}

// let boton = document.getElementById("btnAddCard")

// //primera opcion para llamar un evento (si la funcion no necesita parámetro)
// boton.addEventListener("dblclick", funcionPrincipal)
// boton.onclick = funcionPrincipal

// //segunda opcion (nececsito parametro) - *se usa funcion flecha anonima*
// boton.addEventListener("click", () => crearTarjetasDeProductos(goodMates))
// boton.onclick = () => crearTarjetasDeProductos(goodMates)


// let mensaje
// if (producto.stock <= 3) {
//     tarjetaDelProducto.className = "tarjetaProductoPocoStock"
//     mensaje = "Últimas unidades"
// } else {
//     tarjetaDelProducto.className = "tarjetaDelProducto"
//     mensaje = "Unidades restantes: " + producto.stock
// }

//}

// crearTarjetasDeProductos(goodMates)

// STORAGE => localStorage & sessionStorage

//  LOCAL
// localStorage.setItem("nombre", "Juan")
// localStorage.setItem("edad", 20)
// localStorage.setItem("esCasado", false) 
// localStorage.setItem("productos", goodMates)

// let nombre = localStorage.getItem("nombre")
// let edad = Number(localStorage.getItem("edad"))
// let esCasado = localStorage.getItem("esCasado")

// console.log(nombre)
// console.log(edad)
// console.log(esCasado)

// for (let i = 0; i < localStorage.length; i++) {
//     console.log(localStorage.key(i))
//     console.log(localStorage.getItem(localStorage.key(i)))
// }

// localStorage.removeItem("nombre")
// localStorage.clear()


//    VVV    ...SPREAD     VVV

// let persona = {
//     nombre: "Nicolas",
//     apellido: "Romero",
//     edad: 20
// }
// let persona2 = {...persona}

// let numeros = [1, 5, 2, 7, 2]
// console.log(Math.min(1, 5, 2, 7, 2))
// console.log(Math.min(...numeros))
// console.log(Math.min(numeros))

// let personasOiriginal = ["Juan", "Maria", "Nicolas"]
// let personas = ["Laura", ...personasOiriginal, "Mario"]
// personas.push("Pedro")
// console.log(personas)
// console.log(personasOiriginal)

//podemos pasar parametros desordenados y sin ningun limite

let listaNumeros = [1, 2, 5, 19, 2]

function sumar(...numeros) {
    console.log(numeros)
    return numeros.reduce((acumulador, numero) => numero + acumulador, 0)
}

console.log(sumar(2, 4, 6, 1))
console.log(sumar(...listaNumeros))

let botonEliminar  = document.getElementById("eliminar" + producto.id)
botonEliminar.addEventListener("click", eliminarJugadorDelEquipo)

function eliminarJugadorDelEquipo(e) {
    let equipoSeleccionado = obtenerJugadoresSeleccionadoLS()
    let id = Number(e.target.id.substring(8))
    equipoSeleccionado = equipoSeleccionado.filter(jugador => jugador.id !== id)
    localStorage.setItem("equipoSeleccionado", JSON.stringify(equipoSeleccionado))
    e.target.parentElement.remove()
}

