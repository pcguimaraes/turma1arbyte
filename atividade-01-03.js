/* 3. (OBRIGATÓRIO) Escreva um programa que verifique a validade de uma senha
fornecida pelo usuário.
A senha válida é o número 1234.
Devem ser impressas as seguintes mensagens:
- ACESSO PERMITIDO caso a senha seja válida.
- ACESSO NEGADO caso a senha seja inválida */
var rs = require('readline-sync')
var senhaOK = '1234'
var senha = rs.question('Digite a senha correta: ')

if(senha == senhaOK){
    console.log('ACESSO PERMITIDO XD')
}else{
    console.log('ACESSO NEGADO >.<')
}