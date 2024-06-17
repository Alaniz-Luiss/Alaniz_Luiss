 
let i = 1
let notas = [];
let suma = 0;
while (i <= 5) {

    let nota = parseInt(prompt ("Ingrese nota "  + i ));
    if (nota >= 0 && nota < 11) {
        notas [i] = nota
        suma += notas [i];
        i++;
    } else {
        alert("nota invalida por favor ingrese otro valor")
    }
}
document.write ("La suma de sus notas es:");
document.write (suma + "</br>");

let promedio = (suma / 5);
document.write ("Su promedio es:");
document.write (promedio);

if (promedio <= 5 ) {

    document.write (" A Reprobado");
} else if (promedio >= 6  && promedio <= 8) {

    document.write (" Esta Aprobado");
} else {

    document.write (" Es Sobresaliente");  
}


