'use strict'

import { uploadImage } from "../../firebase/firebase.js";

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
            document.getElementById('picture__input').textContent = dados.imagem
            
        }
        
        let status_promocao
        let porcentagem_desconto
        
        document.getElementById('botoes-promocao').addEventListener('click', (event) => {

            event.preventDefault();
            
            if (event.target.id == 'sim') {
                
                status_promocao = 'sim'

                createInput()
                
                
            }else {
                
                status_promocao = 'nao'
                
                porcentagem_desconto = 0
                
                
                exitFunction()
                
            }
        })
        
        document.getElementById("buttonProduto").addEventListener('click', (event) => {
            
            let produtoJSON
            
            
            event.preventDefault();
            
            if (dados.teor_alcoolico == null || dados.teor_alcoolico == undefined) {

                if (document.getElementById('porcentagemDeDesconto') != undefined) {
                    
                    porcentagem_desconto = document.getElementById('porcentagemDeDesconto').value

                } else {

                    porcentagem_desconto = 0

                }

                produtoJSON = {
                    
                    "nome": document.getElementById('produtoNome').value,
                    "preco": document.getElementById('produtoPreco').value,
                    "ingrediente_principal" :document.getElementById('input1').value ,
                    "acompanhamento":document.getElementById('input2').value ,
                    "status_favoritos":dados.status_favorito,
                    "tipo_produto": dados.tipo_produto,
                    "porcentagem_desconto": porcentagem_desconto,
                    "status_promocao": status_promocao,
                    // "imagem": 
                    
                }
                
            }else {

                produtoJSON = {

                    "nome": document.getElementById('produtoNome').value,
                    "preco": document.getElementById('produtoPreco').value,
                    "teor_alcoolico" :document.getElementById('input1').value ,
                    "volume":document.getElementById('input2').value ,
                    "status_favoritos":dados.status_favorito,
                    "tipo_produto": dados.tipo_produto,
                    "porcentagem_desconto": porcentagem_desconto,
                    "status_promocao": status_promocao,
                    // "imagem": 
                    
                }

            }
            
            console.log(produtoJSON)
        
        })
        

    } 
}


const createInput = async () => {

    const div = document.createElement('div')
    div.id = "porcentagemDesconto"
    div.innerHTML = `
    <h2 class="input-text">
        Porcentagem de desconto
    </h2>
    <input required type="number" id="porcentagemDeDesconto">`

    document.getElementById('preco').appendChild(div)

}
const exitFunction = async () => {

    const div = document.getElementById('porcentagemDesconto')
    
    div.outerHTML = ''

}
const image = (e) => {
  
    const inputTarget = e.target;
    const file = inputTarget.files[0];
    
    if (file) {
      const reader = new FileReader();
      
      reader.addEventListener("load", function (e) {
        
        const readerTarget = e.target;
        console.log(readerTarget)
        
        const img = document.createElement("img");
        img.src = readerTarget.result;
        img.classList.add("picture__img")
        img.id = ('image')
        
        pictureImage.innerHTML = "";
        pictureImage.appendChild(img);
      });
      
      reader.readAsDataURL(file);
      
      uploadImage(reader.result, file.name)
      
    } else {
      
      pictureImage.innerHTML = pictureImageTxt;
      
    }
  
    return readerTarget.result
    
  }
  
  inputFile.addEventListener("change", image)
  
  export {
  
    image
  
  }

createProduto(produtoP)
        
export {

    produtoP

}