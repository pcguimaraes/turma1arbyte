/**Faça um algoritmo que receba um texto e remova todos os espaços em brancos no começo e no final do texto
Utilize o método trim() */

var rs = require('readline-sync')
var palavra = (rs.question('Texto sem espacos em branco no comeco e no final do texto\nDigite seu texto:')).trim()
console.log(palavra)