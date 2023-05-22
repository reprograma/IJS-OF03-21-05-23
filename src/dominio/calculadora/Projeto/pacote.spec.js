const { calcularPacote } = require("./pacote");

describe("Calcular pacote", () => {
    it("Projeto de 40 horas deve retornar pacote basico", () => {
        const horasDeProjeto = 49;
        expect(calcularPacote(horasDeProjeto)).toEqual("pacote_basico");
    })
    
})