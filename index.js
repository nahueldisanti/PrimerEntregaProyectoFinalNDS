let nombre = prompt("Bienvenide a Punto de Observacion, tu calculadora de viajes. Cual es tu nombre?");


//Constructor de Provincias INICIO

// class Provincia{
//     constructor(nombre, distancia, valorHotel, datoProvincia) {
//     this.nombre= nombre;
//     this.distancia=distancia;
//     this.valorHotel= valorHotel;
//     this.datoProvincia= () =>{console.log(datoProvincia)};
//     this.disponibilidad= 5;
//     }

//     ocupar() {
//         this.disponibilidad -= 1;
//         if (this.disponibilidad === 0){
//             alert("Ups, ya no tenemos lugar para esa provincia");
//         }
//     }
// }

//Array de provincias disponibles 
provincias= [
    { nombre: "Cordoba", distancia: 800 , valorHotel: 1500 , datoProvincia: "En Cordoba podes visitar Tras La Sierra, zona de montes y rios ideal para disfrutar en verano." },
    { nombre: "Santa Fe", distancia: 500 , valorHotel: 1000 , datoProvincia: "En Santa Fe capital, se encuentra el rio Parana. Tomate un Amargo Obrero en la ribera." },
    { nombre: "Chubut", distancia: 900 , valorHotel: 2500 , datoProvincia: "Si visitas la provincia de Chubut entre los meses de septiembre a diciembre, podras ver ballenas francas australes nadando por las costas de Puerto Madryn."  },
    { nombre: "Rio Negro", distancia: 1000 , valorHotel:3000 , datoProvincia: "Rio Negro, una de las provincias con mas atractivos turisticos de la Patagonica. Algunos destinos imperdibles son: Bariloche, San Martin de los Andes, Villa La Angostura y muchos mas. " },
    
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

function opcionesDestino() {
    let opciones = prompt("Un gusto saludarte, "+nombre+". Por favor, ingresa a que provincia te gustaria ir. Si queres salir, ingresa ESC");
    console.log(opciones)
    return opciones;
}

function buscadorDestino(destino) {
    const  provinciaEncontrada = provincias.find( (provincia) => provincia.nombre.toLowerCase === destino.toLowerCase );
    console.log(provinciaEncontrada)
    return provinciaEncontrada
}

//Funcion Calculadora


function calculadora() {
    let destinoSeleccionado=buscadorDestino(opcionesDestino());
    console.log(destinoSeleccionado['valorHotel']);
    console.log(destinoSeleccionado['distancia']);
    while (destinoSeleccionado !== "ESC") {
        if (destinoSeleccionado !=="") {
            let presupuesto = parseFloat(prompt("Hermoso destino. Para continuar, contanos tu presupuesto estimado."));
            let dias= parseFloat(prompt("Por ultimo: Cuantos dias te gustaria hospedarte?")); 
            const valorKilometro = 50;
            //destinoSeleccionado = parseInt(destinoSeleccionado);
            
            if (!isNaN(destinoSeleccionado)){

                switch(destinoSeleccionado){

                    case 1:
                        let costoHotelCordoba= destinoSeleccionado['valorHotel'];
                        let costoTrasladoCordoba = traslado (destinoSeleccionado['distancia'],valorKilometro);
                        let costoHospedajeCordoba = hospedaje (dias, costoHotelCordoba );
                        costoViaje = costoViaje(costoTrasladoCordoba, costoHospedajeCordoba);
                        destinoPosible(presupuesto, costoViaje);
                        break;

                    case 2:
                        let costoHotelSantaFe= 1000;
                        let costoTrasladoSantaFe = traslado (500,valorKilometro);
                        let costoHospedajeSantaFe = hospedaje (dias, costoHotelSantaFe );
                        costoViaje = costoViaje(costoTrasladoSantaFe, costoHospedajeSantaFe);
                        destinoPosible(presupuesto, costoViaje);
                        break;

                    case 3:
                        let costoHotelChubut= 2500;
                        let costoTrasladoChubut = traslado (900,valorKilometro);
                        let costoHospedajeChubut = hospedaje (dias, costoHotelChubut );
                        costoViaje = costoViaje(costoTrasladoChubut, costoHospedajeChubut);
                        destinoPosible(presupuesto, costoViaje);
                        break;

                    case 4:
                        let costoHotelRioNegro= 3000;
                        let costoTrasladoRioNegro = traslado (1000,valorKilometro);
                        let costoHospedajeRioNegro = hospedaje (dias, costoHotelRioNegro );
                        costoViaje(costoTrasladoRioNegro, costoHospedajeRioNegro);
                        destinoPosible(presupuesto, costoViaje);
                        break;
                }
            }
        } else {
            alert("Elige un destino por favor");
        }
        destinoSeleccionado = opcionesDestino();
    }
}

calculadora();