const fs = require("fs");

const analisarFaturamento = () => {
    const faturamento = JSON.parse(fs.readFileSync("./dados/faturamento.json", "utf-8"));
    const valoresValidos = faturamento.filter((dia) => dia.valor > 0).map((dia) => dia.valor);

    const menorFaturamento = Math.min(...valoresValidos);
    const maiorFaturamento = Math.max(...valoresValidos);

    const soma = valoresValidos.reduce((acc, val) => acc + val, 0);
    const media = soma / valoresValidos.length;

    const diasAcimaMedia = faturamento.filter((dia) => dia.valor > media).length;

    return { menorFaturamento, maiorFaturamento, diasAcimaMedia };
};

module.exports = analisarFaturamento;