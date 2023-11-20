var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

let inteiro = parseInt(lines.shift());
let contadorImpares = 0;

while (contadorImpares < 6) {
  if (inteiro % 2 !== 0) {
    console.log(inteiro);
    contadorImpares++;
  }

  inteiro++;
}
