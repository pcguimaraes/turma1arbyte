/** 05. Crie um programa que peça ao usuário n números e,
 *  uando u suário digitar -1, imrima o maior e o menor,
 *  sem levar em consideração o -1
 */
var rs = require('readline-sync')
var maior
var menor
var sair = -1
var numeroDigita = rs.questionInt(`Digite ${sair} para sair ou qualuer outro numero para continuar: `)

if(numeroDigita == sair){
    console.log('PROGRAMA ENCERRADO!\nVc saiu antes de digitar qualquer numero.')
}else{
    menor = numeroDigita
    maior = numeroDigita

    while(numeroDigita != sair){
        numeroDigita = rs.questionInt(`Digite ${sair} para sair ou qualuer outro numero para continuar: `)
        if(numeroDigita != sair){

            //IF MAIOR
            if(numeroDigita > maior){maior = numeroDigita}
            //IF MENOR
            if(numeroDigita < menor){menor = numeroDigita}
        }
    }

        console.log('O maior numero que vc digitou foi ' + maior)
        console.log('O menor numero que vc digitou foi ' + menor)
}
