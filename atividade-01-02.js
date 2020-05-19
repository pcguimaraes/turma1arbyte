/* 2. (OBRIGATÓRIO) Faça um programa que receba um número do usuário e verifique se
este número é par ou ímpar, escrevendo na tela “PAR” ou “ÍMPAR” */
var rs = require('readline-sync')
var numero = rs.questionInt('Digite um numero: ')
var par = 2

if(!(numero % par)){
    console.log(`${numero} eh um numero PAR`)
}else{
    console.log(`${numero} eh um numero ÍMPAR`)
}