/** 13. Faça um programa que receba uma frase e troque a palavra ANTILOPE
 * por um de seus nomes cientificos : Kobus ellipsiprymnus
 * Utilize o método replace() */
var rs = require('readline-sync')
var palavraProibida = 'antilope'
var palavraReserva  = 'Kobus Ellipsiprymnus'

console.log("//////////////// PROIBIDO ANTILOPES ////////////////")
var frase = (rs.question(`Digite uma frase com a palavra ${palavraProibida}:\n`)).toLowerCase()


console.log(frase.replace(palavraProibida,palavraReserva))
