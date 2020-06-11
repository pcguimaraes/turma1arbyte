/** 11. Faça um programa que receba uma palavra e verifica
 * se a palavra está cometendo o seguinte erro de português
Antes de “p” ou “b” devemos usar M
Caso a palavra esteja errada informar o erro
Se não dizer que a palavra está certa. 
Utilize o método includes()
 */
var rs = require('readline-sync')
var mp = 'mp'
var mb = 'mb'
var np = 'np'
var nb = 'nb'
console.log("//////////////// CORRETOR P E B ////////////////")
var palavra = (rs.question('Digite a palavra: ')).toLowerCase()

if(palavra.includes(mp) || palavra.includes(mb)){
    console.log(`PARABNÉS!!!\nA palavra ${palavra} foi escrita corretamente!`)
}else if(palavra.includes(np) || palavra.includes(nb)){
    console.log(`QUE PENA! :(\nA palavra ${palavra} foi escrita corretamente!`)
}else{
    console.log(`Palavra nao identificada`)
}