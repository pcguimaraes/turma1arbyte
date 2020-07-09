/* 5. Faça um algoritmo que receba a data nascimento de uma pessoa e calcule sua idade.
Utilize o pacote : https://www.npmjs.com/package/age-calculator */

const rs = require('readline-sync')
const anoAtual = 2020
var {AgeFromDate, AgeFromDateString} = require('age-calculator')

console.log('Preencha sua data de nascimento.')
var ano = anoAtual+1
while(ano > anoAtual){
    ano = rs.questionInt('Digite o ano: ')
}

var mes = 13
while(mes < 1 || mes > 12){
    mes = rs.questionInt('Agora o numero do mes: ')
}

var dia = 32
while(dia < 1 || dia > 31){
    dia = rs.questionInt('Agora o dia: ')
}

var AgeFromString = new AgeFromDateString(`${ano}-${mes}-${dia}`).age

console.log(`Data de nascimento: ${dia}/${mes}/${ano}`)
console.log('Idade: ', AgeFromString, ' anos.') 