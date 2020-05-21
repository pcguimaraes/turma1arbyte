/**Escreva um programa que simule uma partida de pedra, papel e tesoura.
 * Deve ser solicitado o nome do Jogador A e do Jogador B.
 * Após isso o programa deve pedir a jogada do jogador A e a joagada do Jogador B.
 * Dicas:
 * Papel ganha de Pedra
 * Tesoura ganha de papel
 * Pedra ganha de Tesoura
 */
var rs = require('readline-sync')
var nomeA = rs.question('JOGADOR A Digite seu nome: ')
var nomeB = rs.question('JOGADOR B Digite seu nome: ')
var papel = 1
var pedra = 2
var tesoura = 3
var jogo = true
var jogoA
var jogoB

while(jogo){
    jogoA = rs.questionInt(`Escolha uma das opcoes, ${nomeA}:\n[1] Papel\n[2] Pedra\n[3] Tesoura\n`, {hideEchoBack: true})
    jogoB = rs.questionInt(`Escolha uma das opcoes, ${nomeB}:\n[1] Papel\n[2] Pedra\n[3] Tesoura\n`, {hideEchoBack: true})
    if(jogoA == papel){
        if(jogoB == papel){console.log('Deu empate!')}
        else if(jogoB == pedra)  {console.log(nomeA + ' venceu!')}
        else if(jogoB == tesoura){console.log(nomeB + ' venceu!')}
        else{console.log(`A jogada do ${nomeB} eh ivalida!`)}
    }
    else if(jogoA == pedra){
        if(jogoB == papel){console.log(nomeB + ' venceu!')}
        else if(jogoB == pedra){console.log('Deu empate')}
        else if(jogoB == tesoura){console.log(nomeA + ' venceu!')}
        else{console.log(`A jogada do ${nomeB} eh ivalida!`)}
    }
    else if(jogoA == tesoura){
        if(jogoB == papel){console.log(nomeA + ' venceu!')}
        else if(jogoB == pedra){console.log(nomeB + ' venceu')}
        else if(jogoB == tesoura){console.log('Deu empate')}
        else{console.log(`A jogada do ${nomeB} eh ivalida!`)}
    }
    else{
        console.log(`A jogada do ${nomeA} eh ivalida!`)
    }

jogo = rs.keyInYN('Desejam jogar novamente? ')
}
console.log('Obrigado!')