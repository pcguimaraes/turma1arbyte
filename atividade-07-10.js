/**Faça um programa que receba uma palavra e verifica se ela
 * termina com “al”
 * se termina com “al” então imprime a palavra se não imprime “palavra não identificada”.
 * Utilize o método endsWith()
 */

 var rs = require('readline-sync')
 var termina = 'al'

 console.log("//////////////// PALAVRAS TERMINADAS EM 'AL' ////////////////")
 var palavra = (rs.question('Digite uma palavra que termine em AL: ')).toLowerCase()

 if(palavra.endsWith(termina)){
     console.log(palavra)
 }else{
     console.log('Palavra nao identificada')
 }
