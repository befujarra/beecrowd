var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const qtdValores = parseInt(lines.shift());

for (let i = 0; i < qtdValores; i++) {
  let valores = parseInt(lines.shift());

  if (valores % 2 === 0 && valores > 0) console.log("EVEN POSITIVE");

  if (valores % 2 !== 0 && valores > 0) console.log("ODD POSITIVE");

  if (valores === 0) console.log("NULL");

  if (valores % 2 === 0 && valores < 0) console.log("EVEN NEGATIVE");

  if (valores % 2 !== 0 && valores < 0) console.log("ODD NEGATIVE");
}
