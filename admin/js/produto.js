'use strict'

const produto ={

    id: 1,
    nome: 'Calabresa',
    preco: '40.00',
    imagem: '../../img/pizzaProduto.png',
    ingrediente_principal: 'Calabresa',
    acompanhamento: "molho especial",
    status_promocao: 1,
    status_favorito: 1,
    tipo_produto: 'pizza'

}


const createProduto = (dados) => {

    
    console.log(localStorage.getItem('TipoProduto'))
    
    let input1 = document.getElementById('input1')
    let input2 = document.getElementById('input2')
    let text1 = document.getElementById('caract1')
    let text2 = document.getElementById('caract2')

    if (localStorage.getItem('TipoProduto') == 'Bebidas') {

        text2.textContent = 'Volume (mL)'
        text1.textContent = 'Teor Alcoólico'

        input1.type = "number"
        input2.type = "number"

    } else if (localStorage.getItem('TipoProduto') == 'Pizzas') {

        text2.textContent = 'Acompanhamento'
        text1.textContent = 'Ingrediente principal'

        input1.type = "text"
        input2.type = "text"
        
    } else if (localStorage.getItem('TipoProduto').indexOf('update') > -1) {

        const produtoJSON = {}
        
        if (dados.tipo_produto == 'bebidas') {

            text2.textContent = 'Volume (mL)'
            text1.textContent = 'Teor Alcoólico'
    
            input1.type = "number"
            input2.type = "number"

            document.getElementById('produtoNome').value = dados.nome
            document.getElementById('produtoPreco').value = dados.preco
            document.getElementById('input1').value = dados.ingrediente_principal
            document.getElementById('input2').value = dados.acompanhamento
    
            document.getElementById('botoes-promocao').addEventListener('click', (event) => {
    
                if (event.target.id == 'sim') {
            
                    produto.status_favorito = 1
                    
                }else {
            
                    produto.status_favorito = 0
                }
            
            })
            
        
        } else {

            text2.textContent = 'Acompanhamento'
            text1.textContent = 'Ingrediente principal'
    
            input1.type = "text"
            input2.type = "text"

            document.getElementById('produtoNome').value = dados.nome
            document.getElementById('produtoPreco').value = dados.preco
            document.getElementById('input1').value = dados.ingrediente_principal
            document.getElementById('input2').value = dados.acompanhamento
    
            document.getElementById('botoes-promocao').addEventListener('click', (event) => {
    
                if (event.target.id == 'sim') {
            
                    produto.status_favorito = 1
                    
                }else {
            
                    produto.status_favorito = 0
                }
            
            })

        }

    } 
}


createProduto(produto)
        
