const { TAXAS_CONTRATUAIS_POR_PACOTE } = require('../../../dominio/calculadora/constantes/constantes')
const { calcularHorasDeProjeto } = require('../../../dominio/calculadora/Projeto/horasPorProjeto');
const { calcularPacote } = require('../../../dominio/calculadora/Projeto/pacote');

const calcularValorBaseProjeto = (totalDeHorasPorProjeto, valorHora) => {
  return totalDeHorasPorProjeto * valorHora;
};

exports.calcularValorBaseProjeto = calcularValorBaseProjeto;

const calcularValorTotalProjeto = (funcionalidades, valorHora) => {
  const totalDeHorasPorProjeto = calcularHorasDeProjeto(funcionalidades);
  
  const pacote = calcularPacote(totalDeHorasPorProjeto);

  const valorBase = calcularValorBaseProjeto(totalDeHorasPorProjeto, valorHora);

  return Math.round(valorBase * TAXAS_CONTRATUAIS_POR_PACOTE[pacote]);
}

exports.calcularValorTotalProjeto = calcularValorTotalProjeto;


