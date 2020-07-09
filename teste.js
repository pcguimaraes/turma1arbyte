const clientes = ["José Silva", "Tiago Ribeiro", "Helena Souza", "Ana Cruz"];
 
function 
primeiroNome
 (nome) {
  const nomeSeparado = 
nome.slice
(" ");
  return nomeSeparado[0];
}
 
const nomesClientes = 
clientes.forEach
(primeiroNome);
 
console.log(nomesClientes);