/** Escreva um programa que apresente quatro opções:
 * (a) consulta saldo, (b) saque, (c) depósito e (d) sair.
 * O saldo deve iniciar com R$0,00.
 * A cada saque ou depósito o valor do saldo deve ser atualizado.
 */
var rs = require('readline-sync')
var opcao
var saldo = 0
var consulta = 'a'
var saque = 'b'
var deposito = 'c'
var sair = 'd'

console.log('BEM VINDO AO SISTEMA BANCARIO ARBYTE!')
while(opcao != sair){
    opcao = rs.question('Opcoes:\n(a) consulta saldo\n(b) saque\n(c) deposito\n(d) sair.\n> ').toLowerCase()

    if(opcao == consulta){
        console.log(`\n     Saldo disponive: R$${saldo}`)
        
    }else if(opcao == saque){
        var valorSaque = rs.questionFloat('\n     Valor para sacar: ')
        if(valorSaque > saldo){
            console.log('ERRO! voce nao tem limite para realizar esse saque.\n')
        }else{
            saldo = (saldo - valorSaque)
        }

    }else if(opcao == deposito){
        saldo = (saldo + rs.questionFloat('\n     Valor para depositar: '))
    }else if(opcao == sair){
        console.log('Obrigado!')
    }else{
        console.log('Comando Invalio!')
    }



}

