/* 4. (OBRIGATÓRIO) As maçãs custam R$ 0,30 cada se forem compradas menos do que
12, e R$ 0,25 se forem compradas 12 ou mais. Escreva um programa que leia o número
de maçãs compradas, calcule e escreva o valor total da compra */
var rs = require('readline-sync')
var valorAtacado = 0.25
var valorVarejo = 0.30
var valorTotal
var quantidadeAtacao = 12
var quantidade = rs.questionInt('Numero de macas compradas: ')

console.log(`Vc comprou ${quantidade} macas.`)
if(quantidade < quantidadeAtacao){
    valorTotal = quantidade * valorVarejo
    console.log(`Valor de cada maca: R$${valorVarejo}`)
}
else{
    valorTotal = quantidade * valorAtacado
    console.log(`Valor de cada maca: R$${valorAtacado}`)
}

console.log(`Valor total R$${valorTotal}`)