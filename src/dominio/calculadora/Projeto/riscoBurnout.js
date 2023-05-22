
const {
    HORAS_POR_DIA,
    DIAS_UTEIS_NO_MES,
    LIMITE_BURNOUT
  } = require('../constantes/constantes')


  const calcularHorasTrabalhadasPorMes = () => {
    const horasTrabalhadasPorMes = (HORAS_POR_DIA * DIAS_UTEIS_NO_MES);
    return horasTrabalhadasPorMes;
  };

const calcularRiscoBurnout = (horasTrabalhadasPorMes) => {

    if(horasTrabalhadasPorMes > LIMITE_BURNOUT) {
        return true;
    } else {
        return false;
    }
 }

 exports.calcularRiscoBurnout = calcularRiscoBurnout;