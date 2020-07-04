 /* 2.(OBRIGATÓRIO)‌Adicione‌ ‌no‌ ‌programa‌ ‌anterior,‌ ‌após‌ ‌a‌ ‌impressão‌ ‌dos‌ ‌dados,‌ ‌a‌ ‌
funcionalidade‌ ‌de‌ ‌salvar‌ ‌o‌ ‌objeto‌ ‌carro‌ ‌em‌ ‌formato‌ ‌JSON.‌ ‌ ‌
Utilize‌ ‌o‌ ‌JSON.stringify‌ ‌para‌ ‌transformar‌ ‌o‌ ‌objeto‌ ‌em‌ ‌string‌ ‌e‌ ‌após‌ ‌isso‌ ‌utilize‌ ‌os‌ ‌
métodos‌ ‌da‌ ‌biblioteca‌ ‌‘fs’‌ ‌para‌ ‌salvar‌ ‌o‌ ‌arquivo.‌ ‌
Salve‌ ‌o‌ ‌json‌ ‌como‌ ‌‘carro.json’‌ ‌*/
var rs = require('readline-sync')
var fs = require('fs')
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

var salvarJson = rs.keyInYN('Salvar carros em arquivo JSON?')
if(salvarJson){
    var serializado = JSON.stringify(carros)
    var caminhoDoArquivo = 'data/carro.json'
    fs.writeFileSync(caminhoDoArquivo, serializado)
    console.log('Carros salvos, obriado!')
}else{
    console.log('Tudo bem, ate mais. :)')
}