'use strict'

const login = {

    nome: 'abc',
    senha: '123'

}

console.log(window.location.href)

const getLogin = (dados) => {

    const form = document.querySelector('form')
    const nome = document.getElementById('user').value
    const senha =  document.getElementById('password').value

    if (form.reportValidity()){

        if (dados.nome == nome && dados.senha == senha) {
            
            window.location.href = './src/produto.html'

        }

    }
}

document.getElementById("formButton").addEventListener('click', () => {

    getLogin(login)
    console.log(getLogin())

})