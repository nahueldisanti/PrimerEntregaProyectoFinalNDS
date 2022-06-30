let nombre = prompt("Bienvenide a Punto de Observacion, tu calculadora de viajes. Cual es tu nombre?");

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
    let opciones = prompt("Un gusto saludarte, "+nombre+". Por favor, elegi alguno de los siguientes destinos.(ESC para salir)\n 1.Cordoba\n 2. Santa Fe\n 3.Chubut\n 4.Rio Negro");
    return opciones;
    
}

function calculadora() {
    let destinoSeleccionado=opcionesDestino();
    while (destinoSeleccionado !== "ESC") {
        if (destinoSeleccionado !=="") {
            let presupuesto = parseFloat(prompt("Hermoso destino. Para continuar, contanos tu presupuesto estimado."));
            let dias= parseFloat(prompt("Por ultimo: Cuantos dias te gustaria hospedarte?")); 
            const valorKilometro = 50;
            destinoSeleccionado = parseInt(destinoSeleccionado);
            
            if (!isNaN(destinoSeleccionado)){

                switch(destinoSeleccionado){

                    case 1:
                        let costoHotelCordoba= 1500;
                        let costoTrasladoCordoba = traslado (800,valorKilometro);
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