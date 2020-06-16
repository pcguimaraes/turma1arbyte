/*6. Escreva uma função que receba dois números o primeiro será a base e o segundo a
potência e no final a função retorna a base elevada pela potência.
Faça um programa que peça ao usuário a base e a potência e forneça para a função,
no final imprima o resultado.
OBS: O algoritmo só precisa saber lidar com números inteiros.
*/
var rs = require('readline-sync')
var n1 = rs.questionInt('Digite o numero da base: ')
var n2 = rs.questionInt('Digite o numero da potencia: ')

function potencia(n1, n2){
    console.log(n1 ** n2)
}

potencia(n1,n2)