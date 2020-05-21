/** 01. Faça um algoritmo que receba uma entrada do usuário e caso encontre letra "a"
 * transforme ela em maiúscula. Ex: AbelhA
 */
var rs = require('readline-sync')
var palavra = rs.question('Digite uma frase ou uma palavra: ')
var trocaA = "a"
var palavraA = ""
var i = 0

while(i < (palavra.length)){
    if(palavra.charAt(i) == trocaA){
        palavraA = (palavraA + palavra.charAt(i).toUpperCase())
    }else{
        palavraA = (palavraA + palavra.charAt(i))
    }
    i++
}

console.log(palavraA)
