var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let arrayNumbers = lines.map((item) => parseInt(item));
let count = 0;

for (let i = 0; i < arrayNumbers.length; i++) {
  if (Math.abs(arrayNumbers[i] % 2) === 0) {
    count++;
  }
}

console.log(`${count} valores pares`);
