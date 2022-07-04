let nombre = prompt("Bienvenide a Punto de Observacion, tu calculadora de viajes. Cual es tu nombre?");


//Constructor de Provincias INICIO (todavia no lo pude terminar este)

class Provincia{
    constructor(nombre, distancia, valorHotel, datoProvincia) {
    this.nombre= nombre;
    this.distancia=distancia;
    this.valorHotel= valorHotel;
    this.datoProvincia= () =>{console.log(datoProvincia)};
    this.disponibilidad= 5;
    }
    ocupar() {
        this.disponibilidad -= 1;
        if (this.disponibilidad === 0){
            alert("Ups, ya no tenemos lugar para esa provincia");
        }
    }
}

//Array de provincias disponibles 
provincias= [
    { nombre: "cordoba", distancia: 800 , valorHotel: 1500 , datoProvincia: "En Cordoba podes visitar Tras La Sierra, zona de montes y rios ideal para disfrutar en verano." },
    { nombre: "santa fe", distancia: 500 , valorHotel: 1000 , datoProvincia: "En Santa Fe capital, se encuentra el rio Parana. Tomate un Amargo Obrero en la ribera." },
    { nombre: "chubut", distancia: 900 , valorHotel: 2500 , datoProvincia: "Si visitas la provincia de Chubut entre los meses de septiembre a diciembre, podras ver ballenas francas australes nadando por las costas de Puerto Madryn."  },
    { nombre: "rio negro", distancia: 1000 , valorHotel:3000 , datoProvincia: "Rio Negro, una de las provincias con mas atractivos turisticos de la Patagonica. Algunos destinos imperdibles son: Bariloche, San Martin de los Andes, Villa La Angostura y muchos mas. " },
]

//Funciones necesarias para la calculadora

function traslado (kilometros, valor) {
    let valorKilometro = kilometros * valor;
    return valorKilometro;
}

function hospedaje (dias, valor) {
    let valorHospedaje = dias * valor;
    return valorHospedaje;
}

function costoViaje (valorHospedaje, valorKilometro) {
    costo = valorHospedaje + valorKilometro;
    alert ("El costo de tu viaje es de: $"+ costo);
    return costo
}

function destinoPosible (presupuesto, costoTotal) {
    if (parseFloat(presupuesto)>parseFloat(costoTotal)) {
        alert("Tu viaje ha sido reservado");
    }
    else {
        alert("Dado tu presupuesto, quizas podes elegir otro destino o viajar menos dias.");
    }
}

function verDato (provincia){
    verDato = prompt("Te gustaria conocer mas sobre esta provincia? Pone OK para verlo.");
    if(verDato === "ok") {
        alert(provincia['datoProvincia']);
        console.log(provincia['datoProvincia']);
    }
    else {
        alert("Que tengas buen viaje!");
    }
}

function buscadorDestino() {
    const destino = prompt("Un gusto saludarte, "+ nombre +". Por favor, ingresa a que provincia te gustaria ir. Si queres salir, ingresa ESC(Opciones disponibles: Cordoba, Rio Negro, Chubut, Santa Fe");
    console.log(destino);
    const  provinciaEncontrada = provincias.find( provincia => provincia.nombre === destino.toLowerCase() ); //Me gustaria lograr aca usar el toLowerCase, pero me hace fallar el codigo y no se que puede ser.
    console.log(provinciaEncontrada);
    return provinciaEncontrada;
}

function calculadora() {
    let destinoSeleccionado=buscadorDestino();
    console.log(destinoSeleccionado['valorHotel']);
    console.log(destinoSeleccionado['distancia']);
    while (destinoSeleccionado !== "ESC") {
        if (destinoSeleccionado !=="") {
            let presupuesto = parseFloat(prompt("Hermoso destino. Para continuar, contanos tu presupuesto estimado."));
            let dias= parseFloat(prompt("Por ultimo: Cuantos dias te gustaria hospedarte?")); 
            const valorKilometro = 50;
            let costoHotel= destinoSeleccionado['valorHotel'];
            let costoTraslado = traslado (destinoSeleccionado['distancia'],valorKilometro);
            let costoHospedaje = hospedaje (dias, costoHotel);
            costoViaje = costoViaje(costoTraslado, costoHospedaje);
            console.log(costoViaje);
            destinoPosible(presupuesto, costoViaje);
            console.log(destinoPosible);
            verDato(destinoSeleccionado); 
            break;
        } else {
            alert("Elige un destino por favor");
        }
        destinoSeleccionado = buscadorDestino(opcionesDestino());
    }
}

calculadora();