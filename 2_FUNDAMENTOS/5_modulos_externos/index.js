const minimist = require("minimist");
const args = minimist(process.argv.slice(2));

const nome = args["nome"];
const idade = args["idade"];

console.log(nome);
console.log(idade);

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
