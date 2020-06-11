/**03. (LEFT JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso
 * peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o jogador B. 
 * Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números que apenas o jogador A colocou
 * diferente do B.
 */

var rs = require('readline-sync')
var nomeA
var nomeB
var numerosA = []
var numerosB = []
var numerosI = []
var qtdeNumeros = 5
var numMin = 1
var numMax = 10
var digitaNum

nomeA = rs.question('JOGADOR A, digite o seu nome: ')
for(i = 0; i < qtdeNumeros; i++){
    digitaNum = rs.questionInt(nomeA + ', digite um numero entre 1 e 10: ', {hideEchoBack: true})
    while(digitaNum < numMin || digitaNum > numMax){
        digitaNum = rs.questionInt('ERRO! ' + nomeA + ', digite um numero entre 1 e 10: ', {hideEchoBack: true})
    }
    numerosA[i] = digitaNum
}

nomeB = rs.question('JOGADOR B, digite o seu nome: ')
for(i = 0; i < qtdeNumeros; i++){
    digitaNum = rs.questionInt(nomeB + ', digite um numero entre 1 e 10: ', {hideEchoBack: true})
    while(digitaNum < numMin || digitaNum > numMax){
        digitaNum = rs.questionInt('ERRO! ' + nomeB + ', digite um numero entre 1 e 10: ', {hideEchoBack: true})
    }
    numerosB[i] = digitaNum
}

for(i=0;i<numerosA.length;i++){
    var numeroE = false
    for(j=0;j<numerosB.length;j++){
        if(numerosA[i] == numerosB[j]){
            numeroE = true
            break
        }
    }
    if(!(numeroE)){
        numerosI.push(numerosA[i])
    }
}

console.log('Numeros diferentes que o ' + nomeA + ' jogou: ' + numerosI)