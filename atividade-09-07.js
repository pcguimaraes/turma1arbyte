/* 7. . Faça uma função que recebe um número e devolve seu valor absoluto.
No final peça um número para o usuário e exiba o valor absoluto.
*/
var rs = require('readline-sync')
var valor = rs.questionFloat('Digite um numero para saber seu valor asluto: ')

console.log(Math.abs(valor))
