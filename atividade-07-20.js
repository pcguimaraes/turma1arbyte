/* Faça um algoritmo que pergunta para o usuário se ele quer criptografar ou
descriptografar.
Utilize como criptografia a cifra de césar
Exemplo ->
Entrada : ARBYTE
SAIDA: DUEBWH
Caso o usuario opte por criptografar o algoritmo deve aplicar a cifra de césar e mostrar
o valor criptografado
Caso o usuário opte por descriptografar o algoritmo deve fazer a engenharia reversa e
retorna ao valor antes de criptografia.
Utilize todo o conhecimento até aqui pra desenvolver este algoritmo */

var rs = require('readline-sync')
console.log('/////////////// CRIPTOGRAFIA ///////////////')
var entrada = 0
var criptofia = [1, 2]
var palavraDescriptografada
var palavraCriptografada
var indiceC = 0
var cesar = 3
var alfabetoAZ = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C']
var alfabetoDC = ['Z','Y','X','W','V','U','T','S','R','Q','P','O','N','M','L','K','J','I','H','G','F','E','D','C','B','A','Z','Y','X']

while(entrada < criptofia[0] || entrada > criptofia[1]){
    entrada = rs.questionInt('Digite 1 para criptografar ou 2 para desptografar: ')
}

var palavra = rs.question('Digite a palavra: ')

if(entrada == criptofia[0]){
    palavra = palavra.toUpperCase()
    palavraDescriptografada = palavra.split('')
    palavraCriptografada = []
    for(i=0;i<palavraDescriptografada.length;i++){
            indiceC = alfabetoAZ.indexOf(palavraDescriptografada[i])
            indiceC = indiceC + cesar
            palavraCriptografada.push(alfabetoAZ[indiceC])
    }
    palavraCriptografada = (palavraCriptografada.join(''))
    console.log('Palavra Criptografada: ', palavraCriptografada)
}

if(entrada == criptofia[1]){
    palavra = palavra.toUpperCase()
    palavraCriptografada = palavra.split('')
    palavraDescriptografada = []
    for(i=0;i<palavraCriptografada.length;i++){
            indiceC = alfabetoDC.indexOf(palavraCriptografada[i])
            indiceC = indiceC + cesar
            palavraDescriptografada.push(alfabetoDC[indiceC])
    }
    palavraDescriptografada = (palavraDescriptografada.join(''))
    console.log('Palavra Descriptografada: ', palavraDescriptografada)
}