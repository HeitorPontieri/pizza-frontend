'use strict'

import { getAllbuttons } from "./api";

const createCard = (dados) => {

    const div = document.getElementById('botoes')
    const a = document.createElement("a")
    const button = document.createElement("button")
    const img = document.createElement("img")
    const p = document.createElement("p")

    button.

    p.textContent = dados.nome

    a.href = `#${p.textContent}`
    div.appendChild(button)
    div.appendChild(img)
    div.appendChild(p)

    img.classList.add('pizza_favoritos')
    img.src = dados.img







    a.appendChild(div)


}









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




