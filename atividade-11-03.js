/* 3. Faça um algoritmo que receba um número e diga se ele é par ou ímpar
Utilize o pacote : https://www.npmjs.com/package/is-odd*/
const rs = require('readline-sync')
const io = require('is-odd')
const isOdd = require('is-odd')

console.log('////////// IS ODD //////////')
var numero = rs.questionInt('Digite um numero para sabermos se eh par ou impar: ')

if(isOdd(numero)){
    console.log(`O numero ${numero} eh impar`)
}else{
    console.log(`O numero ${numero} eh par`)
}
