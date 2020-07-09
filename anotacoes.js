const data = new Date()
data.getDate()

// forEach(): executando uma função para cada elemento de um array.
cores = ["Verde", "Amarelo", "Azul", "Branco"];
function imprimir(item) {
    console.log(item); 
}
cores.forEach(imprimir);

// filter():  filtrar em um Array apenas os resultados que cumpram com determinada condição esperada.
const listaCarros = [
    { id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 18.000 },
    { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 12.000 },
    { id: 3, modelo: 'Gol', marca: 'Volkswagen', preco: 14.000 },
    { id: 4, modelo: 'Saveiro', marca: 'Volkswagen', preco: 20.000 },
    { id: 5, modelo: 'Uno', marca: 'Fiat', preco: 12.000 },
    { id: 6, modelo: 'Onix', marca: 'Chevrolet', preco: 25.000 },
    { id: 7, modelo: 'Palio', marca: 'Fiat', preco: 13.000 },
    { id: 8, modelo: 'Prisma', marca: 'Chevrolet', preco: 15.000 },
    { id: 9, modelo: 'Logan', marca: 'Renault', preco: 15.000 }
  ]
   
  const carroFiltrado = listaCarros.filter(carro => carro.marca === 'Volkswagen')
   
  console.log(carroFiltrado)

// map(): aplica a condição à cà cada item doarray.
const lista = [ 1, 5, 8, 4 ]
const resultado = lista.map(item => item * 5)

console.log(resultado)

// reduce(): permite concatenar os elementos do Array a partir de seus elementos.

const sum = listaCarros.reduce((previous, current) => previous + current.preco, 0)
   
  console.log(sum)
// includes(): verifica se um Array possuí determinado elemento e retorna um booleano.
const items = [ 10, 20, 30 ]
   
  console.log(
    items.includes(10), // true
    items.includes(50), // false
    items.includes(20), // true
  )
  