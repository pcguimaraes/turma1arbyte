/* 2. Faça um algoritmo que receba peso e altura do usuário e calcule o IMC.
Para fazer o calculo do IMC utilize : https://www.npmjs.com/package/fasam-imc-calc*/
var rs = require('readline-sync')
var fasam = require('fasam-imc-calc')
const FasamIMC = require('fasam-imc-calc')
var imc = new FasamIMC()

console.log('////////// CALCULO FASAM //////////')
var peso = rs.questionFloat('Digite o peso: ')
var altura = rs.questionFloat('Digite a altura: ')

console.log('Seu IMC: ', imc.calc(peso,altura))