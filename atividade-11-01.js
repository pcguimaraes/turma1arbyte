/* Atividade Modulos (Lista 11)
1. Faça uma programa que receba 4 notas e calcule a média e apresente ao usuário a
média no final.
Utilize o pacote : https://www.npmjs.com/package/median
*/
var rs = require('readline-sync')
var median = require('median')
var notas = []
var notasN = 4


console.log('////////// NOTAS EM MEDIAN //////////')
for(i=0;i<notasN; i++){
    notas[i] = rs.questionFloat(`Digite a ${i+1} nota: `)
}

var media = median(notas)
console.log(`A media das notas eh ${media}`)
