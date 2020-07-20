/* 2. Crie um algoritmo que cadastre 3 alunos e diga qual possui a maior idade, se mais de
um possuir maior idade apresentar o nome de todos os que possuem maior idade.
Para isso crie uma classe Aluno que receba duas variáveis no construtor nome e idade
e inicialize essas variáveis nas propriedades do objeto.
Após isso peça para o usuário cadastrar o primeiro aluno e solicite nome e idade.
Crie o objeto do aluno e adicione em um array.
Repita esse passo para os outros alunos.
Ao final o algoritmo deve iterar pelo array de alunos e descobrir quais são os alunos
com maior idade e imprimir seus nomes.*/
const rs = require('readline-sync')
const cm = require('calcula-media')
class Aluno{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}
var aluno
var alunos = []
var maxAlunos = 3
var maiorIdade = 18

console.log('Cadastro de alunos')
for(i=1;i<=maxAlunos;i++){
    console.log(`aluno ${i}`)
    nome = rs.question('Nome: ')
    idade = rs.questionInt('Idade: ')
    aluno = new Aluno(nome, idade)
    alunos.push(aluno)    
}

qtdeAlunosMaiores = []
for(i=0;i<alunos.length;i++){
    if(alunos[i].idade>=maiorIdade){
        qtdeAlunosMaiores.push(alunos[i].nome)
    }
}

if(qtdeAlunosMaiores.length > 1){
    console.log('Alunos com maioridade:')
    for(i=0;i<qtdeAlunosMaiores.length;i++){
        console.log(qtdeAlunosMaiores[i])
    }
}

console.log('Media de idade dos alunos: ', cm.calculaMediaIdadeAluno(alunos))