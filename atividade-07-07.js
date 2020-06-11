/* Crie um programa que receba uma palavra e exiba quantas vogais e consoantes essa palavra tem
*/
var rs = require('readline-sync')
var palavraString
var palavraArray = []
var vogais = 0
var consoantes = 0

console.log("//////////////// VOGAIS E CONSOANTES ////////////////")
palavraString = rs.question("Digite a palavra: ")
palavraArray = palavraString.toLowerCase().split('')

for(i=0;i<palavraArray.length;i++){
    if(palavraArray[i] == "a" || palavraArray[i] == "e" || palavraArray[i] == "i" || palavraArray[i] == "o" || palavraArray[i] == "u"){
        vogais++
    }else{
        consoantes++
    }
}

console.log(`Palavra: ${palavraString}`)
console.log(`Vogais: ${vogais}`)
console.log(`Consoantes: ${consoantes}`)