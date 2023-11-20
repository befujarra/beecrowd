const input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");
var valorA = parseInt(valores.shift());
var valorB = parseInt(valores.shift());
var PROD = valorA * valorB;
console.log("PROD = " + PROD);
