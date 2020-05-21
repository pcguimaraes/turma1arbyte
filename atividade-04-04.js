/* Escreva um programa ue calcule a soma de todos os múltiplos de 3 e 5 entre 1 e 1000 */
var inicio = 1
var fim = 1000
var mult3 = 3
var mult5 = 5
var i = inicio
var soma = 0

while(i < (fim + 1)){
    if(i % mult3 === 0 || i % mult5 === 0){
    (soma = (soma + i))
    }
    i++
}

console.log(`Aqui esta a soma de todos os múltiplos de ${mult3} e ${mult5} entre ${inicio} e ${fim}:`)
console.log(soma)