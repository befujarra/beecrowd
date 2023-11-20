var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

const entrada = lines.shift();

const anos = Math.trunc(entrada / 365);
const resto = Math.trunc(entrada % 365);

const meses = Math.trunc(resto / 30);
const dias = Math.trunc(resto % 30);

console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${dias} dia(s)`);
