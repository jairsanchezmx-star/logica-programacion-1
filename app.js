let arrayNumeros = [];
for (i = 0 ; i <= 2 ; i ++){
    arrayNumeros.push(Number(prompt("Ingresa un número")));
}
console.log(arrayNumeros);
let arrayNumerosReg = arrayNumeros.sort();
console.log(`Los números de menor a mayor son: ${arrayNumeros}`);
arrayNumerosReg.reverse();
console.log(`Los números de mayor a menor son: ${arrayNumerosReg}`);
if (arrayNumerosReg[0] == arrayNumerosReg[1] && arrayNumerosReg[1] == arrayNumerosReg[2]){
    console.log("Los 3 números que ingresaste son iguales");
} else if (arrayNumerosReg[0] == arrayNumerosReg[1]){
    console.log(`El número ${arrayNumerosReg[0]} esta repetido`);
} else if  (arrayNumerosReg[0] == arrayNumerosReg[2]){
    console.log(`EL nuúmero ${arrayNumerosReg[2]} esta repetido`);
} else {
    arrayNumerosReg;
}