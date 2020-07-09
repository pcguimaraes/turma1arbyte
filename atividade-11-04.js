/* 4. Faça um algoritmo que receba um número e diga se ele é primo ou não
Utilize o pacote : https://www.npmjs.com/package/prime-number*/
const rs = require('readline-sync')
const pn = require('prime-number')

console.log('////////// IS PRIME //////////')
var numero = rs.questionInt('Digite um numero para sabermos se eh primo: ')
if(pn(numero)){
    console.log(`O numero ${numero} eh primo.`)
}else{
    console.log(`O numero ${numero} nao eh primo.`)
}