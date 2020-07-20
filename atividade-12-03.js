/* 3. Criar um módulo que calcule a média de uma coleção de números.
Para isso crie um arquivo chamado calcula-media.js.
No módulo exporte uma função media(arr) que recebe como argumento um array de
números.
A função deve iterar por esses números e retornar sua média.
Após isso no arquivo da atividade importe o módulo criado e solicite ao usuário 3
números, utilize o módulo criado para calcular a média e no final imprima o resultado
para o usuário.
*/
var rs = require('readline-sync')
var cm = require('calcula-media')
var nota
var arr = []
var maisUm = true
while(maisUm){
    nota = rs.questionFloat("Digite a nota ou '000' para sair: ")
    if(nota == 000){
        maisUm = false
    }else{
        arr.push(nota)
    }
}


console.log('A media dos numeros eh ', cm.media(arr))