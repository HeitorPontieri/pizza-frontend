'use strict'

// import { getAllbuttons } from "./api";

const dadosBotoes = 
[   
    {

        nome: 'Pizzas',
        imagem: 'https://firebasestorage.googleapis.com/v0/b/buon-appetito-1e30a.appspot.com/o/images%2Fpizza.png?alt=media&token=e0489ee9-c015-49c6-b7d6-a8cbfae8f057'

    },
    {

        nome: 'Bebidas',
        imagem: 'https://firebasestorage.googleapis.com/v0/b/buon-appetito-1e30a.appspot.com/o/images%2Fbebidas.png?alt=media&token=8bc14a58-e6c5-4403-b713-f432d841690d',

    },
    {
        nome: 'Favoritos',
        imagem: 'https://firebasestorage.googleapis.com/v0/b/buon-appetito-1e30a.appspot.com/o/images%2Ffavorito.png?alt=media&token=740784dd-c6e8-4d0c-aadf-b17f23a817a0'
    },
    {
        nome: 'Serviços',
        imagem: 'https://firebasestorage.googleapis.com/v0/b/buon-appetito-1e30a.appspot.com/o/images%2Fimg_serviços.png?alt=media&token=51edcec1-e2df-450e-b189-851b2c59a5e4'
    }
]

const Pizzas= 
[
    {

        nome: 'Calabresa',
        preco: '40.00',
        imagem: '../img/pizzaProduto.png',
        status_promocao: 1,
        status_favorito: 0

    },
    {

        nome: 'Calabresa',
        preco: '40.00',
        imagem: '../img/pizzaProduto.png',
        status_promocao: 0,
        status_favorito: 0

    }
]

const Bebidas = 
[
    {
        nome: 'Coca-Cola',
        preco: '40.00',
        imagem: '../img/bebidasProduto.png',
        status_promocao: 0,
        status_favorito: 0
    },
    {
        nome: 'Coca-Cola',
        preco: '40.00',
        imagem: '../img/bebidasProduto.png',
        status_promocao: 0,
        status_favorito: 0
    }
]

const createButton = (dados) => {
    
    const p = document.createElement("p")
    p.textContent = dados.nome
    p.classList.add('p-button')

    const a = document.createElement("a")
    a.href = `#${p.textContent}`
    a.classList.add('button')
    a.classList.add('buttonMain')

    const img = document.createElement("img")
    img.src = dados.imagem
    img.classList.add('img-button')
    
    a.appendChild(p)
    a.appendChild(img)
    
    return a
}
const loadButton = () => {
    
    const dados = dadosBotoes //await getAllbuttons()
    const container = document.getElementById('botoes')

    const creationCards = dados.map(createButton)
    container.replaceChildren(...creationCards)

}
const createSection = (dados) => {

    const cards = document.createElement('div')
    cards.classList.add("container-cards")
    cards.id = `container-cards${dados.nome}`

    const div = document.createElement("div")
    const linhaL = document.createElement("div")
    const linhaR = document.createElement("div")
    const section = document.createElement("section")
    const h2 = document.createElement("h2")
    
    h2.textContent = dados.nome
    h2.classList.add("titulo")

    div.classList.add("titulo-container")

    linhaL.classList.add("linha")
    linhaR.classList.add("linha")

    section.id = dados.nome

    div.appendChild(linhaL)
    div.appendChild(h2)
    div.appendChild(linhaR)

    section.appendChild(div)
    section.appendChild(cards)

    return section

}
const loadSection = () => {

    const dados = dadosBotoes
    const container = document.getElementById('sections')

    const creationSection = dados.map(createSection)
    container.replaceChildren(...creationSection)
    
}
const createCard = (dados) => {

    const infosImg = document.createElement("div")
    infosImg.classList.add("infos-img")
    
    const infos = document.createElement("div")
    infos.classList.add("infos")

    const div = document.createElement("div")
    div.classList.add("card")

    const ul = document.createElement("ul")
    const liNome = document.createElement("li")
    const liPreco = document.createElement("li")

    ul.appendChild(liNome)
    ul.appendChild(liPreco)
    
    const h3Nome = document.createElement("h3")
    h3Nome.textContent = "Nome:"

    const h3preco = document.createElement("h3")
    h3preco.textContent = "Preço:"

    const pNome = document.createElement("p")
    pNome.textContent = dados.nome
    pNome.classList.add('nome')

    const pPreco = document.createElement("p")
    pPreco.textContent = dados.preco
    pPreco.classList.add('preco')

    const img = document.createElement("img")
    img.src = dados.imagem
    img.classList.add('img-card')

    const Promocao = document.createElement("img")
    if (dados.status_promocao == 0) {
        
                
        Promocao.src = "./img/FundoTransparente.png"
        Promocao.classList.add("promocaoOff")
        Promocao.classList.remove("promocaoOn")
        
    }else {
        
        
        Promocao.src = "./img/promocao.png"
        Promocao.classList.add("promocaoOn")
        Promocao.classList.remove("promocaoOff")

    }
        
    infosImg.appendChild(img)
    infosImg.appendChild(infos)
    div.appendChild(infosImg)
    div.appendChild(Promocao)
    infos.appendChild(ul)
    liNome.appendChild(h3Nome)
    liNome.appendChild(pNome)
    liPreco.appendChild(h3preco)
    liPreco.appendChild(pPreco)

    
    return div
}

const loadCardPizza = () => {
    
    const dados = Pizzas
    const container = document.getElementById('container-cardsPizzas')

    const creationCards = dados.map(createCard)
    container.replaceChildren(...creationCards)

}

const loadCardBebida = () => {
    
    const dados = Bebidas
    const container = document.getElementById('container-cardsBebidas')

    const creationCards = dados.map(createCard)
    container.replaceChildren(...creationCards)

}

loadButton()

loadSection()

loadCardPizza()

loadCardBebida()



// const button = document.querySelector('button')
// const button2 = document.querySelector('#button2')

// button.value = "sim"
// button2.value = "nao"

// button.addEventListener('click', function () {

//     if (confirm('vc quer realmente fazer isso?')) {

//         console.log(button.value)
//     }

// })
// button2.addEventListener('click', function () {

//     if (confirm('vc quer realmente fazer isso?')) {
//         console.log(button2.value)
//     }

// })

// console.log(window.location.href);

// if (window.location.href == 'http://127.0.0.1:5500/index.html/admin') {
    
//     window.location.href = 'http://127.0.0.1:5500/admin/index.html'

// }




