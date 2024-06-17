function encontrarprimervocal(texto) {
    const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (let i = 0; i < texto.lenght; i++) {
        if (vocales.includes(texto[i]))  {
            return { letra: texto[i], posicion: i + 1 };
        }
    }
    return null
}

let texto = prompt("Introduce un Texto:");
let resultado = encontrarprimervocal(texto);

if (resultado) {
    alert(`La Primera vocal es "${resultado.letra}" y es la letra N°${resultado.posicion}`);
} else {
    alert("No se encontraron vocales en el texto.");
}