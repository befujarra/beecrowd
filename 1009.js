const input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");

var nome = parseInt(valores.shift());
var salario = parseInt(valores.shift());
var comissao = parseFloat(valores.shift());
var valorComissao = (comissao * 15) / 100;
var salarioFinal = valorComissao + salario;
console.log("TOTAL = R$ " + salarioFinal.toFixed(2));
