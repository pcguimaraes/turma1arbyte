/**Faça um algoritmo que verifica se uma string comece com a palavra google 
Caso comece imprima que a palavra é valida se não diga que não conhece o serviço.
EX: entrada Google drive
O algoritmo imprime
     Palavra valida

Utilize o método startsWith()  */
var rs = require('readline-sync')
var senha = 'google'

console.log("//////////////// GOOGLE WORDS ////////////////")
var palavra = (rs.question('Digite o nome de um servico Google: ')).toLowerCase()

if (palavra.startsWith(senha)){
     console.log('Palavra Valida! :)')
}else{
     console.log('Nao conheco esse servico. :(')
}