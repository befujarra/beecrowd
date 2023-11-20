var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let contador = 0;
let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;

while (contador < 5) {
  let teste = parseInt(lines.shift());

  if (teste % 2 === 0) {
    pares++;
  }

  if (teste % 2 !== 0) {
    impares++;
  }

  if (teste > 0) {
    positivos++;
  }

  if (teste < 0) {
    negativos++;
  }

  contador++;
}

console.log(`${pares} valor(es) par(es)`);
console.log(`${impares} valor(es) impar(es)`);
console.log(`${positivos} valor(es) positivo(s)`);
console.log(`${negativos} valor(es) negativo(s)`);
