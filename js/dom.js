
class Cliente {
    constructor(nombre, password, dia, hora) {

        this.nombre = nombre,
            this.password = password,
            this.dia = null,
            this.hora = null
    }
    set_turno(dia, hora) {
        //Método para insertar turno en usuario registrado
        this.dia = dia;
        this.hora = hora;

    }
}

const users = [];

function alta_usuario() {

    let nombre_usuario = document.getElementById("nombre");
    let pass_usuario = document.getElementById("pass");
    let dia_usuario = null;
    let hora_usuario = null;


    let usuario = new Cliente(nombre_usuario.value, pass_usuario.value, dia_usuario, hora_usuario);


    users.push(usuario);


    let arreglo_JSON = JSON.stringify(users);

    localStorage.setItem("users", arreglo_JSON);

}

function login_usuario() {

    let array = localStorage.getItem("users");

    array = JSON.parse(array);

    let nombre_usuario = document.getElementById("nombre").value;
    let pass_usuario = document.getElementById("pass").value;


    for (let usuario of array) {

        if (nombre_usuario == usuario.nombre && pass_usuario == usuario.password) {

            let main = document.getElementById("main")

            main.innerHTML = `<h1>Bienvenido/a al sistema ${usuario.nombre}</h1>
                            <label for="">¿Desea solicitar un turno en Hanauma?</label>
                            <input type="date" id ="dia">
                            <input type="time" id="hora">
                            <button id="btn_turno">Guardar</button>
                            <a href="users.html">Volver</a>`;

            let btn_turno = document.getElementById("btn_turno");

            btn_turno.addEventListener("click", function () {

                let dia = document.getElementById("dia").value;

                let hora = document.getElementById("hora").value;

                console.log(usuario);
                
                usuario.set_turno(dia, hora);

                alert("Turno guardado correctamente.");
            });
            break;
        }
        else {
            main.innerHTML = `<h1>Usuario no encontrado ${nombre_usuario}</h1>
                                       <a href="users.html">Volver</a>`
        }

    }

}


let btn_registro = document.getElementById("btn_registro");

let btn_login = document.getElementById("btn_login");

btn_registro.addEventListener("click", alta_usuario);

btn_login.addEventListener("click", login_usuario);

