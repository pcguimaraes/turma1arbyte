/* 6. Faça um programa que crie um carro solicitando nome e cor, após isso o usuário vai ser
solicitado 3 opções
a. Acelerar
i. O algoritmo deve chamar a função Acelerar do módulo Carro
ii. Após isso imprimir a velocidade atual
b. Freiar
i. O algoritmo deve chamar a função Frear do módulo Carro
*/
var rs = require('readline-sync')
var modCarro = require('carro')
var nome = 'nome'
var cor = 'cor'

carro = {
    modCarro.carro(nome, cor)
}
/*

ii. Após isso imprimir a velocidade atual
c. Desligar
i. Caso o usuário Escolha Desligar o algoritmo deve chamar a função
Desligar do módulo Carro
ii. Caso a função responda true o programa fecha
iii. Caso a função responda false o programa diz que não é possível desligar
um carro em movimento.

Caso o usuário escolha uma opção que não existe o algoritmo simplesmente diz que
não entendeu e solicita de novo as 3 opções.
Caso o usuário escolha uma opção válida o programa após imprimir o valor da
velocidade deve novamente repetir a escolha das 3 opções para o usuário.
Para isso no módulo Carro (carro.js que criamos na atividade 5) no construtor adicione
uma propriedade no objeto chamada velocidade e inicie o valor dela com 0
Adicione também 3 funções
d. Acelerar
i. Toda vida que esta função for executada deve incrementar o valor da
propriedade velocidade em 10
ii. A função não pode permitir que uma velocidade seja superior a 60
e. Frear
i. Toda vida que esta função for executada deve diminuir o valor da
propriedade da velocidade em 5
ii. A função não pode permitir que a velocidade seja menor que 0
f. Desligar
i. Esta função deve retornar um boolean
ii. Desligar só retorna true quando a velocidade for igual a 0
iii. Desligar retorna false quando a velocidade for superior a 0 */