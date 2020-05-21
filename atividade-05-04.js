/** 04. Ler o nome de um aluno e duas notas A e B, e após calcular a méia ponderada entre estas notas
 * (A tem 30% o peso do grau final e B tem 70%). Repetir este rocedimento para uma turma composta
 * por cinco alunos, suando o comando For.5
 */
var rs = require('readline-sync')
var nome
var notaA
var notaB
var media
var pesoA = 3
var pesoB = 7
var pesoT = (pesoA + pesoB)
var alunos = 5

for(i=0;i<alunos;i++){
    nome = rs.question(`Digite o nome do ${i+1}o aluno: `)
    notaA = rs.questionFloat(`Digite o grau A do ${i+1}o aluno: `)
    notaB = rs.questionFloat(`Digite o grau B do ${i+1}o aluno: `)
    media = (((notaA * pesoA) + (notaB * pesoB))/pesoT)
    console.log(`O aluno ${nome} tem uma media de ${media}.`)
}

