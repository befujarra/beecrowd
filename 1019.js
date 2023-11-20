var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");

let valor = lines.shift();

const horas = Math.trunc(valor / 3600);
const resto = valor % 3600;

const minutos = Math.trunc(resto / 60);
const segundos = resto % 60;

console.log(`${horas}:${minutos}:${segundos}`);
