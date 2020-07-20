/* Criar um algoritmo que receba 2 carros e verifique se os carros são iguais
Para isso :
Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e
inicialize as propriedades com estes valores.
Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e
cor.
Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo
e cor.
Ao final o algoritmo deve comparar se os carro são iguais.
Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor.*/
const rs = require('readline-sync')
const modCarro = require('carro')
class Carro {
    constructor(nome, modelo, cor){
        this.nome = nome
        this.modelo = modelo
        this.cor = cor
    }
}
var carros = []
var quantidadeCarros = 2
for(i=0;i<quantidadeCarros;i++){
    console.log(`///// CADASTRAR ${i+1}o CARRO:`)
    var nome = rs.question('Nome: ')
    var modelo = rs.question('Modelo: ')
    var cor = rs.question('Cor: ')
    carros.push(new Carro(nome, modelo, cor))
}

if(carros[0].nome == carros[1].nome && carros[0].modelo == carros[1].modelo){
    console.log('Carros iguais!')
}else{
    console.log('Carros diferentes!')
}
