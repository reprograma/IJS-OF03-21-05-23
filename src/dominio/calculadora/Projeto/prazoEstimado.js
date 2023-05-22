const { MAX_HORAS_POR_PACOTE, HORAS_POR_DIA, DIAS_UTEIS_NO_MES } = require('../constantes/constantes');
const { calcularHorasDeProjeto } = require('./horasPorProjeto');


const calcularPrazoEstimado = (funcionalidades, pacote) => {
    const totalDeHorasPorProjeto = calcularHorasDeProjeto(funcionalidades);
    const horasPorPacote = MAX_HORAS_POR_PACOTE[pacote];
    const prazoEmDias = Math.ceil(totalDeHorasPorProjeto / HORAS_POR_DIA);
  
    if (totalDeHorasPorProjeto <= horasPorPacote) {
      return prazoEmDias;
    } else {
      const pacotesExtras = Math.ceil((totalDeHorasPorProjeto - horasPorPacote) / MAX_HORAS_POR_PACOTE.pacote_basico);
      return prazoEmDias + (pacotesExtras * DIAS_UTEIS_NO_MES);
    }
  };
  
  exports.calcularPrazoEstimado = calcularPrazoEstimado;
  