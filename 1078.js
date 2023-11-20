var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let inteiro = parseInt(lines);

for (let i = 1; i <= 10; i++) {
  console.log(`${i} x ${inteiro} = ${i * inteiro}`);
}
