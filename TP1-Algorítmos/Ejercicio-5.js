//Definimos nuestras variables "dato" y resultado""
let dato, resultado;

//Proporcionamos una variable que dentro de ella se guardara la información proporcionada por el usuario (nombre), mediante el "window.prompt"
val1 = window.prompt("Introduce tu nombre", "...");

//Proporcionamos una variable que dentro de ella se guardara la información proporcionada por el usuario (apellido), mediante el "window.prompt"
val2 = window.prompt("Introduce tu apellido", "...");

//Aca almacenamos los 2 datos ingresados por el usuario dentro de una sola variable "resultado" para luego poder mostrarla en pantalla
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ;

//Mostramos en pantalla el contenido que se encuentra dentro de la variable (resultado) que fue ingresado por el usuario
document.write(resultado);