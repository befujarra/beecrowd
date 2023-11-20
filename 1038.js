var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

const codigo = parseInt(lines.shift());
const quantidade = parseInt(lines.shift());

switch (codigo) {
  case 1:
    total = (quantidade * 4).toFixed(2);
    break;
  case 2:
    total = (quantidade * 4.5).toFixed(2);
    break;
  case 3:
    total = (quantidade * 5).toFixed(2);
    break;
  case 4:
    total = (quantidade * 2).toFixed(2);
    break;
  case 5:
    total = (quantidade * 1.5).toFixed(2);
}

console.log(`Total: R$ ${total}`);
