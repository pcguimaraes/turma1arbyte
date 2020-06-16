/* 5. Escreva uma função que recebe dois parâmetros numéricos e retorne o menor número.
Solicite dois números para o usuário e forneça como argumento para esta função.
Escreva o resultado da função na tela dizendo qual menor número.
*/
var rs = require('readline-sync')
var n1 = rs.question('Digite o valor do numero 1: ')
var n2 = rs.question('Digite o valor do numero 2: ')

function valorMaior(n1, n2){
    if(n1 == n2){
        console.log('numeros iguais!')
    }else if(n1 > n2){
        console.log(`O numero ${n1} eh maior!`)
    }else{
        maior = n2
        console.log(`O numero ${n2} eh maior!`)
    }
}

valorMaior(n1,n2)