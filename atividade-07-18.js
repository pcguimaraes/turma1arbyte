/**Faça um algoritmo que receba um texto e imprima ele em letra minuscula novamente.
Utilize o método toLowerCase()
 */

var rs = require('readline-sync')
var palavra = (rs.question('Cole seu texto que ele sera impresso em letras minusculas:\n')).toLowerCase()
console.log(palavra)