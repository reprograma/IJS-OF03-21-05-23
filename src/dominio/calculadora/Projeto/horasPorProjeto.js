const { HORAS_POR_FUNCIONALIDADE } = require('../constantes/constantes');

const calcularHorasDeProjeto = (listaDeFuncionalidades) => (
  
  listaDeFuncionalidades
    .map(func => {
     if(!HORAS_POR_FUNCIONALIDADE[func]){
      throw new Error(`${func} não está na lista de funcionalidades.`)
     }else{
      return HORAS_POR_FUNCIONALIDADE[func]
     }
    })
    .reduce((sum, currentValue) => sum + currentValue, 0)
)

exports.calcularHorasDeProjeto = calcularHorasDeProjeto;
