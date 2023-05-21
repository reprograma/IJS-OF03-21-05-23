const { calcularHorasDeProjeto } = require("./horasPorProjeto")

describe('calculo horas totais para finalizar um projero', () => {
 test ('Dado um array com as funcionalidadedesejadas num projeto, retornar a soma das horas das funcionalidade' ,() => {
    const funcionalidades = [
        'setup',
        'responsividade',
        'construcao_1_pagina',
        'construcao_1_pagina',
        'construcao_1_pagina',
        'formulario',
        'ssr'
    ]
    const result = calcularHorasDeProjeto(funcionalidades);
    expect (result).toEqual(72)
 })
})
