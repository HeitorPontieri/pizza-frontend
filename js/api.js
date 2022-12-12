'use strict'

const getAllbuttons = async () =>{

    const url = 'http://localhost:8080/v1/botoes'

    const response = await fetch(url)

    const buttons = response.json()
    
    return buttons
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


export {

    getAllbuttons,
    postForms,
    getAllPizzas,
    getAllBebidas

}
