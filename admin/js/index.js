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

const PizzasBebidas = 
[
    {

        id: 1,
        nome: 'Calabresa',
        preco: '40.00',
        imagem: '../../img/pizzaProduto.png',
        status_promocao: 1,
        status_favorito: 1,
        tipo_produto: 'pizza'

    },
    {
        id: 2,
        nome: 'Calabresa',
        preco: '40.00',
        imagem: '../../img/pizzaProduto.png',
        status_promocao: 1,
        status_favorito: 0,
        tipo_produto: 'pizza'

    },
    {
        id: 3,
        nome: 'Coca-Cola',
        preco: '40.00',
        imagem: '../../img/bebidasProduto.png',
        status_promocao: 0,
        status_favorito: 5,
        tipo_produto: 'bebida'
    },
    {
        id: 4,
        nome: 'Coca-Cola',
        preco: '40.00',
        imagem: '../../img/bebidasProduto.png',
        status_promocao: 0,
        status_favorito: 9,
        tipo_produto: 'bebida'
    }
]

const createButton = (dados) => {
    
    const p = document.createElement("p")
    p.textContent = dados.nome
    p.classList.add('p-button')

    const a = document.createElement("a")
    a.href = './produto.html'
    a.id = `${p.textContent}`
    a.classList.add('button')
    a.classList.add('buttonMain')

    const img = document.createElement("img")
    img.src = dados.imagem
    img.classList.add('img-button')
    
    a.appendChild(p)
    a.appendChild(img)
    
    return a
}

const loadButtonProdutos = (dados) => {

    const container = document.getElementById('botoes')

    const creationCards = dados.map(createButton)
    container.replaceChildren(...creationCards)
}

const createCard = (dados) => {

    const cardsOptions = document.createElement('div')
    cardsOptions.classList.add('card-options')

    const optionsContainer = document.createElement('div')
    optionsContainer.classList.add('options-container')

    const deletar = document.createElement('img')
    deletar.classList.add('icon')
    deletar.src = '../../img/Delete.png'
    deletar.id = `delete ${dados.id}`
    
    const update = document.createElement('img')
    update.classList.add('icon')
    update.src = '../../img/update.png'
    update.id = `update ${dados.id}`

    optionsContainer.appendChild(deletar)
    optionsContainer.appendChild(update)


    const options = document.createElement('div')
    options.classList.add('options')

    
    const infosImg = document.createElement("div")
    infosImg.classList.add("infos-img")
    
    const infos = document.createElement("div")
    infos.classList.add("infos")

    const div = document.createElement("div")
    div.classList.add("card")
    div.id = `${dados.tipo_produto}${dados.id}`

    const ul = document.createElement("ul")
    const liNome = document.createElement("li")

    ul.appendChild(liNome)

    const span = document.createElement('span')
    span.classList.add('preco-container')
    
    const h3Nome = document.createElement("h3")
    h3Nome.textContent = "Nome:"

    const h3preco = document.createElement("h3")
    h3preco.textContent = "Preço Atual:"

    const pNome = document.createElement("p")
    pNome.textContent = dados.nome
    pNome.classList.add('nome')

    const pPreco = document.createElement("p")
    pPreco.textContent = `R$${dados.preco}`
    pPreco.classList.add('preco')

    const img = document.createElement("img")
    img.src = dados.imagem
    img.classList.add('img-card')

    const Promocao = document.createElement("div")
    Promocao.src = "../../img/promocao.png"

    if (dados.status_promocao == 0) {
        
        Promocao.classList.add("promocaoOff")
        Promocao.classList.remove("promocaoOn")
        
    }else {
        
        
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
    span.appendChild(h3preco)
    span.appendChild(pPreco)
    options.appendChild(span)
    cardsOptions.appendChild(div)
    options.appendChild(optionsContainer)
    cardsOptions.appendChild(options)

    return cardsOptions
}

const loadCardPizza = () => {
    
    const dadosP = PizzasBebidas

    const cards =  document.createElement('div')
    cards.classList.add("container-cards") 
    const section = document.querySelector('section')

    const creationCards = dadosP.map(createCard)

    section.appendChild(cards)
    cards.replaceChildren(...creationCards)

}

loadButtonProdutos(dadosBotoes)

loadCardPizza()

document.querySelector('.botoes').addEventListener('click', (event) => {

    if(event.target.classList.contains('buttonMain')){

        localStorage.setItem('TipoProduto', event.target.id)

    }if(event.target.classList.contains('p-button') || event.target.classList.contains('img-button')){

        localStorage.setItem('TipoProduto', event.target.parentElement.id)

    }
})

document.querySelector('.container-cards').addEventListener('click', (event) => {

    if(event.target.classList.contains('icon')){
        
        const id = event.target.id

        const options = id.split(' ')

        console.log(options[1])

        
        if (id.indexOf('delete') == -1) {
            
            localStorage.setItem('idProduto', options[1])
            localStorage.setItem('tipoProduto', options[0])
            window.location.href = './produto.html'

        }else{

            if (confirm('vc quer realmente fazer isso?')) {
                
                //function(options)
                console.log('ok');
                
            }   
        } 
    }
})




