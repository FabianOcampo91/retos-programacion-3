const cantAltura = parseInt (prompt('Ingrese la cantidad de altura'));
// let alturaIn = prompt ('Ingrese las alturas');
let alturaPromedio = 0;
let i = 1;

while (i <= cantAltura) {
    const altura = parseInt(prompt('INgrese la Altura'));
    alturaPromedio = alturaPromedio + altura
    i++;
}


alert(`La altura promedio es: ${alturaPromedio / cantAltura}`);
