'use strict'

const getAllbuttons = async () =>{

    const url = 'http://localhost:8080/v1/botoes'

    const response = await fetch(url)

    const buttons = response.json()
    
    return buttons
}
const postForms = async (forms) =>{

    const url = 'http://localhost:8080/v1/form'

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
    postForms

}
