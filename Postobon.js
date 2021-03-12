//Postobon

let horasTrabajadas = 40; 
let salario = 20000 * horasTrabajadas;
if(horasTrabajadas <= 40) {
    console.log("Pagar a empleado ", salario);
}else {
    let extraHoras = horasTrabajadas - 40;
        let salarioExtra = extraHoras * 25000;
    console.log("Pagar a empleado", salarioExtra);
}
