const {calcularValorPorHora, calcularHorasDeProjeto} = require('./horasPorProjeto');

describe('calculo de horas totais para finalizar meu projeto', ()=>{
    test('Dados um array com as funcionalidades de um projeto, deve retornar a soma das horas')
    const funcionalidades = [
        'segit addtup',
        'responsividade',
        'construçãoPagina',
        'Formulários',
        'ssr'
    ]
    const result = calcularHorasDeProjeto(funcionalidades);
    
    expect(result).toEqual(72)
})