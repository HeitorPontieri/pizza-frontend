'use strict'

// import { getAllbuttons } from "./api";

const dadosJSON = 
[
    {
        nome: 'Favoritos',
        imagem: '../img/favorito.png'
    },
    {
        nome: 'Serviços',
        imagem: '../img/img_serviços.png'
    }
]

const createButton = (dados) => {

    
    const button = document.createElement("button")
    button.classList.add('button')
    
    const p = document.createElement("p")
    p.textContent = dados.nome

    const a = document.createElement("a")
    a.href = `#${p.textContent}`

    const img = document.createElement("img")
    img.src = dados.imagem
    
    a.appendChild(p)
    a.appendChild(img)
    button.appendChild(a)
    
    return button
}

const loadButton = () => {
    
    const dados = dadosJSON
    const container = document.getElementById('botoes')

    const creationCards = dados.map(createButton)
    container.replaceChildren(...creationCards)

}

console.log(loadButton())


const createSection = (dados) => {

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

    return section

}
const loadSection = () => {

    const dados = dadosJSON
    const container = document.getElementById('sections')

    const creationSection = dados.map(createSection)
    container.replaceChildren(...creationSection)

}

loadButton()

loadSection()











// var escolha = "sugestao"

// const select = document.getElementById('marcas')
// const button = document.querySelector('button')
// const button2 = document.querySelector('#button2')

// button.value = "sim"
// button2.value = "não"

// const value = select.options[select.selectedIndex].value;

// select.addEventListener('change', function () {
//     escolha = select.value
//     console.log(escolha)
// })
// console.log(escolha)


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




