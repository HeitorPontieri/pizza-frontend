'use strict'

import { getPizza, getBebida, putProduto, postProduto, postIngrediente } from "../js/api.js";

const produtoP ={

    id: 1,
    nome: 'Calabresa',
    preco: '40.00',
    imagem: '../../img/pizzaProduto.png',
    ingrediente_principal: 'Calabresa',
    porcentagem_desconto: 50,
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


const inputFile = document.getElementById('picture__input')
const image = document.getElementById('img-preview')

const tipoProduto = localStorage.getItem('tipoProduto')

const createProduto = (dados) => {
    
    const input1 = document.getElementById('input1')
    const input2 = document.getElementById('input2')
    const text1 = document.getElementById('caract1')
    const text2 = document.getElementById('caract2')

    let status_promocao = 'nao'
    let porcentagem_desconto
    
    document.getElementById('botoes-promocao').addEventListener('click', (event) => {

        
        if (event.target.id == 'sim') {

            
            status_promocao = 'sim'

            createInput()
            
        }else {
            
            status_promocao = 'nao'
            
            porcentagem_desconto = 0
            
            
            exitFunction()

        }

    })


    if (document.getElementById('porcentagemDeDesconto') != undefined) {
                
        porcentagem_desconto = document.getElementById('porcentagemDeDesconto').value

    } else {

        porcentagem_desconto = 0

    }

    document.getElementById("buttonProduto").addEventListener('click', (event) => {
            
        let produtoJSON
        
        event.preventDefault();
        
        if (dados.teor_alcoolico == null || dados.teor_alcoolico == undefined) {


            produtoJSON = {
                
                "nome": document.getElementById('produtoNome').value,
                "preco": document.getElementById('produtoPreco').value,
                "status_favoritos":dados.status_favorito,
                "tipo_produto": dados.tipo_produto,
                "porcentagem_desconto": porcentagem_desconto,
                "status_promocao": status_promocao,
                "imagem": document.getElementById('img-preview').src

            }
            
        }else {

            produtoJSON = {

                "nome": document.getElementById('produtoNome').value,
                "preco": document.getElementById('produtoPreco').value,
                "teor_alcoolico": input1.value ,
                "volume": input2.value ,
                "status_favoritos":dados.status_favorito,
                "tipo_produto": dados.tipo_produto,
                "porcentagem_desconto": porcentagem_desconto,
                "status_promocao": status_promocao,
                "imagem": document.getElementById('img-preview').src
                
            }

        }
        
        if(tipoProduto == 'Bebidas' || tipoProduto == 'Pizzas'){

            postProduto(produtoJSON)

        }else{

            putProduto(produtoJSON, dados.id)

            if (produtoJSON.teor_alcoolico == undefined || produtoJSON.teor_alcoolico == null && produtoJSON.volume == undefined || produtoJSON.volume == null) {
                
                const ingredientesJSON = {

                    "ingrediente_principal": input1.value ,
                    "acompanhamento": input2.value

                }

                postIngrediente(ingredientesJSON)

            }
        }
    })
    
    if (tipoProduto == 'Bebidas') {

        text2.textContent = 'Volume (mL)'
        text1.textContent = 'Teor Alcoólico'

        input1.type = "number"
        input2.type = "number"


        
    } else if (tipoProduto == 'Pizzas') {

        text2.textContent = 'Acompanhamento'
        text1.textContent = 'Ingrediente principal'

        input1.type = "text"
        input2.type = "text"

        
    } else if (tipoProduto == 'update') {


        
        if (dados.tipo_produto == 'bebida') {
            
            text2.textContent = 'Volume (mL)'
            text1.textContent = 'Teor Alcoólico'
            
            input1.type = "number"
            input2.type = "number"
            
            document.getElementById('produtoNome').value = dados.nome
            document.getElementById('produtoPreco').value = dados.preco
            document.getElementById('input1').value = dados.teor_alcoolico
            document.getElementById('input2').value = dados.volume
            document.getElementById('img-preview').src = dados.imagem

            if (dados.porcentagem_desconto != undefined) {
                
                document.getElementById('porcentagemDeDesconto').value = dados.porcentagem_desconto
            
            }

        } else {
            
            text2.textContent = 'Acompanhamento'
            text1.textContent = 'Ingrediente principal'
            
            input1.type = "text"
            input2.type = "text"
            
            document.getElementById('produtoNome').value = dados.nome
            document.getElementById('produtoPreco').value = dados.preco
            document.getElementById('input1').value = dados.ingrediente_principal
            document.getElementById('input2').value = dados.acompanhamento
            document.getElementById('picture__input').textContent = dados.imagem
            document.getElementById('img-preview').src = dados.imagem
        
            if (dados.porcentagem_desconto != undefined) {
                
                document.getElementById('porcentagemDeDesconto').value = dados.porcentagem_desconto
            
            }
        }
    } 
}

const createInput = async () => {
    
   return document.getElementById('desconto-input').classList.remove('none')
    
}

const exitFunction = async () => {
    
   return document.getElementById('desconto-input').classList.add('none')

}

inputFile.addEventListener('change', () => {

    let reader = new FileReader()

    reader.onload = () => {
        image.src = reader.result
    }

    reader.readAsDataURL(inputFile.files[0])

})

const id = localStorage.getItem('idProduto')

if (getPizza(id) !=  undefined || getPizza(id) != null)  {
    
    createProduto(getPizza(id))

}else{

    createProduto(getBebida(id))

}

        