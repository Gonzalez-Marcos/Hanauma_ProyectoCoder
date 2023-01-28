let users = "marcos";

let diaAtencion = "martes";

let horaApertura = 10;

let horaCierre = 18;

function usersRegister(user) {

    if (user == users) {

        user = user.toLowerCase();

        return user

    } else {

        return alert("Debe estar registrado. Gracias.");
    }
}

function diaTurno(dia) {

    dia = dia.toLowerCase();

    if (dia == diaAtencion) {

        return dia

    } else {

        return alert("Día seleccionado no disponible");
    }
}

function horaTurno(hora) {

    hora = parseInt(hora);

    if (hora >= horaApertura && hora <= horaCierre) {

        return hora

    } else {

        return alert("Horario no disponible")
    }
}

let pregunta = " ";

pregunta = pregunta.toLowerCase();

while (pregunta != "no") {

    pregunta = prompt("Desea solicitar un turno? Si o No. ");

    if (pregunta != "no") {

        let user = prompt("Ingrese usuario");

        let dia = prompt("Ingrese día. (Únicamente martes)");

        let hora = prompt("Ingrese un horario entre las 10 y 18 hs.")

        if (usersRegister(user) && diaTurno(dia) && horaTurno(hora)) {

            console.log("Su turno ha sido registrado.");
            console.log("");
            console.log("----Datos de su turno----");
            console.log("Nombre usuario: ", user);
            console.log("Día de turno: ", dia);
            console.log("Hora: ", hora);
            console.log("Gracias por su visita.");
            console.log("");



            pregunta = prompt('Su turno ha sido registrado. Presione "Sí" si desea otro turno y "No" pasa salir');

            continue;

        }
    }
    else {
        alert("Muchas gracias por su visita =).")
    }
}