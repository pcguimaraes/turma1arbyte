/* Encontrar o dobro de um numero caso ele seja positivo e o seu triplo caso seja negativo */

var readlineSync = require('readline-sync')
var numero = readlineSync.questionInt('Digite um numero: ')
var positivo = (numero * 2)
var negativo = (numero * 3)


if(numero >= 0){
    console.log(positivo)
}else{
    console.log(negativo)
}