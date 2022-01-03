let cantNum = Number(prompt('Ingrese un Número'));
let cantPares = 0;
let cantImpares = 0;

while (cantNum !== 0) {
    const numIng = Number(prompt('Ingrese un num'))
    if (numIng %2 === 0) {
        cantPares++
    }else{
        cantImpares++
    }

    cantNum--;  //cantNUm -= 1 // cantNum = cantNum - 1
}

alert(
    ``
)