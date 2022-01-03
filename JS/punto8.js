const numTtabla = Number(prompt('Ingresa la tabla que desea calcular (1 al 10)'));
const tabla = [];


if (numTtabla <= 10 && numTtabla > 0) {
    for (let numTtabla = 1; numTtabla <= 13; numTtabla++) {
        
        tabla.push(numTtabla * i);
    }
}else {
    throw new Error ('Lea la Consigna')
}


alert('El resultado de la Tabla del: ${numTtabla}')