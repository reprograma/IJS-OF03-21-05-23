const {calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto')
const pacote = require('../../dominio/calculadora/Projeto/pacote')

jest.mock('../../dominio/calculadora/Projeto/pacote')

    describe('valor do projeto', () => {
        beforeEach( () =>{
            pacote.calcularPacote.mockReturnValue('pacote_basico');
        })
        test('retornar valor total para um projeto dada as funcionalidades', () =>{
           
            const funcionalidades = [
                'setup',
                'responsividade',
                'construcao_1_pagina',
                'construcao_1_pagina',
                'construcao_1_pagina',
                'formulario',
                'ssr',
            ];
            const valorHora = 70;
    
            const result = calcularValorTotalProjeto(funcionalidades, valorHora);
    
            expect(result).toEqual(5544)
        })
        test('Lançar erro caso seja passada uma funcionalidade não existente na lista',
        ()=>{
            const funcionalidades = [
                'setup',
                'responsividade',
                'construcao_1_pagina',
                'construcao_1_pagina',
                'construcao_1_pagina',
                'formulario',
                'ssr',
                'funcionalidade_inexistente'
            ];
            const valorHora = 70;
    
            expect(()=> calcularValorTotalProjeto(funcionalidades, valorHora)).toThrow(Error)
        })
})


