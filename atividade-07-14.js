/**14. Faça um programa que receba uma string,
 * o programa vai estar esperando uma data no formato dd/MM/yyyy onde :
dd -> dia
mm  -> mês
yyyy -> ano

Utilize o método match() para fazer essa validação, você deverá utilizar um expressão regular
para resolver este problema.
Caso a data esteja valida o algoritmo deve imprimir : 
Entrada -> 22/05/2020
O algoritmo imprime : 
Dia : 22
Mes : 05
Ano : 2020 */

var rs = require('readline-sync')
var dias = [1,31]
var meses = ['invalido', 'Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
var mesesMinMax = [1,12]
var invalido = 'invalido'
var exemplo = /^\d{1,2}\/\d{1,2}\/\d{4}$/
var data = rs.question('Digite uma data no formato dd/mm/aaaa: ')
var verificado = data.match(exemplo)

data = data.split('/')
dia = data[0]
mes = data[1]
ano = data[2]

if(mes[0] == 0){
    mes = mes[1]
}

if(!(verificado)){
    console.log('Formato Invalida! :(')
}else{

    if(dia < dias[0] || dia > dias[1]){
        dia = invalido
    }
    if(mes < mesesMinMax[0] || mes > mesesMinMax[1]){
        mes = invalido
    }else{
        mes = meses[mes]
    }
    console.log('Dia: ', dia)
    console.log('Mês: ', mes)
    console.log('Ano: ', ano)
}