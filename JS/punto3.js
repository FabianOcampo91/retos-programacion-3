const cantEmpleados = parseInt(prompt('Ingrese ña cantidad de Empleados'));
const sueldoMin = 0;
const sueldoMax = 0;
const total = 0;
let i =1;


while (i <= cantEmpleados) {
    const sueldos = parseInt(prompt('Ingrese los sueldos de entre 100 a 500'));
    if (sueldos >= 100 && sueldos <= 300) {
        sueldoMin++
    }else {
        sueldoMax++
    }
    total = total  + sueldos
    i++
}

alert(`CObran mucho: ${sueldoMax} y cobran poco: ${sueldoMin} en total: ${total}`)