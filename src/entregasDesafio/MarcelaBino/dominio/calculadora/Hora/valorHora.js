const {
  HORAS_POR_DIA,
  DIAS_UTEIS_NO_MES
} = require('../constantes/constantes')

const calcularValorPorHora = (rendaMensal) => {
  
    const horasTrabalhadasPorMes = (HORAS_POR_DIA * DIAS_UTEIS_NO_MES);

    if (rendaMensal > 0) {
    const valorPorHora = rendaMensal / horasTrabalhadasPorMes;

    return Math.ceil(valorPorHora);

    } else {

      throw new Error('Valor inválido!');
  }  
  
};

exports.calcularValorPorHora = calcularValorPorHora;
