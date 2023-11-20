const input = require("fs").readFileSync("stdin", "utf8");

var linhas = input.split("\n");

var valoresItem1 = linhas.shift().split(" ");
var valoresItem2 = linhas.shift().split(" ");

var codPeca1 = parseInt(valoresItem1.shift());
var qtdPeca1 = parseInt(valoresItem1.shift());
var valorPeça1 = valoresItem1.shift();

var codPeca2 = parseInt(valoresItem2.shift());
var qtdPeca2 = parseInt(valoresItem2.shift());
var valorPeca2 = valoresItem2.shift();

var valorFinalPeca1 = qtdPeca1 * valorPeca1;
var valorFinalPeca2 = qtdPeca2 * valorPeca2;
var resultadoFinal = valorFinalPeca1 + valorFinalPeca2;
console.log("VALOR A PAGAR: R$ " + resultadoFinal.toFixed(2));
