/*
8. Faça uma função que receba um número e retorne se é perfeito ou não.
Após isso solicite ao usuário para inserir um número e imprimir se é perfeito ou não
utilizando a função e imprimindo o resultado no final.
OBS: Um número perfeito é aquele que a soma do seus divisores (auto excluindo) é
igual a ele mesmo
Exemplo 6 possui os seguintes divisores
1 + 2 + 3 = 6 */
var rs = require('readline-sync')
var n1 = rs.questionFloat('Digite um numero para saber se ele eh perfeito: ')
var divisores = []
var resutado = 0

function numeroPerfeito(n1){
    for(i=1;i<n1;i++){
        if(n1 % i == 0){
            divisores.push(i)
        }
    }

    for(i=0;i<divisores.length;i++){
        resutado += divisores[i]
    }

    if(resutado == n1){
        console.log('perfeito')
    }else{
        console.log('nao eh perfeito')
    }
}  
numeroPerfeito(n1)