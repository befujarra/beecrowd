var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");
const [A, B, C, D] = lines.map((item) => parseInt(item));

let teste1 = B > C;
let teste2 = D > A;
let teste3 = C + D > A + B;
let teste4 = C > 0;
let teste5 = D > 0;
let sePar = A % 2 == 0;

if (teste1 && teste2 && teste3 && teste4 && teste5 && sePar) {
  console.log("Valores aceitos");
} else {
  console.log("Valores nao aceitos");
}
