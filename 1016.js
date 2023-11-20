var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split(" ");

const valor = lines.shift();

const minutos = valor * 2;

console.log(`${minutos} minutos`);
