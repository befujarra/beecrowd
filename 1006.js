const input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");
var peso1 = 2;
var peso2 = 3;
var peso3 = 5;
var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var C = parseFloat(valores.shift());

var calcNotaA = A * peso1;
var calcNotaB = B * peso2;
var calcNotaC = C * peso3;
var media = (calcNotaA + calcNotaB + calcNotaC) / (peso1 + peso2 + peso3);
console.log("MEDIA = " + media.toFixed(1));
