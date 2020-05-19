/* (OBRIGATÓRIO) Escreva um programa para ler 3 valores inteiros (considere que não
    serão lidos valores iguais) e escrevê-los em ordem crescente. */
var rs = require('readline-sync')
var primeiro
var segundo
var terceiro
var v1 = rs.questionInt('Digite o primeiro numero: ')

var v2 = rs.questionInt('Digite o segundo numero: ')
if(v2 == v1){
    console.log('Numero repetido. Valor nao considerado.')
5}

var v3 = rs.questionInt('Digite o terceiro numero: ')
if(v3 == v1 || v3 == v2){
    console.log('Numero repetido. Valor nao considerado.')
}

// primeiro numero
if(v1 < v2 && v1 < v3){primeiro = v1}
else if(v2 < v1 && v2 < v3){primeiro = v2}
else{primeiro = v3}

// terceiro numero
if(v1 > v2 && v1 > v3){terceiro = v1}
else if(v2 > v3 && v2 > v1){terceiro = v2}
else{terceiro = v3}

// segundo numero
if(v1 != primeiro && v1 != terceiro){
    segundo = v1
}
else if(v2 != primeiro && v2 != terceiro){
    segundo = v2
}
else{segundo = v3}

console.log(`Valores em  ordem crescente: ${primeiro} - ${segundo} - ${terceiro}`)