const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');


const calcularPacote = (totalDeHorasPorProjeto) => {

    if(totalDeHorasPorProjeto > 200){
        throw new Error("Não existe pacote para este projeto")
    }else{
        return Object.entries(MAX_HORAS_POR_PACOTE)
        .find(([key, value]) => value >= totalDeHorasPorProjeto 
        )[0];
    }
}

exports.calcularPacote = calcularPacote;
