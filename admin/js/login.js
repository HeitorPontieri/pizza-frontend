'use strict'

import { getUser } from "../js/api.js";

const tryUser = async () => {
    
    const nome = document.getElementById('user').value
    const senha =  document.getElementById('password').value

    

        const usuario = await getUser(nome, senha)

        if (usuario != null || usuario != undefined) {
        
            window.location.href = './pages/administracao.html'

        }else{

            alert("login ou senha incorreto")
        }

}

document.getElementById("formButton").addEventListener('click', () => {

    tryUser()


})