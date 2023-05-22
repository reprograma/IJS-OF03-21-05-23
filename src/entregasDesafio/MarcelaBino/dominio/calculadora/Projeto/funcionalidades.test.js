const funcionalidades = [
            'setup', 
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
        ]

test('Verificar se a funcionalidade formulario está na lista para calcular horas de projeto', () => {
    expect(funcionalidades).toContain('formulario')
})    