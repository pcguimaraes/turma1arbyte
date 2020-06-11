/* 02. (INNER JOIN) Faça um algoritmo que receba o nome e dois jogadores e após isso
    peça 5 números de 1 a 10 para cada jogaor. Primeiro para o jogador A e depois
    para o jogaor B.
    Após a escolha de cada jogador o algoritmo deve apresentar quais foram os
    números iguais que o jogador A e B colocaram.
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
        for(j=0;j<numerosA.length;j++){
            if(numerosA[i] == numerosB[j]){numerosI.push(numerosA[i])}
        }
}

console.log('Numeros iguais: ' + numerosI)