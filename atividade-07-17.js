/**Faça um algoritmo que receba um texto e imprima ele em letra maisucula novamente. 
Utilize o método toUpperCase()
 */
var rs = require('readline-sync')
var palavra = (rs.question('Cole seu texto que ele sera impresso em letras maisculas:\n')).toUpperCase()
console.log(palavra)