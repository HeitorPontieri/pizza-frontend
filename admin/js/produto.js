'use strict'

const produtoP ={

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
const produtoB = {

    id: 3,
    nome: 'Coca-Cola',
    preco: '40.00',
    imagem: '../../img/bebidasProduto.png',
    teor_alcoolico: 50,
    volume: 100,
    status_promocao: 0,
    status_favorito: 5,
    tipo_produto: 'bebida'

}

const createProduto = (dados) => {
    
    const input1 = document.getElementById('input1')
    const input2 = document.getElementById('input2')
    const text1 = document.getElementById('caract1')
    const text2 = document.getElementById('caract2')

    if (localStorage.getItem('tipoProduto') == 'Bebidas') {

        text2.textContent = 'Volume (mL)'
        text1.textContent = 'Teor Alcoólico'

        input1.type = "number"
        input2.type = "number"

    } else if (localStorage.getItem('tipoProduto') == 'Pizzas') {

        text2.textContent = 'Acompanhamento'
        text1.textContent = 'Ingrediente principal'

        input1.type = "text"
        input2.type = "text"
        
    } else if (localStorage.getItem('tipoProduto') == 'update') {

        const produtoJSON = {}
        
        if (dados.tipo_produto == 'bebida') {

            text2.textContent = 'Volume (mL)'
            text1.textContent = 'Teor Alcoólico'
    
            input1.type = "number"
            input2.type = "number"

            document.getElementById('produtoNome').value = dados.nome
            document.getElementById('produtoPreco').value = dados.preco
            document.getElementById('input1').value = dados.teor_alcoolico
            document.getElementById('input2').value = dados.volume
            
        } else {

            text2.textContent = 'Acompanhamento'
            text1.textContent = 'Ingrediente principal'
    
            input1.type = "text"
            input2.type = "text"

            document.getElementById('produtoNome').value = dados.nome
            document.getElementById('produtoPreco').value = dados.preco
            document.getElementById('input1').value = dados.ingrediente_principal
            document.getElementById('input2').value = dados.acompanhamento

        }

        document.getElementById('botoes-promocao').addEventListener('click', (event) => {
            
            if (event.target.id == 'sim') {
        
                produtoJSON.status_favorito = 1

                event.preventDefault();
                
            }else {
        
                produtoJSON.status_favorito = 0

                event.preventDefault();

            }
        })

        document.getElementById("buttonProduto").addEventListener('click', (event) => {

            event.preventDefault();

            if (dados.teor_alcoolico == null || dados.teor_alcoolico == undefined) {
                
                produtoJSON.nome = document.getElementById('produtoNome').value
                produtoJSON.preco = document.getElementById('produtoPreco').value
                produtoJSON.ingrediente_principal = document.getElementById('input1').value 
                produtoJSON.acompanhamento = document.getElementById('input2').value 
                produtoJSON.status_favorito = dados.status_favorito
                produtoJSON.tipo_produto = dados.tipo_produto

            }

            console.log(produtoJSON)

        })


    } 
}

createProduto(produtoB)
        
