'use strict'

import { getAllbuttons, getAllPizzas, getAllBebidas, getAllProdutos, getAllServicos } from "./api.js";

import { CalcPorcentagem } from "../admin/js/porcentagem.js";

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
const loadButton = async () => {
    
    const dados = await getAllbuttons()

    const container = document.getElementById('botoes')

    const creationCards = dados.map(createButton)
    container.replaceChildren(...creationCards)

}

const createSection =  (dados) => {

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


const loadSection = async () => {

    const dados = await getAllbuttons()
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
    div.id = `${dados.tipo_produto}${dados.id}`

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
    pPreco.textContent = `R$${CalcPorcentagem(dados.preco, dados.porcentagem_desconto)}`
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

const loadCardPizza = async () => {
    
    const dados = await getAllPizzas()
    const container = document.getElementById('container-cardsPizzas')

    const creationCards = dados.map(createCard)
    container.replaceChildren(...creationCards)

}

const loadCardBebida = async () => {
    
    const dados = await getAllBebidas()
    const container = document.getElementById('container-cardsBebidas')

    const creationCards = dados.map(createCard)
    container.replaceChildren(...creationCards)

}

// let favoritos = []
    
// for (let i = 0; i < 5; i++) {
        
    
//     const maxFavorito = await getAllProdutos().reduce((prev, current) => { 
    
//         return prev.status_favorito > current.status_favorito ? prev : current; 
    
//     });
        
//     const index = await getAllProdutos().indexOf(maxFavorito)
        
//     if (index > -1) {
    
//         favoritos.push(maxFavorito)
//         await getAllProdutos().splice(index, 1);

//         console.log(favoritos)

//     }

// }

// const loadCardFavoritos =  () => {

//     const dados = favoritos
//     const container = document.getElementById('container-cardsFavoritos')
    

//     const creationCards = dados.map(createCard)

//     container.replaceChildren(...creationCards)

// }

const createCardServicos = (dados) => {

    const infosImg = document.createElement("div")
    infosImg.classList.add("infos-img")
    
    const infos = document.createElement("div")
    infos.classList.add("infos")

    const div = document.createElement("div")
    div.classList.add("card")
    div.id = `${dados.id}`

    const ul = document.createElement("ul")
    const liNome = document.createElement("li")
    const liPreco = document.createElement("li")

    ul.appendChild(liNome)
    ul.appendChild(liPreco)
    
    const h3Nome = document.createElement("h3")
    h3Nome.textContent = "Nome:"

    const h3preco = document.createElement("h3")
    h3preco.textContent = "horario de funcionamento"

    const pNome = document.createElement("p")
    pNome.textContent = dados.nome
    pNome.classList.add('nome')

    const pPreco = document.createElement("p")
    pPreco.textContent = `${dados.abertura} a ${dados.fechamento}`
    pPreco.classList.add('preco')

    const img = document.createElement("img")
    img.src = dados.imagem
    img.classList.add('img-card')

        
    infosImg.appendChild(img)
    infosImg.appendChild(infos)
    div.appendChild(infosImg)
    infos.appendChild(ul)
    liNome.appendChild(h3Nome)
    liNome.appendChild(pNome)
    liPreco.appendChild(h3preco)
    liPreco.appendChild(pPreco)

    
    return div
}

const loadCardServicos = async () => {

    const dados = await getAllServicos()

    const container = document.getElementById('container-cardsServicos')

    const creationCards = dados.map(createCardServicos)
    container.replaceChildren(...creationCards)

}

loadButton()

loadSection()

loadCardPizza()

loadCardBebida()

loadCardServicos()

// loadCardFavoritos()







