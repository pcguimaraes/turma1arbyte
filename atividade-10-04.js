/* 4.Faça‌ ‌um‌ ‌programa‌ ‌que‌ ‌pergunte‌ ‌ao‌ ‌usuário‌ ‌se‌ ‌ele‌ ‌quer‌ ‌adicionar‌ ‌ou‌ ‌apenas‌ ‌exibir,‌ ‌
caso‌ ‌o‌ ‌usuário‌ ‌escolha‌ ‌adicionar,‌ ‌altere‌ ‌o‌ ‌programa‌ ‌inicial‌ ‌de‌ ‌cadastro‌ ‌de‌ ‌carro‌ ‌para‌ ‌
que‌ ‌não‌ ‌salve‌ ‌1‌ ‌objeto‌ ‌carro‌ ‌e‌ ‌sim‌ ‌uma‌ ‌coleção‌ ‌de‌ ‌carros‌ ‌(utilizando‌ ‌arrays,‌ ‌em‌ ‌vez‌ ‌de‌ ‌
serializar/deserializar‌ ‌o‌ ‌objeto‌ ‌será‌ ‌o‌ ‌array‌ ‌que‌ ‌possui‌ ‌os‌ ‌carros).‌ ‌ ‌
 ‌
Após‌ ‌cadastrar‌ ‌o‌ ‌carro‌ ‌o‌ ‌programa‌ ‌deve‌ ‌novamente‌ ‌solicitar‌ ‌o‌ ‌usuário‌ ‌se‌ ‌quer‌ ‌exibir‌ ‌ou‌ ‌
adicionar,‌ ‌caso‌ ‌o‌ ‌usuário‌ ‌escolha‌ ‌exibir‌ ‌deve‌ ‌ser‌ ‌exibido‌ ‌todos‌ ‌os‌ ‌carros‌ ‌cadastrados.‌ ‌ ‌ */
var rs = require('readline-sync')
var fs = require('fs')
var carros = []
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
var jsonSerializado = fs.readFileSync('data/carro.json')
carros = JSON.parse(jsonSerializado)

function menu(){
    var opcao = rs.questionInt('\n Digite 1 para exibir ou 2 para cadastrar (0 para encerrar): ')
    if(opcao == 0){
        console.log('Programa finalizado, obrigado!')
    }else if(opcao == 1){
        exibeCarros()
        menu()
    }else if(opcao == 2){
        cadastraCarro()
        menu()
    }else{
        console.log('Comando invalido, programa finalizado.')
    }
}

function exibeCarros(){
    var jsonSerializado = fs.readFileSync('data/carro.json')
    carros = JSON.parse(jsonSerializado)

    console.log(`\nForam encontrados ${carros.length} carros!`)
    for(i=0;i<carros.length;i++){
        console.log(`Carro ${i+1}: ${carros[i].modelo} na cor ${carros[i].cor} da marca ${carros[i].marca}`)
    }
}

function cadastraCarro(){
    console.log(`Digite as informações do carro.`)
    cor = rs.question('Cor: ')
    modelo = rs.question('Modelo: ')
    marca = rs.question('Marca: ')
    var carro = new Carro(cor, modelo, marca)
    carros.push(carro)
    salvaCarro(carros)
}

function salvaCarro(carros){
    var salvarJson = rs.keyInYN('Salvar carros em arquivo JSON?')
    if(salvarJson){
        var serializado = JSON.stringify(carros)
        var caminhoDoArquivo = 'data/carro.json'
        fs.writeFileSync(caminhoDoArquivo, serializado)
        console.log('Carro salvo!')
    }else{
        console.log('O carro nao foi salvo.')
    }
}

console.log('/////////////////// CADASTRA CARROS ///////////////////')
menu()