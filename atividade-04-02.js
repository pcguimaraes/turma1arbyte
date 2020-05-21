/* Escreva um programa que passe por todos os numeros de 1 a 50 e para caa um deles
imprima na tela se o numero é par ou impar. Caso o numero também seja primo, o
prorama eve dizer ue ele é primo (numero ue so é divisível por ele mesmo e por 1).
Dica: neste exercício você pode precisar de ajuda do operador módulo (%). Você também pode precisar criar mais de um loop. */

var conta = 1
var ultimo = 50
var zero = 0
var par = 2
var nImpar = 5
var primo = "PRIMO"

while(conta <= ultimo){
    if(conta % par > zero){
        if(conta < nImpar){console.log(`${conta} IMPAR PRIMO`)}else{
            var p = (conta - 1)
            while(p > par){
                if(!(conta % p === 0)){
                    if(p==3){console.log(`${conta} IMPAR PRIMO`)}
                }else{
                    console.log(`${conta} IMPAR`)
                    break
                }
            p--
            }
        }
    }else{
        if(conta === par){console.log(`${conta} PAR PRIMO`)
        }else{console.log(`${conta} PAR`)}
    }
    conta++
}


