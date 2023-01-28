let users = "marcos";

let diaAtencion = "martes";

let horaApertura = 10;

let horaCierre = 16;

function reservaTurno(user, dia, hora) {

    hora = parseInt(hora);

    if (user == users) {

        return user
    }
    else if (dia == diaAtencion) {

        return dia
    }
    else if ((hora >= horaApertura) && (hora <= horaCierre)) {

        return hora
    }

}


let pregunta = prompt('¿Desea algún turno? Si no desea escriba "no"  ').toLowerCase();

while (pregunta != 'no') {

    
    if (pregunta != 'no') {
        
        let usuario = prompt('Ingrese su usuario: ')
        
        let diaTurno = prompt('Ingrese su usuario: ')
        
        let horaTurno = prompt('Ingrese su usuario: ')

        let turnoRegistrado = reservaTurno(usuario, diaTurno, horaTurno)
        
        console.log((turnoRegistrado));
        console.log("----Datos de su turno----");
        console.log("Bienvenido: ", usuario);
        console.log("Su turno fue registrado para el día: ", diaTurno);
        console.log("En el horario de las: ", horaTurno);
    
        // alert('Usuario incorrecto o debe registrarse para continuar.')
        
    }
    pregunta = prompt('¿Desea otro turno? Si no desea, escriba "no"  ')

}