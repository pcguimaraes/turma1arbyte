/* 02. Faça uma função que recebe por parâmetro um valor inteiro e positivo
    e retorna o valor lógico Verdadeiro caso o valor seja primo e Falso em caso contrário.
    Solicite ao usuário o número e no final imprima se é primo ou não utilizano a função
    na condição if */

console.log('///////////////// NUMERO PRIMO /////////////////')
var readlineSync = require('readline-sync')
var numero = readlineSync.questionInt('Digite o numero: ')
var dois = 2
var primo = false

function ehPrimo(numero){
    if(!(numero %  dois)){
        if(numero == dois){
            return(primo = true)
        }
    }else{
        primo = true
        for(i=dois;i<numero;i++){
            if(numero % i == 0){
                primo = false
                break
            }
        }      
    }
}

ehPrimo(numero)

if(primo){
    console.log(`O numero ${numero} eh primo!`)
}else{
    console.log(`O numero ${numero} NAO eh primo!`)
}

