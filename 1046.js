var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

const inicio = parseInt(lines.shift());
const fim = parseInt(lines.shift());
let resultado;

if (inicio < fim) {
  resultado = fim - inicio;
} else {
  resultado = 24 - inicio + fim;
}

console.log(`O JOGO DUROU ${resultado} HORA(S)`);
