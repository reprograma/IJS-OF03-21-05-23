const { TAXAS_CONTRATUAIS_POR_PACOTE } = require('../constantes/constantes');

const calcularTaxaPacote = (pacote) => Object.entries(TAXAS_CONTRATUAIS_POR_PACOTE)
  .find(([key, value]) => value >= pacote
)[0];

exports.calcularTaxaPacote = calcularTaxaPacote;