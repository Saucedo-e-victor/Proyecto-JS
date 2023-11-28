const cartas = [new Cartas("Liliana", "negro", "Mitica", "150"),
new Cartas("Noche Eterna", "negro", "Raro", "100"),
new Cartas("Sangre Vampírica", "negro", "Poco Comun", "120"),
new Cartas("Nigromante Sombra", "negro", "Común", "120"),
new Cartas("Tierra basica", "negro", "Rara", "10"),
//cartas blancas
new Cartas("Ángel de la Aurora", "Blanco", "Mitica", "150"),
new Cartas("Campeón de la Esperanza", "Blanco", "Raro", "100"),
new Cartas("Escudo Celestial", "Blanco", "Poco Comun", "120"),
new Cartas("Capellán de la Pureza", "Blanco", "Común", "120"),
new Cartas("Tierra basica", "Rara", "10"),
//cartas azules
new Cartas("Maestro de las Mareas", "azul", "Mitica", "150"),
new Cartas("Esfera de Contrarresto", "azul", "Raro", "100"),
new Cartas("Intruso del Viento", "azul", "Poco Comun", "120"),
new Cartas("Explorador Marítimo", "azul", "Común", "120"),
new Cartas("Tierra basica", "azul", "Rara", "10"),
//cartas rojas
new Cartas("Dragón Furiosos", "rojo", "Mitica", "150"),
new Cartas("Abyssal Persecutor", "rojo", "Raro", "100"),
new Cartas("Campeones de Kamigawa", "rojo", "Poco Comun", "120"),
new Cartas("Despertar del mundo", "rojo", "Común", "120"),
new Cartas("tierra basica", "rojo", "Rara", "10"),
//cartas verdes 
new Cartas("Nacidos de los dioses", "verde", "Mitica", "150"),
new Cartas("Destino reescrito", "verde", "Raro", "100"),
new Cartas("Dragones de Tarkir", "verde", "Poco Comun", "120"),
new Cartas("La batalla por Zendikar", "verde", "Común", "120"),
new Cartas("Tierra basica", "verde", "Rara", "10")

]


//creamos un carrito para las cartas 
const colorCartas = {
    negro: "pantano",
    blanco: "llanura",
    azul: "isla",
    rojo: "montaña",
    verde: "bosques",
};



let carritoCartas = [];
let continuar = '';
let tipoColor = '';
let cantidad = 0;
let precio = 0;
let subTotal = 0;
let total = 0;


function obtenerColor(colorCartas) {
    return Object.keys(colorCartas);
}


//seleciono un color
let seleccion = prompt("Bienvenido te gustaria comprar una cartas si o no");


if (seleccion.toLowerCase() === "si") {
    tipoColor = prompt(`Selecciono un color de la lista \n ${obtenerColor(colorCartas).join(',')}\n`);


    if (tipoColor in colorCartas) {
        alert(`Selecciona de la lista el colores ${tipoColor}, a sea ${colorCartas[tipoColor]}`);
    }
    else {
        alert(`El Color ${tipoColor} no se encuentra en al lista`);
    }

    //ingreso cartas al carrito
    do {
        let cartaSeleccionada = cartas.filter(carta => carta.color === tipoColor);
        cantidad = prompt('Cuantas cartas deseas agregar');


        if (!isNaN(cantidad) && cantidad > 0) {
            for (let i = 0; i < cantidad; i++) {
                if (cartaSeleccionada[i]) {
                    carritoCartas.push(cartaSeleccionada[i]);
                    precio = parseInt(cartaSeleccionada[i].precio);
                    subTotal = precio * cantidad;
                    total += subTotal;
                    alert(`se agregaron ${cantidad} cartas tipo ${cartaSeleccionada[i].nombre} al carrito. subtotal: $${subTotal}`);
                }
            }

        } else {
            alert('Por favor, ingresa un número válido.');
        }
        //total = total +precio*cantidad;
        continuar = prompt('desea Ingresar otra carta (si/no)')

        while (continuar !== 'no' && continuar !== 'si') {
            continuar = prompt('Debe ingresar "no" o "si"')
        }

    } while (continuar === 'si')

    alert(`El total de su compra es : $${total}`);
} else {
    alert("Gracias por tu visita.");
}