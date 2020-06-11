/** 12. Faça um programa que receba uma palavra e diga se existe vogais ou não. 
Utilize o método indexOf() */
var rs = require('readline-sync')
var vogais = ['a','e','i','o','u']
var existeVogal = false
var verificaIndexOf = -1

console.log("//////////////// EXISTE VOGAIS ////////////////")
palavra = (rs.question('Digite uma palavra: ')).toLowerCase()

for(i=0;i<palavra.length;i++){
    if((vogais.indexOf(palavra[i])) > verificaIndexOf){
        existeVogal = true
    }
}

if(existeVogal){
    console.log(`SIM! existem vogais na palavra ${palavra}.`)
}else{
    console.log(`NAO! nao existem vogais na palavra ${palavra}.`)
}