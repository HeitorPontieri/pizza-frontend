'use strict'

const CalcPorcentagem = (preco, porcentagemDesconto) => {

    let result = preco * porcentagemDesconto/100

    if (result == undefined || result == 0) {
        
        result = preco

    }

    return result

}

export {

    CalcPorcentagem

}

