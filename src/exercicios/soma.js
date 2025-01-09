const calcularSoma = () => {
    let indice = 13;
    let soma = 0;
    let k = 0;

    while (k < indice) {
        k += 1;
        soma += k;
    }

    return soma;
};

module.exports = calcularSoma;