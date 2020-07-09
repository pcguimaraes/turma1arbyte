/* 3. Criar um módulo que calcule a média de uma coleção de números.
Para isso crie um arquivo chamado calcula-media.js.
No módulo exporte uma função media(arr) que recebe como argumento um array de
números.
A função deve iterar por esses números e retornar sua média.
Após isso no arquivo da atividade importe o módulo criado e solicite ao usuário 3
números, utilize o módulo criado para calcular a média e no final imprima o resultado
para o usuário.
4. Criar uma função que receba uma coleção de alunos e calcule a média de idade
Adicione uma nova função no arquivo calcula-media.js chamada
calculaMediaIdadeAluno(alunos).
A função deve receber um array da mesma classe dos alunos criada na atividade 2.

Após isso a função deve iterar pelos alunos e calcular a média de idade e retornar ela.
Adicione essa função para ser exportado pelo módulo.
Adicione no final do programa da atividade 2 após informar o nome dos alunos com
maior idade também imprimir a média de idade dos alunos utilizando o método
calculaMediaIdadeAluno(alunos)

5. Pegue o objeto carro da atividade 1 e exporte ele como um objeto módulo
Exemplo slide PPT :

Para isso crie um arquivo chamado carro.js e adicione a classe criada na atividade 1
neste arquivo.
Adapte a atividade 1 para usar a referencia por módulo da classe Carro.
6. Faça um programa que crie um carro solicitando nome e cor, após isso o usuário vai ser
solicitado 3 opções
a. Acelerar
i. O algoritmo deve chamar a função Acelerar do módulo Carro
ii. Após isso imprimir a velocidade atual
b. Freiar
i. O algoritmo deve chamar a função Frear do módulo Carro

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