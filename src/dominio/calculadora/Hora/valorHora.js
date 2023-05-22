const {
  HORAS_POR_DIA,
  DIAS_UTEIS_NO_MES
} = require('../constantes/constantes')

const calcularValorPorHora = (rendaMensal) => {
  if(rendaMensal <= 0){
    throw new Error("A renda mensal precisa ser maior que zero.")
  }else{
  const horasTrabalhadasPorMes = (HORAS_POR_DIA * DIAS_UTEIS_NO_MES);
  const valorPorHora = rendaMensal / horasTrabalhadasPorMes;

  return Math.ceil(valorPorHora);
  }
};

exports.calcularValorPorHora = calcularValorPorHora;
