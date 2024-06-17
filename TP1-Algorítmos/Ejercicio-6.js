//revisar codigo para que al ingresar 0 me diga que es incorecto
let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

function nombremes (numero) {
 if (numero >= 1 && numero <= 12 ) {
    return meses [numero -1] }
}

let numeromes = prompt ("Ingrese un número de mes:")

let NombredelMes = nombremes(numeromes)
if (numeromes <= 12) {
 alert("El mes correspondiente al número ingresado es " + NombredelMes)
 }  else if (numeromes > 12) {
    alert("El número ingresado es incorrecto, por favor seleccione un número del 1 al 12")
}