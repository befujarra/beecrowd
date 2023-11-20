var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const [x1, y1] = lines
  .shift()
  .split(" ")
  .map((item) => parseFloat(item));

const [x2, y2] = lines
  .shift()
  .split(" ")
  .map((item) => parseFloat(item));

const distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2).toFixed(4);

console.log(distancia);
