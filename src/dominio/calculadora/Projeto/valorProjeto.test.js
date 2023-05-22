const { calcularValorTotalProjeto } = require('./valorProjeto')
const pacote = require('./pacote');


jest.mock('./pacote');

//Pacote intermediario:
describe('Valor do projeto', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario');
    });

    test('Retornar valor total para um projeto de acordo com as funcionalidades', () => {
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
        ];
        const valorHora = 70;
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(result).toEqual(6048);
    });

    test('Retornar um erro ao calcular o valor total do projeto, pois o valor total esperado é 4915 e o codigo espera 5120', () => {
        const funcionalidades = [
            'formulario',
            'responsividade',
            'otimizacao_seo',
            'integracao_api_propria'
        ];

        const valorHora = 64;
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(result).toStrictEqual(5120); //o valor correto é 4915
    });

    test('Retornar o valor total do projeto com as funcionalidades abaixo sem erro caso o valor seja maior ou igual a 3400', () => {
        const funcionalidades = [
            'setup',
            'formulario',
            'construcao_1_pagina',
            'integracao_mailchimp',
            'ssr'
        ];

        const valorHora = 56;
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(result).toBeGreaterThanOrEqual(3400); //o valor total é 3763
    });

    test('Retornar NaN ao calcular o valor do projeto ao realizar o caculo com a variavel valorHora recebendo uma string ao inves de um numero', () => {
        const funcionalidades = [
            'setup',
            'contrucao_1_pagina',
            'integracao_mailchimp'
        ];

        const valorHora = "teste";
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(result).toBeNaN();
    });
});

//Pacote premium:
describe('Valor do projeto', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_premium');
    });

    test('Retornar um erro ao calcular o valor total do projeto, pois o valor total esperado é 18816 e o codigo estar testando para o resultado 7584', () => {
        const funcionalidades = [
            'setup',
            'formulario',
            'responsividade',
            'otimizacao_seo',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'integracao_mailchimp',
            'ssr',
            'integracao_api_propria'
        ];

        const valorHora = 112;
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(result).toBe(7584); //o valor correto é 18816
    });

    test('Retornar o valor total do projeto com as funcionalidades abaixo sem erro caso o valor seja menor ou igual a 9000', () => {
        const funcionalidades = [
            'setup',
            'formulario',
            'construcao_1_pagina',
            'integracao_mailchimp',
            'ssr'
        ];

        const valorHora = 102;
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(result).toBeLessThanOrEqual(9000); //o valor total é 8568
    });

    test('Retornar NaN ao calcular o valor do projeto ao realizar o caculo com a variavel valorHora recebendo um bool ao inves de um numero', () => {
        const funcionalidades = [
            'setup',
            'contrucao_1_pagina',
            'integracao_mailchimp'
        ];

        const valorHora = true;
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(result).toBeNaN();
    });
});

//Pacote basico:
describe('Valor do projeto', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico');
    });

    test('Retornar valor total para um projeto de acordo com as funcionalidades abaixo', () => {
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina'
        ];
        const valorHora = 32;
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(result).toBe(1126);
    });
});