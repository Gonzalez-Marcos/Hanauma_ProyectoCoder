/* inicializo la clase cliente*/
class Cliente {
    constructor(nombre, password, dia, hora) {
        this.nombre = nombre;
        this.password = password;
        this.dia = dia;
        this.hora = hora
    }
}
/*Creamos el array de usuarios donde luego seran almacenados*/
const users = [];

/*Funcion para dar de alta un usuario y almacenar en el LocalStorage*/
function alta_usuario() {

    let nombre_usuario = document.getElementById("nombre");
    let pass_usuario = document.getElementById("pass")

    let usuario = new Cliente(nombre_usuario.value, pass_usuario.value);

    users.push(usuario);

    let arreglo_JSON = JSON.stringify(users);

    localStorage.setItem("users", arreglo_JSON);
}

/* Funcion para validar usuario y poder ingresar para sacar turno en el mismo*/
function login_usuario() {

    let array = JSON.parse(localStorage.getItem("users"));

    let nombre_usuario = document.getElementById("nombre").value;

    let pass_usuario = document.getElementById("pass").value;

    for (let usuario of array) {

        if (nombre_usuario == usuario.nombre && pass_usuario == usuario.password) {

            let main = document.getElementById("main");

            main.innerHTML = `
                <h1 class="bienvenida">Bienvenido/a al sistema ${usuario.nombre}</h1>
                <label for="">¿Desea solicitar un turno en Hanauma?</label>
                <input type="date" id ="dia" class="dia">
                <input type="time" id="hora" class="hora">
                <button class="btn_turno" id="btn_turno">Guardar</button>
                <a href="index.html" class="volver"><=  Volver</a>`;

            let btn_turno = document.getElementById("btn_turno");

            btn_turno.addEventListener("click", function () {

                let dia = document.getElementById("dia").value;

                let hora = document.getElementById("hora").value;

                if (validarDiaHora(dia, hora)) {

                    usuario.dia = dia;
                    usuario.hora = hora;

                    let arreglo_JSON = JSON.stringify(array);

                    localStorage.setItem("users", arreglo_JSON);

                    main.innerHTML = `
                        <h2 class="bienvenida">Su turno ha sido guardado con éxito!</h2>
                        <p>Nombre: ${nombre_usuario}</p>
                        <p>Dia del turno: ${dia}</p>
                        <p>Hora del turno: ${hora}</p>
                        <a href="index.html" class="volver"><=  Salir</a>`

                } else {

                    main.innerHTML = `
                                <h2 class="bienvenida">"El día y la hora deben estar entre lunes y viernes y entre las 10 y las 18 horas.</h2>
                                <a href="users.html" class="volver"><=  Salir</a>`;

                }
            });

            break;

        } else {

            main.innerHTML = `
                <h1 class="bienvenida">Usuario no encontrado ${nombre_usuario}</h1>
                <a href="users.html" class="volver"><=  Registrarse</a>`;
        }
    }
}

function validarDiaHora(dia, hora) {
    let fecha = new Date(dia);
    let diaSemana = fecha.getDay();
    let horaNum = parseInt(hora.replace(":", ""));
    return diaSemana >= 1 && diaSemana <= 5 && horaNum >= 1000 && horaNum <= 1800;
}

/*Lista de eventos donde se aplica cada funcion dependiendo donde se produzca*/
let btn_registro = document.getElementById("btn_registro");

let btn_login = document.getElementById("btn_login");

btn_registro.addEventListener("click", alta_usuario);

btn_login.addEventListener("click", login_usuario);