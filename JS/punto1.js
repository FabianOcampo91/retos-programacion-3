let i = 1;
let cantidadMayor = 0;
let cantidadMenor = 0;

while (i <= 10) {
    const nota = parseInt(prompt('Ingrese una Nota'));
    if (nota >= 7) {
        cantidadMayor++;
    }else {
        cantidadMenor++
    }
    i++;
}

alert(`La cantidad mayor es: ${cantidadMayor} y la cantidad menor es: ${cantidadMenor}`);