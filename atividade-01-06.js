/* 6. Tendo como entrada a altura e o sexo codificado da seguinte forma:

Valor 1 para feminino
Valor 2 para masculino
de uma pessoa, construa um programa que calcule e imprima o valor de peso sugerido,
utilizando as seguintes fórmulas:
- para homens: (72.7 * Altura) – 58
- para mulheres: (62.1 * Altura) – 44.7 */

var rs = require('readline-sync')
var altura = rs.questionFloat('Digite a sua altura: ')
var sexo = rs.questionInt('Digite 1 para masculino e 2 para feminino: ')
var conta1 = ((72.7 * altura) - 58)
var conta2 = ((62.1 * altura) - 44.7)
var masculino = 1
var feminino = 2
var resultado = 0

if(sexo == masculino){
    resultado = conta1
}else if(sexo == feminino){
    resultado = conta2
}

if(sexo == masculino || sexo == feminino){
    console.log(`Peso ideal: ${resultado}`)
}else{
    console.log(`O numero ${sexo} nao corresponde a nenhum sexo.`)
}

