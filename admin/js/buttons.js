'use strict'


const dadosBotoes = 
[   
    {

        nome: 'Pizzas',
        imagem: '../../img/pizza.png'

    },
    {

        nome: 'Bebidas',
        imagem: '../../img/bebidas.png',

    },
    {
        nome: 'Favoritos',
        imagem: '../../img/favorito.png'
    },
    {
        nome: 'Serviços',
        imagem: '../../img/img_serviços.png'
    }
]

const createButton = (dados) => {
    
    const p = document.createElement("p")
    p.textContent = dados.nome
    p.classList.add('p-button')

    const div = document.createElement("div")
    div.id = `${p.textContent}`
    div.classList.add('button')
    div.classList.add('buttonMain')

    const img = document.createElement("img")
    img.src = dados.imagem
    img.classList.add('img-button')
    
    div.appendChild(p)
    div.appendChild(img)
    
    return div
}

const loadButtonProdutos = (dados) => {

    //await getAllbuttons()
    const container = document.getElementById('botoes')

    const creationCards = dados.map(createButton)
    container.replaceChildren(...creationCards)

    // const container = document.getElementById('botoes')
    // const buttonProdutos = []
    
    // dados.map(element => {

    //     if (element.nome != 'Favoritos' || element.nome != 'Serviços') {

    //         const creationCards = buttonProdutos.map(createButton)
    //         container.replaceChildren(...creationCards)

    //     }

    // })
}

loadButtonProdutos(dadosBotoes)
