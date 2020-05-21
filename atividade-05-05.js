/** 05. Fazer um programa que calcule e imprima o fatorial de um número fornecio pelo usuário,
 * usano o comando For. Perguntar ao usuário se ele deseja calcular o fatorial de outro número
 * e repetir a execução do progrma tantas vezes quantas o usuário indicar.
 */
console.log('CALCULADORA DE FATORIAL')
var rs = require('readline-sync')
var fim = 1
var result = 1
var fatora = true

for(;fatora;){
    var numero = rs.questionInt('Digite um numero para calcular seu fatorial: ')
    for(i=numero;i>fim;i--){
        result = (result * i)
        console.log(`${result} * ${i} = ${result * i}`)
    }
    fatora = rs.keyInYN(`${numero}! = ${result}\nDeseja calcular o fatrial de ouro numero? `)
    result = 1
}