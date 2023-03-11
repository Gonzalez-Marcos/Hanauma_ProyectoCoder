/* inicializo la clase cliente*/
class Cliente {
    constructor(nombre, password, rol , dia, hora) {
        this.nombre = nombre;
        this.password = password;
        this.rol = "user";
        this.dia = dia;
        this.hora = hora
    }
}
/*Creamos el array de usuarios donde luego seran almacenados*/
const users = [];

/*Funcion para dar de alta un usuario y almacenar en el LocalStorage*/
function alta_usuario() {

    let nombre_usuario = document.getElementById("nombre");

    let pass_usuario = document.getElementById("pass");

    if (nombre_usuario.value == "" || pass_usuario.value == "") {

        Swal.fire({
            title: 'Error!',
            text: 'Ningun campo puede estar vacío',
            icon: 'warning',
            confirmButtonText: ' Volver ',
            confirmButtonColor: '#d8e2dc',

            timer: 3000
        })

    } {

        let usuario = new Cliente(nombre_usuario.value, pass_usuario.value);

        users.push(usuario);

        let arreglo_JSON = JSON.stringify(users);

        localStorage.setItem("users", arreglo_JSON);

        nombre_usuario.value = "";
        pass_usuario.value = "";
    }
}

/* Funcion para validar usuario y poder ingresar para sacar turno en el mismo*/
function login_usuario() {

    // let array = JSON.parse(localStorage.getItem("users"));

    let nombre_usuario = document.getElementById("nombre").value;

    let pass_usuario = document.getElementById("pass").value;

    //Promesa fetch usando un archivo JSON que contiene un array de objetos
    fetch('../../../src/database/users.json')

        .then(response => response.json())

        .then(data => {

            //Guardamos el JSON en una variable
            let array = data;

            //Inicializamos un usuario encontrado para poder utilizar el alerta de manera correcta
            let usuarioEncontrado = false;

            //Recorremos los usuarios atra vez del for
            for (let usuario of array) {

                //Si los campos estan vacios dará un alerta
                if (nombre_usuario == "" || pass_usuario == "") {

                    Swal.fire({
                        title: 'Error!',
                        text: 'Debe ingresar usuario y contraseña.',
                        icon: 'warning',
                        confirmButtonText: ' Volver ',
                        confirmButtonColor: '#d8e2dc',
                        timer: 3000
                    })

                } else {

                    //Validos usuarios y contraseñas e ingresamos al sistema
                    if (nombre_usuario == usuario.nombre && pass_usuario == usuario.password) {

                        usuarioEncontrado = true;

                        let main = document.getElementById("main");

                        main.innerHTML = `
                            <h1 class="bienvenida">Bienvenido/a al sistema ${usuario.nombre}</h1>
                            <label for="">¿Desea solicitar un turno en Hanauma?</label>
                            <input type="date" id ="dia" class="dia">
                            <input type="time" id="hora" class="hora">
                            <button class="btn_turno" id="btn_turno">Guardar</button>
                            <a href="../../index.html" class="volver"><=  Volver</a>`;

                            let btn_turno = document.getElementById("btn_turno");

                            //Evento donde al validar usuario da la posibilidad de seleccionar un turno
                         btn_turno.addEventListener("click", function () {

                            let dia = document.getElementById("dia").value;

                            let hora = document.getElementById("hora").value;

                            //Se valida dia y hora segun horarios estipulados
                            if (validarDiaHora(dia, hora)) {

                                usuario.dia = dia;
                                usuario.hora = hora;

                                // Actualizar el turno del usuario en el archivo JSON

                                let arreglo_JSON = JSON.stringify(array);

                                localStorage.setItem("users", arreglo_JSON);

                                Swal.fire({
                                    title: 'Éxito!',
                                    html: `<h2 class="bienvenida">Su turno ha sido guardado con éxito!</h2>
                                            <p>Nombre: ${nombre_usuario}</p>
                                            <p>Dia del turno: ${dia}</p>
                                            <p>Hora del turno: ${hora}</p>
                                            <a href="../../index.html" class="volver"><=  Salir</a>`,
                                    icon: 'success',
                                    confirmButtonText: ' Volver ',
                                    confirmButtonColor: '#d8e2dc',
                                })
                            } else {
                                //Alerta en caso de seleccionar dias u horarios no disponibles
                                Swal.fire({
                                    title: 'Error!',
                                    html: `
                                    <h2 class="bienvenida">El día y la hora deben estar entre lunes y viernes y entre las 10 y las 18 horas.</h2>`,
                                    icon: 'error',
                                    confirmButtonText: ' Volver ',
                                    confirmButtonColor: '#d8e2dc',


                                })

                            }
                            });
                        break;
                    }
                    

                }
                
                
            }
            //En caso de no encontrar al usuario, saldrá el siguiente alerta
            if (!usuarioEncontrado) {

                    // main.innerHTML = x;
                    Swal.fire({
                        title: 'Error!',
                        html: `<h1 class="bienvenida">Usuario o contraseña inválidas</h1>`,
                        icon: 'error',
                        confirmButtonText: ' Volver ',
                        confirmButtonColor: '#d8e2dc',
                    })
           


                }
        })
}



//Funcion que valida el horario
function validarDiaHora(dia, hora) {
    let fecha = new Date(dia);
    let diaSemana = fecha.getDay();
    let horaNum = parseInt(hora.replace(":", ""));
    return diaSemana >= 1 && diaSemana <= 5 && horaNum >= 1000 && horaNum <= 1800;
}



/*Lista de eventos donde se aplica cada funcion dependiendo donde se produzca*/
let btn_registro = document.getElementById("btn_registro");

let btn_login = document.getElementById("btn_login");

btn_login.addEventListener("click", login_usuario);

btn_registro.addEventListener("click", alta_usuario);