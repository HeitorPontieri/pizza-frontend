const getAllProdutos = async () =>{

    const url = 'http://localhost:8080/v1/allprodutos'

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