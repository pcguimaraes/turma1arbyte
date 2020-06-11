/** 09. Faça um programa que receba um nome e imprima a terceira letra do nome.
Utilize o método charAt() para esta atividade.
 */

var rs = require('readline-sync')
var letra = 2

console.log("//////////////// TERCEIRA LETRA DO NOME ////////////////")
var nome = rs.question("Digite um nome: ")

console.log(`A terceira letra do nome eh ${nome.charAt(letra)}`)