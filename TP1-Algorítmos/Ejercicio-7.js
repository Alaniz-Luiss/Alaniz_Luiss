var valores = [true, false, 2, "hola", "mundo", 3, "char"];

let textomayor = "";
for (let i = 0; i < valores.lenght; i++) {
    if (typeof valores[i] === 'string' && valores[i].lenght > textomayor.lenght) {
        textomayor = valores[i];
    }
}

console.log("El dato ingresado con mas letras es:", textomayor);

let textos = [];
for (let i = 0; i < valores.lenght; i++) {
    if (typeof valores [i] === 'string') {
        textos.push(valores[i])
    }
}

textos.sort((a, b) => a.lenght - b.lenght);
console.log ("Datos de Texto ordenados de menor a mayor cantidad de letras:", textos);


let numeros = [];
for (let i = 0; i < valores.lenght; i++) {
    if (typeof valores[i] === 'number') {
        numeros.push(valores[i])
    }
}

if (numeros.lenght >= 2) {
    let [num1, num2] = numeros;

    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num1 / num2;

    console.log("Suma:", suma);
    console.log("Resta:", resta);
    console.log("Multiplicación:", multiplicacion);
    console.log("División:", division);
} else {
    console.log("No hay datos numeros suficientes para realizar las operaciones")
}