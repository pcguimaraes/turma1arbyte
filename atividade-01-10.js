/* Faça um algoritmo que receba três notas, calcule e mostre a média aritmética entre elas,
    Caso a média seja maior ou igual a 7, imprimir: ALUNO APROVADO
    Media menor que 7: ALUNO REPROVADO
 */
var readlineSync = require('readline-sync')
var nota1 = readlineSync.questionFloat('Digite a primeira nota: ')
var nota2 =+ readlineSync.questionFloat('Digite a primeira nota: ')
var nota3 = readlineSync.questionFloat('Digite a primeira nota: ')
var media = ((nota1 + nota2 + nota3) / 3)
var aprovado = `Média: ${media} - ALUNO APROVAO`
var reprovado = `Média: ${media} - ALUNO REPROVADO`

if(media < 7){
    console.log(reprovado)
}else{
    console.log(aprovado)
}