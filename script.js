/* let numero = 23
let variasCosas = [23, true, 'Johan', function(){}, [], numero]

let otroArreglo = []

console.log(variasCosas[0] * variasCosas[5])
console.log(variasCosas[1])
console.log(variasCosas[5])
console.log(variasCosas[3])
console.log(otroArreglo) */
/* 
let numeros = [1,2,3,4,5,6,7,8,9,10]
for(let index = 0; index < numeros.length; index++){
    console.log(numeros[index])
    if(numeros[index] % 2 == 0){
        console.log(numeros[index])
    }
} */


    let nombres  = []
    for(let index = 0; index < 5; index++){
        nombres[index] = prompt('Ingrese un nombre:')
    }

    for(let index = 0; index < nombres.length; index++){
        console.log(nombres[index])
    }