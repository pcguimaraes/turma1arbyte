/* 1. (OBRIGATÓRIO) Escreva um programa para ler o ano de nascimento de uma pessoa e
escrever uma mensagem que diga se ela poderá ou não votar este ano (não é
necessário considerar o mês em que ela nasceu). */
var rs = require('readline-sync')
var anoAtual = 2020
var anoNascimento = rs.questionInt('Insira seu ano de nascimento: ')
var idade = (anoAtual - anoNascimento)

if(idade < 16){
    console.log(`Voce tem ${idade} anos e nao pode votar. :(`)
} else if(idade > 18){
    console.log(`Voce tem ${idade} anos e pode votar, se vc quiser. ;)`)
}else if(idade < 65){
    console.log(`Voce tem ${idade} anos e deve votar. :)`)
}else{
    console.log(`Voce tem ${idade} anos e pode votar, se vc quiser. ;)`)
}