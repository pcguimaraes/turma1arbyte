/** 03. Faça um programa que escreva na tela os numeros pares entre 0 e 50, usando um comando For.
 * Não utilize nenhum IF / THEN neste programa, apenas o comando For-Do.
 */
var inicio = 0
var fim = 50
var par = 2

console.log(`Números pares entre ${inicio} e ${fim}:`)

for(i=inicio;((i <= fim) && !(i%par));i=(i+par)){
    console.log(i)
}