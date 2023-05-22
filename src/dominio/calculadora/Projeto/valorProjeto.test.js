/*const { calcularValorTotalProjeto} = require('./valorProjeto');

const pacote = require('./pacote');

jest.mock('./pacote.js')

describe('valor do projeto', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico')
    })

    test('retornar valor total para um projeto dadas as funcionalidades', () => {
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
        ]

        const valorHora = 70

        const result = calcularValorTotalProjeto(funcionalidades, valorHora)

        expect(result).toEqual(3696)
    })
})*/



/*****************************************************************************************/

test('existe a letra Á na palavra BÁSICO', () => {
    expect('BÁSICO').toMatch(/Á/);
  });
  
  test('mas em "básico" existe?', () => {
    expect('básico').toMatch(/Á/);
});


const funcionalidades = [
    'setup',
    'responsividade',
    'formulario',
    'ssr'
  ];
  
  test('a lista de funcionalidades tem a funcionalidade construcao_1_pagina?', () => {
    expect(funcionalidades).toContain('setup');
});




const  pacotePremium = 200

    test('qual pacote tem mais horas', () => {
        expect(pacotePremium).toBeGreaterThan(50);

});


   
    