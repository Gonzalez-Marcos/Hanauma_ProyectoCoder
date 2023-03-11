
class Cliente {
    constructor(nombre, apellido, telefono, dia, hora) {

            this.nombre = nombre,
            this.apellido = apellido,
            this.telefono = telefono,
            this.dia = null,
            this.hora = null          
    }
    get_datos(){
            //Método para enviar todos los datos del turno solicitado
            console.log("----Datos de su turno----");
            console.log("Nombre usuario: ", this.nombre);
            console.log("Día de turno: ", this.dia);
            console.log("Hora: ", this.hora);
            console.log("Gracias por su visita.");
            console.log("");
    }
    set_turno(dia, hora) {
        //Método para insertar turno en usuario registrado
            this.dia = dia;
            this.hora = hora;
        
  }
}

// Inicializamos la lista de usuarios y creamos uno a modo testing
const users = [];

users.push(new Cliente("marcos", "gonzalez", 1160361071,))

//Función para buscar si el cliente ya esta registrado
function buscar_cliente(nombre) {
    return cliente => cliente.nombre == nombre;
}


//Inicializamos las variables para entrar al while

let nombre = prompt("Ingrese nombre: ");
nombre = nombre.toLowerCase();

let pregunta =prompt('Desea sacar un turno?'); 

//Bucle para validar los campor requeridos
while (pregunta != "no"){ 

    // pregunta = prompt('Si, para solicitar turno. No, para salir.: ')
    // pregunta = pregunta.toLowerCase();

    //Variable donde almacenamos el usuario ingresado y filtramos si el mismo está registrado o no.
    let resultado_busqueda = users.find(buscar_cliente(nombre));

    //En caso de no estar registrado, se solicitará registrarse de modo automático.
    if(resultado_busqueda != undefined){

        let dia = prompt("Ingrese un dia para su turno: ");
        dia = dia.toLowerCase();

        let diasValido = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];

        //Validamos que el dia ingresado sea dentro de los disponibles
        if (diasValido.includes(dia)) {
            let hora = parseInt(prompt("Ingrese un horario:"));
        
            //Verificamos que la hora sea dentro del horario de apertura y cierre    
            if(hora >= 10 && hora <= 16){
                
                //Si todo esta Ok, se imprime las siguientes líneas, junto con los métodos declarados en la class.
                console.log("Su turno ha sido registrado.");
                console.log("");
                resultado_busqueda.set_turno(dia, hora);
                resultado_busqueda.get_datos();
                console.log(users);
                alert("Su turno ha sido registrado.\n En breve le llegará un mensaje al número ingresado. ")
                break;
            }
            else{
                alert('Horario no disponible. Sólo de 10 a 16hs.')
            }
        }
        else{
            alert("El día seleccionado no es válido. Por favor ingrese un día de lunes a viernes.");
        }
    }
    else{

        alert("Debe registrarse para solicitar un turno");

        nombre = prompt("Ingrese su nombre: ");
        nombre = nombre.toLowerCase();
        if( resultado_busqueda != undefined ){
            alert("Usuario ya registrado!")

        }
        else{

            let apellido = prompt("Ingrese apellido: ");
            apellido = apellido.toLowerCase();

            let telefono = parseInt(prompt("Ingrese telefono: "));

            let nuevo_user = new Cliente(nombre ,apellido , telefono);

            users.push(nuevo_user);
            console.log(nuevo_user);
    
            alert(`Gracias por registrarse ${nombre},\n
            se ha iniciado sesión.\n
            A continuacion ingrese "si" para solicitar turno,\n
            "no" en caso de finalizar.`)
        pregunta = prompt('"si" para continuar. "no" para salir')
        }
    }
    
}