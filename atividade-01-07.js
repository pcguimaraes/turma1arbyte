/* Escreva um programa para ler o numero de dados de um poligono retangular e a medida do lado (em cm).
Calcular e imprimir o seguinte:
- Se o numero de lados for igual a 3, escrever TRIANGULO e o valor da area
- Se o numero de lados for igual a 4, escrever QUADRADO e o valor da area
- Se o numero de lados for igual a 5, escrever PENTAGONO */
readlineSync = require('readline-sync')
var numeroLados = readlineSync.question('Digite o numero de lados do poligono: ')
var area = readlineSync.question('Digite a medida do lado (em cm.): ')

if(numeroLados == 3){
    area = ((area * area / 3)/4)
    console.log(`TRIANGULO | Valor da area: ${area}cm`)
}else if(numeroLados == 4){
    console.log(`QUADRADO | Valor da area: ${area * area}cm`)
}else if(numeroLados == 5){
    console.log(`PENTAGONO`)
}else{
    console.log(`Poligono nao encontrado`)
}