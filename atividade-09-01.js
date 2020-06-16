/* 01. Faça uma função que recebe por parâmetro o raio de uma esfera
    e calcule o seu volume (v = 4/3.pi.R³)
    Então solicite ao usuário o raio e a esfera e utilize a função
    para exibir o resultado. */


function volumeEsfera(raio){
    pi = 3.14159
    volume = ((4/3)*pi*(raio**3))
    return volume
}

var readlineSync = require('readline-sync')
var raio = readlineSync.question('Digite o raio da esfera: ')
console.log('O volume a esfera eh', volumeEsfera(raio))