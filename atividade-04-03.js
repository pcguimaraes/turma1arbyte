/* Escreva um programa javascript para escrever o seguinte padrão na ela, com N linhas:
    *
    **
    ***
    ****
    *****
    (N é o número de linhas determinado pelo usuário, ex: n=5)
*/
var rs = require('readline-sync')
var numero = rs.questionInt('Digite o numero de linhas: ')
var asteristicos = ""
var iAsteristicos = 0
var iLinhas = 1

while(iLinhas <= numero){
    while(iAsteristicos < iLinhas){
        asteristicos = (asteristicos + '*')
        iAsteristicos++
    }
    console.log(asteristicos)
    iLinhas++
}

