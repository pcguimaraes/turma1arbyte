/* Escreva um programa que leia as medidas de um triângulo e escreva se ele é equilatero, isósceles ou escaleno
Sendo que
equilatero: possui os 3 lados iguais
isoscele: possui dois lados iguais
escaleno: possui tres lados diferentes */
readlineSync = require('readline-sync')
var lado1 = readlineSync.question(`Digite a medida do primeiro lado do triangulo: `)
var lado2 = readlineSync.question(`Digite a medida do segundo lado do triangulo: `)
var lado3 = readlineSync.question(`Digite a medida do terceiro lado do triangulo: `)

if(lado1 == lado2 && lado2 == lado3){
    console.log('equilatero')
}else if(lado1 != lado2 && lado2 != lado3 && lado3 != lado1){
    console.log('escaleno')
}else{
    console.log('isoscele')
}