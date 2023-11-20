var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let valor = lines[0];

let array = [100, 50, 20, 10, 5, 2, 1];
console.log(valor);

for (i = 0; i < 7; i++) {
  console.log(`${Math.trunc(valor / array[i])} nota(s) de R$ ${array[i]},00`);

  valor = Math.trunc(valor % array[i]);
}
