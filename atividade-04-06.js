/** 06. Crie um programa que peça ao usuário o nome e a idade de n pessoas e os imprima (1 de cada vez)
 * O programa deve ser interrompido quando o usuário digitar o nome "Final".
 * No final, o programa deve imprimir quantos usuários foram cadastrados.
 */
var rs = require('readline-sync')
var nome
var idade
var final = "final"
var i = 0

while (true) {
    nome  = rs.question('Digite o nome: ').toLowerCase()
    if(nome == final){break}
    idade = rs.questionInt('Digite a idade: ')
    console.log(`Novo cadastro: ${nome.toUpperCase}, ${idade} anos\n`)
    i++
}

console.log('Total de ' + i + ' usuarios cadastrados.')