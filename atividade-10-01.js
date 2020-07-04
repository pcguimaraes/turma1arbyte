/* Atividade‌ ‌Objects‌ ‌(Lista‌ ‌8)‌
1.(OBRIGATÓRIO)‌ ‌‌Crie‌ ‌um‌ ‌programa‌ ‌que‌ ‌receba‌ ‌3‌ ‌entradas‌ ‌do‌ ‌usuário.‌ ‌A‌ ‌cor,‌ ‌o‌ ‌modelo‌ ‌
e‌ ‌a‌ ‌marca,‌ ‌crie‌ ‌um‌ ‌objeto‌ ‌Carro‌ ‌e‌ ‌atribua‌ ‌as‌ ‌entradas‌ ‌do‌ ‌usuário‌ ‌neste‌ ‌objeto.‌ ‌
No‌ ‌final‌ ‌o‌ ‌programa‌ ‌deve‌ ‌imprimir‌ ‌as‌ ‌informações‌ ‌do‌ ‌carro.‌ ‌
Utilize‌ ‌a‌ ‌criação‌ ‌de‌ ‌objetos‌ ‌para‌ ‌resolver‌ ‌este‌ ‌problema‌.
 ‌*/
 var rs = require('readline-sync')
 var carros = []
 var carrosQuantidade = 3
 var cor
 var modelo
 var marca
class Carro{
    constructor(cor, modelo, marca){
        this.cor = cor
        this.modelo = modelo
        this.marca = marca
    }
}

console.log('/////////////////// TRES CARROS ///////////////////')

for(i=1;i<=carrosQuantidade;i++){
    console.log(`Digite as informações do ${i}o carro.`)
    cor = rs.question('Cor: ')
    modelo = rs.question('Modelo: ')
    marca = rs.question('Marca: ')
    var carro = new Carro(cor, modelo, marca)
    carros.push(carro)
}

console.log(`\nMuito bem! voce cadastrou ${carros.length} carros!`)
for(i=0;i<carrosQuantidade;i++){
    console.log(`Um ${carros[i].modelo} ${carros[i].cor} da marca ${carros[i].marca}`)
}