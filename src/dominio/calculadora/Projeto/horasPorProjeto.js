const { HORAS_POR_FUNCIONALIDADE } = require('../constantes/constantes');

const calcularHorasDeProjeto = (listaDeFuncionalidades) => (
  listaDeFuncionalidades
    .map(func => HORAS_POR_FUNCIONALIDADE[func])
    .reduce((soma, valorAtual) => soma + valorAtual, 0)
);

exports.calcularHorasDeProjeto = calcularHorasDeProjeto;
