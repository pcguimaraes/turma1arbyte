/* Fazer um programa para receber um numero e verificar se está entre 100 e 200.
Se estiver na faixa, imprimir: você digitou um numero entre 100 e 200.
Se não estiver na faixa, imprimir: você digitou um numero fora da faixa entre 100 e 200. */
var readlineSync = require('readline-sync')
var numero = readlineSync.questionInt('Digite um numero: ')
var numMin = 100
var numMax = 200
var dentro = 'voce digitou um numero entre 100 e 200.'
var fora = 'voce digitou um numero fora da faixa entre 100 e 200.'
var erro = 'ERRO! voce nao digitou um numero.'

if (numero >= numMin && numero <= numMax){
    console.log(dentro)
}else if(numero < numMin || numero > numMax ){
    console.log(fora)
}else{
    console.log(erro)
}
