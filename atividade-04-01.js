/* Escreva um programa que pedirá para o usuário dois números entre 1 e 100.
    O programa deverá iterar de um em um do menor para o maior, sempre imprimindo o numero.
    Caso o número seja divisível por 7, o programa imprime "Ping" ao invés do número.
    Caso o número seja divisível por 5, o programa imprime "Pong" ao invés do número.
    Caso seja divisível pelos dois, imprimir "Ping Pong" */
var rs = require('readline-sync')
var numero1 = 0
var numero2 = 0
var inicio  = 0
var fim     = 0
var ping = 7
var pong = 5


console.log('BEM-VINDO AO PROGRAMA PING PONG!')
while(numero1 < 1 || numero1 > 100){
    numero1 = rs.questionInt('Digite um numero entre 1 e 100: ')
}
while(numero2 < 1 || numero2 > 100){
    numero2 = rs.questionInt('Digite outro numero entre 1 e 100: ')
}

if(numero1 < numero2){
    inicio = numero1
    fim = numero2
}
else if(numero2 < numero1){
    inicio = numero2
    fim = numero1
}
else{console.log('Numeros iguais, assim nao da pra jogar. :(')}

while(inicio <= fim){
    if((inicio % ping === 0) && (inicio % pong === 0)){
        console.log('PING PONG')
    }
    else if(inicio % ping === 0){
        console.log('PING')
    }else if(inicio % pong === 0)
        console.log(`PONG`)
    else{
        console.log(inicio)
    }
    inicio++
}