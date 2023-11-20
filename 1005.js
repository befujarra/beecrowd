const input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");
var peso1 = 3.5;
var peso2 = 7.5;
var notaA = parseFloat(valores.shift());
var notaB = parseFloat(valores.shift());
var calcNotaA = notaA * peso1;
var calcNotaB = notaB * peso2;
var media = (calcNotaA + calcNotaB) / (peso1 + peso2);
console.log("MEDIA = " + media.toFixed(5));
