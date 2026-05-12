// Listas (Arrays) em JavaScript
const listaCompras = ["Tomate", "Cebola", "Alface"] // Lista de compras com 4 itens
const Misturado = ["Banana", 1, true]

console.log(listaCompras[0]) // Tomate

listaCompras[0] = "Abacaxi" // Altera o primeiro item da lista
listaCompras[3] = "Pimentão" // Adiciona um item na posição 3 (quarta posição) da lista

listaCompras.push("Melancia") // Adiciona um item no final da lista

console.log(listaCompras)
console.log(listaCompras.length) // Imprime o tamanho da lista
let pop = listaCompras.pop() // Remove o último item da lista e retorna ele
console.log(pop) // Melancia
console.log(listaCompras) // Imprime a lista atualizada

listaCompras.push("Amora") // Adiciona um item no final da lista

//laço de repetição para percorrer a lista
//for(começo. quando termina; acréscimo)

for(let i = 0; i < listaCompras.length; i++) {
    console.log("-------------") // Imprime uma linha de separação entre os itens
    console.log(listaCompras[i]) // Imprime cada item da lista enquanto o índice i for menor que 4 que é o  numero de itens da lista. O i vai assumindo o valor de 0, 1, 2 e 3 e quando chega em 4 ele faz o laço. O ideal é usar o tamanho da lista

}

for(let i = listaCompras.length -1; i>= 0; i--) {
    console.log(`Index ${i}: ${listaCompras[i]}`)
}

// Imprime a lista de trás para frente, começando do último item (índice 3) até o primeiro item (índice 0)

for(let item of listaCompras) {
    console.log(item)
}

console.log(listaCompras.indexOf("Cebola")) // Imprime o índice do item "Cebola" na lista, que é 1. Se o item não estiver presente, retorna -1.

let x = 0
while(x < 10) {
    console.log(x)
    x++
}
