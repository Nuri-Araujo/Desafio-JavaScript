// A lista de produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado Exiba essa lista no console quando abrir o index.html.

const lista = ["Computador","Telefone", "Mouse", "Teclado"];
console.log(`Essa lista contém os itens: ${lista}`);

// Mostre no console quantos produtos tem nessa lista.

console.log(`Nessa lista existem: ${lista.length} itens.`)

// Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.

lista.splice(2, 1)
console.log(`Mouse removido, agora existem os produtos: ${lista}`)

//Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console falando 
//que este produto existe e mostre tambem o nome deste produto. Caso não exista mostre uma mensagem avisando que o produto não foi encontrado.

var busca = prompt("Procure um item na lista")
const encontrar = lista.find(produto => produto === busca)
    if(encontrar){
        console.log(`Produto ${busca} localizado na posição ${lista.indexOf(busca)}`)
    }else{
            console.log("Produto não localizado.")
        }

//Remova o segundo item da sua lista.

lista.splice(1, 1)
console.log(`Item 2 da lista removido, restando ${lista.length} produtos, sendo eles: ${lista}`)

// // // // // // // // // // // // // //

//Crie uma lista de apenas numeros 1,3,5,7,0,9​

const numeros = [1,3,5,7,0,9]

//Ordene essa lista do menor para o maior.
const crescente = numeros.sort()
console.log(`Organizando em ordem crescente: ${numeros}`)

//Retire o primeiro numero desta lista.
const remover = numeros.shift()
console.log(`Removido o primeiro item, restam: ${numeros}`)

//Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9] para [9,7,5,3,1]

const decrescente = numeros.reverse()
console.log(`Organizado em ordem decrescente: ${numeros}`)

// // // // // // // // // // // // // //

//Crie uma string que contenha o dia de hoje, exemplo: 

const dataInteira = new Date();
const dataAtual = `${dataInteira.getDate()}/${dataInteira.getMonth()+1}/${dataInteira.getFullYear()}`
console.log(`A data de hoje é: ${dataAtual}`)

//Separe essa data em variaveis dia onde contenha apenas o dia, mes onde contenha apenas o mes, e ano onde contenha apenas o ano.

const day = dataInteira.getDate()
const month= (dataInteira.getMonth()+1)
const year = dataInteira.getFullYear()

console.log(`O dia de hoje é: ${day}`)
console.log(`O mês de hoje é: ${month}`)
console.log(`O ano de hoje é: ${year}`)