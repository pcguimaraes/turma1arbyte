/* 3. Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna
essa idade expressa em dias.
Solicite a data ao usuário e o algoritmo imprime a quantidade de dias como resultado
utilizando a função criada.
*/
var rs = require('readline-sync')
var anosMesesDias = []
var qtde = [365, 30, 1]
var saidaDias

function conversorDeDias(anosMesesDias){
    saidaDias = (anosMesesDias[0] * qtde[0] + anosMesesDias[1] * qtde[1] + anosMesesDias[2] * qtde[2])
    console.log(`${anosMesesDias[0]} anos ${anosMesesDias[1]} meses e ${anosMesesDias[2]}\nTotal de dias: ${saidaDias}`)
}

anosMesesDias.push(rs.question('Digite os anos: '))
anosMesesDias.push(rs.question('Digite os meses: '))
anosMesesDias.push(rs.question('Digite os dias: '))

conversorDeDias(anosMesesDias)