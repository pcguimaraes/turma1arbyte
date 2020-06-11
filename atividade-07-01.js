/* 01. Faça um algoritmo em que o usuário possa cadastrar preços de produtos e no final
    exiba o preço de cada produto junto com o valor total. após inserir todos os produtos o
    programa deve pedir o valor a ser pago, caso o valor passe da compra exibir o troco,
    se o valor for menor informar ue a compra vai ser cancelada.*/

    var rs = require('readline-sync')
    var precoUnit = []
    var precoTotal = 0
    var totalPago = 0
    var sair = false

    
for(i=0;!sair;i++){
    precoUnit[i] = rs.questionFloat(`Insira o valor do prouto N${i+1} ou [0] para sair: `)
    precoTotal += precoUnit[i]
    if(precoUnit[i] == 0){sair = true}
}
precoUnit.pop()
console.log('----------------------------------')

for(i = 0; i < precoUnit.length; i++){
    console.log(`PROUTO ${i+1}: R$${precoUnit[i].toFixed(2)}`)
}
console.log(`TOTAL A SER PAGO: R$${precoTotal.toFixed(2)}`)

var totalPago = rs.questionFloat(`INSIRA O DINHEIRO:R$`)
var troco = (totalPago - precoTotal)

if(totalPago > precoTotal){
    console.log(`TROCO: R$${troco.toFixed(2)}`)
}else if(totalPago == precoTotal){
    console.log(`COMPRA PAGA!`)
}else{
    console.log(`SALDO INSUFICIENTE, \n COMPRA CANCELADA!`)
}

    