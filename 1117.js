var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let notasValidas = 0;
let somarNotas = 0;

while (notasValidas < 2) {
  const nota = parseFloat(lines.shift());

  if (nota < 0 || nota > 10) {
    console.log("nota invalida");
  } else {
    notasValidas++;
    somarNotas += nota;
  }
}

const media = (somarNotas / notasValidas).toFixed(2);
console.log(`media = ${media}`);
