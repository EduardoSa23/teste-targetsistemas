const calcularSoma = require("./exercicios/soma");
const verificarFibonacci = require("./exercicios/fibonacci");
const analisarFaturamento = require("./exercicios/analiseFaturamento");
const calcularPercentualEstados = require("./exercicios/representacaoEstados");
const inverterString = require("./exercicios/inverterString");

// Questão 1
console.log("Questão 1:", calcularSoma());

// Questão 2
const numero = 21;
console.log(`Questão 2: O número ${numero} ${verificarFibonacci(numero) ? "pertence" : "não pertence"} à sequência de Fibonacci.`);

// Questão 3
const { menorFaturamento, maiorFaturamento, diasAcimaMedia } = analisarFaturamento();
console.log("Questão 3:");
console.log("Menor faturamento:", menorFaturamento);
console.log("Maior faturamento:", maiorFaturamento);
console.log("Dias acima da média:", diasAcimaMedia);

// Questão 4
console.log("Questão 4:");
calcularPercentualEstados().forEach(({ estado, percentual }) => {
    console.log(`${estado}: ${percentual}%`);
});

// Questão 5
const texto = "OpenAI";
console.log("Questão 5:");
console.log(`String invertida de '${texto}':`, inverterString(texto));
