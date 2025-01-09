const estados = require("../dados/estados");

const calcularPercentualEstados = () => {
    const total = Object.values(estados).reduce((acc, val) => acc + val, 0);
    return Object.entries(estados).map(([estado, valor]) => ({
        estado,
        percentual: ((valor / total) * 100).toFixed(2),
    }));
};

module.exports = calcularPercentualEstados;