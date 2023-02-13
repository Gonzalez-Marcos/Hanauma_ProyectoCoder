// let diaAtencion = "martes";

// let horaApertura = 10;

// let horaCierre = 18;

//Validamos si el Usuario ingresado está registrado o no
// function usersRegister(user) {

//     if (user == users) {

//         user = user.toLowerCase();

//         return user

//     } else {

//         return alert("Debe estar registrado. Gracias.");
//     }
// }

//Validamos si el dia elegido está disponible.
// function diaTurno(dia) {

//     dia = dia.toLowerCase();

//     if (dia == diaAtencion) {

//         return dia

//     } else {

//         return alert("Día seleccionado no disponible");
//     }
// }

//Chequeamos que la hora ingresada sea dentro del horario donde se encuentra abierto.
// function horaTurno(hora) {

//     hora = parseInt(hora);

//     if (hora >= horaApertura && hora <= horaCierre) {

//         return hora

//     } else {

//         return alert("Horario no disponible")
//     }
// }

//Inicializamos la pregunta si desea sacar o no un turno para entrar al While
// let pregunta = " ";

// pregunta = pregunta.toLowerCase();

// pregunta = prompt("Desea set_tun turno? Si o No. ");

// while (pregunta != "no") {

//     //Atra vez de las variables recopilamos la info recibida por el usuario.
//     let user = prompt("Ingrese usuario");

//     let dia = prompt("Ingrese día. (Únicamente martes)");

//     let hora = prompt("Ingrese un horario entre las 10 y 18 hs.")

//     //Validamos que si todas las restricciones son verdaderas, se ejecuten los siguientes console log
//     if (usersRegister(user) && diaTurno(dia) && horaTurno(hora)) {

//         console.log("Su turno ha sido registrado.");
//         console.log("");
//         console.log("----Datos de su turno----");
//         console.log("Nombre usuario: ", users);
//         console.log("Día de turno: ", dia);
//         console.log("Hora: ", hora);
//         console.log("Gracias por su visita.");
//         console.log("");



//         pregunta = prompt('Su turno ha sido registrado. Presione "Sí" si desea otro turno y "No" pasa salir');

//         continue;

//     }

//     else {
//         //En caso que no se pueda guardar el turno, saldrá el alert.
//         alert("Muchas gracias por su visita =).")
//     }
//     pregunta = prompt("Desea set_tun turno? Si o No. ");

// }

// /*class Client {
//   constructor(firstName, lastName, shift) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.shift = shift;
//   }
  
//   getName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
  
//   getShift() {
//     return `${this.shift.day} at ${this.shift.time}`;
//   }
// }

// class Shift {
//   constructor(day, time) {
//     this.day = day;
//     this.time = time;
//   }
// }

// const myShift = new Shift("Monday", "9:00 AM");
// const myClient = new Client("John", "Doe", myShift);

// console.log(myClient.getName()); // Output: John Doe
// console.log(myClient.getShift()); // Output: Monday at 9:00 AM
