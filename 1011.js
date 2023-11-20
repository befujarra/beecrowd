const input = require("fs").readFileSync("stdin", "utf8");

var linhas = input.split(" ");

var valorA = parseFloat(linhas.shift());
var valorC = parseFloat(linhas.shift());
var valorB = parseFloat(linhas.shift());

console.log(valorA);
