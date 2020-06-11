/* 15 Faça um algoritmo que receba uma palavra, após isso ele remove todas as vogais dessa palavra
e imprime a palavra novamente porém sem as vogais.
EX: Entrada banana
O algoritmo imprime : 
Bnn
 */
var rs = require('readline-sync')
var vogais = ['A', 'E', 'I', 'O', 'U']

console.log("//////////////// EXCLUINDO VOGAIS ////////////////")
var palavra = (rs.question('Digite uma palavra com vogais: ')).toUpperCase()

for(i=0;i<vogais.length;i++){
    while((palavra.indexOf(vogais[i])) != -1){
        palavra = palavra.replace(palavra[palavra.indexOf(vogais[i])],'')
    }
}

console.log(palavra)