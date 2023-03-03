class Cliente {
    constructor(nombre, password) {
        this.nombre = nombre;
        this.password = password;
    }

    set_turno(dia, hora) {
        this.dia = dia;
        this.hora = hora;
    }
}

const users = [];

function alta_usuario() {

    let nombre_usuario = document.getElementById("nombre");
    let pass_usuario = document.getElementById("pass");
    let dia = document.getElementById("dia");
    let hora = document.getElementById("hora");


    let usuario = new Cliente(nombre_usuario.value, pass_usuario.value, dia.value, hora.value);

    users.push(usuario);

    let arreglo_JSON = JSON.stringify(users);

    localStorage.setItem("users", arreglo_JSON);
}

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

                usuario.set_turno(dia, hora);

                let arreglo_JSON = JSON.stringify(array);

                localStorage.setItem("users", arreglo_JSON);

                alert("Turno guardado correctamente.");

                console.log(arreglo_JSON);
            });

            break;

        } else {

            main.innerHTML = `
                <h1 class="bienvenida">Usuario no encontrado ${nombre_usuario}</h1>
                <a href="users.html" class="volver"><=  Registrarse</a>`;
        }
    }
}

let btn_registro = document.getElementById("btn_registro");

let btn_login = document.getElementById("btn_login");

btn_registro.addEventListener("click", alta_usuario);

btn_login.addEventListener("click", login_usuario);