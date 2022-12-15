const getAllProdutos = async () =>{

    const url = 'http://localhost:8080/v1/allprodutos'

    const response = await fetch(url)

    const produtos = response.json()
    
    return produtos

}

const getAllbuttons = async () =>{

    const url = 'http://localhost:8080/v1/botoes'

    const response = await fetch(url)

    const buttons = response.json()
    
    return buttons
}

const getPizza = async (id) => {

    const url = `http://localhost:8080/v1/pizzas/${id}`

    const response = await fetch(url)

    const pizza = response.json()
    
    return pizza

}

const getBebida = async (id) => {

    const url = `http://localhost:8080/v1/bebidas/${id}`

    const response = await fetch(url)

    const bebida = response.json()
    
    return bebida

}

const postProduto = async (produto) => {

    const url = 'http://localhost:8080/v1/produto'

    const options = {
        method: 'POST',
        body: JSON.stringify(produto),
        headers: {
            'content-type': 'application/json',
        },
    };

    await fetch(url, options);

}
const postIngrediente = async (ingredientes) => {

    const url = 'http://localhost:8080/v1/ingrediente'

    const options = {
        method: 'POST',
        body: JSON.stringify(ingredientes),
        headers: {
            'content-type': 'application/json',
        },
    };

    await fetch(url, options);

}

const putProduto = async (produto, id) => {

    const url = `http://localhost:8080/v1/produto/atualizar/${id}`

    const options = {
        method: 'PUT',
        body: JSON.stringify(produto),
        headers: {
            'content-type': 'application/json',
        },
    };

    await fetch(url, options);

}

const deleteProduto = async (id) => {


    const url = `http://localhost:8080/v1/produto/apagar/${id}`

    const options = {
        method: 'DELETE',

    };

    await fetch(url, options)

}

const getUser = async (nome_usuario, senha) => {

    const url = `http://localhost:8080/v1/colaborador/autenticacao/${nome_usuario}/${senha}`

    const response = await fetch(url)

    const usuario = response.json()
    
    return usuario

}

export {

    getAllProdutos,
    getAllbuttons,
    getPizza,
    getBebida,
    getUser,
    postProduto,
    deleteProduto,
    putProduto,
    postIngrediente
    
}