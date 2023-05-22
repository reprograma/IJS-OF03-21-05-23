const { calcularPrazoEstimado } = require('../../dominio/calculadora/Projeto/prazoEstimado');
const { MAX_HORAS_POR_PACOTE, HORAS_POR_DIA, DIAS_UTEIS_NO_MES } = require('../../dominio/calculadora/constantes/constantes.js');
const { calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto');

//erro proposital
describe('calcularPrazoEstimado', () => {
    test('Deve retornar o prazo correto para um projeto que se encaixa no pacote escolhido', () => {

        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario'
        ]

    const pacote = 'pacote_basico';
    const prazoEsperado = Math.ceil(calcularHorasDeProjeto(funcionalidades) / HORAS_POR_DIA);

    const prazoEstimado = calcularPrazoEstimado(funcionalidades, pacote);

    expect(prazoEstimado).toBe(prazoEsperado);
  });

  test('Deve retornar o prazo correto para um projeto que excede o pacote escolhido', () => {
    const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario'
        ];
    const pacote = 'pacote_basico';
    const horasPorPacote = MAX_HORAS_POR_PACOTE[pacote];
    const horasExtras = calcularHorasDeProjeto(funcionalidades) - horasPorPacote;
    const pacotesExtras = Math.ceil(horasExtras / MAX_HORAS_POR_PACOTE.pacote_basico);
    const prazoEsperado = Math.ceil(calcularHorasDeProjeto(funcionalidades) / HORAS_POR_DIA) + (pacotesExtras * DIAS_UTEIS_NO_MES);

    const prazoEstimado = calcularPrazoEstimado(funcionalidades, pacote);

    expect(prazoEstimado).toBe(prazoEsperado);
  });

  
});