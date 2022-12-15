'use strict'

const getAllbuttons = async () =>{

    const url = 'http://localhost:8080/v1/botoes'

    const response = await fetch (url)

    const buttons = response.json()
    
    return buttons
}

const getAllServicos = async () =>{

    const url = 'http://localhost:8080/v1/servicos'

    const response = await fetch(url)

    const servicos = response.json()
    
    return servicos
}

const getAllPizzas = async () =>{

    const url = 'http://localhost:8080/v1/pizzas'

    const response = await fetch(url)

    const pizzas = response.json()
    
    return pizzas

}

const getAllBebidas = async () =>{

    const url = 'http://localhost:8080/v1/bebidas'

    const response = await fetch(url)

    const bebidas = response.json()
    
    return bebidas

}

const getAllProdutos = async () =>{

    const url = 'http://localhost:2020/v1/allprodutos'

    const response = await fetch(url)

    const produtos = response.json()
    
    return produtos
}

const postForms = async (forms) =>{

    const url =  'http://localhost:8080/v1/formulario'

    const options = {
        method: 'POST',
        body: JSON.stringify(forms),
        headers: {
            'content-type': 'application/json',
        },
    };

    await fetch(url, options);

}


export {

    getAllbuttons,
    postForms,
    getAllPizzas,
    getAllBebidas,
    getAllServicos,
    getAllProdutos

}
