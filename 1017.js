var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const kmPorLitro = 12;

const tempo = lines.shift();
const velocidade = lines.shift();

const resultado = ((velocidade / kmPorLitro) * tempo).toFixed(3);

console.log(resultado);
