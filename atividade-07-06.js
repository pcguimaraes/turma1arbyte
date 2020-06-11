/**Peça  ao usuário para digitar dez valores numéricos e ordene por ordem crescente esses valores,
 * guardando-os num vetor e depois exibindo para o usuário.
 * Para esta atividade tente usar o algoritmo Bubble Sort (Método da bolha),
 * pesquise sobre ele na internet. 

Vídeo bem detalhado do assunto: https://www.youtube.com/watch?v=ZYO43bi0IXY
Video ilustrativo : https://www.youtube.com/watch?v=lyZQPjUT5B4
 */

var rs = require('readline-sync')
var numeros = []
var numMax = 10
var numeroDigita

console.log("//////////////// ORDENADOR DE NUMEROS ////////////////")
for(i=0;i<numMax;i++){
    numeroDigita = rs.question(`Digite o valor do ${i+1}o numero:`) 
    numeros.push(numeroDigita)
}
console.log(`Numeros ordenados: ${numeros.sort()}`)
