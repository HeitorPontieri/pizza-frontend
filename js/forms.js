'use strict'

import { postForms } from "./api.js";


const postFormulario = async () => {
    
    const FormJSON = {}
    
    const Form = document.getElementById('form')
    const nome = document.getElementById('seuNome').value
    const telefone = document.getElementById('telefone').value
    const celular = document.getElementById('celular').value
    const email = document.getElementById('email').value
    const select = document.getElementById('marcas')
    var escolha = "sugestao"


    select.addEventListener('change', () => {

        escolha = select.value
        
    })
    
    if(Form.reportValidity()){

        FormJSON.nome = nome
        FormJSON.telefone = telefone
        FormJSON.celular = celular
        FormJSON.email = email
        FormJSON.critica = escolha

    }

    return FormJSON

}

document.getElementById("formButton").addEventListener('click',  () => {

    // postForms(postFormulario())

})



