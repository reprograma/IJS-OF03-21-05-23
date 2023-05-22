const {valorHora} = require('../Hora/valorHora')

const {calcularHorasDeProjeto} = require('./horasPorProjeto')

const totalDeHorasPorProjeto = calcularHorasDeProjeto(funcionalidades)

const calcularValorBaseProjeto = (totalDeHorasPorProjeto, valorHora) => {
    return totalDeHorasPorProjeto * valorHora;
  };

  exports.calcularValorBaseProjeto = calcularValorBaseProjeto;