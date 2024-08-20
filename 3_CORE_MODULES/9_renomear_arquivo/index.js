const fs = require("fs");

const arqAntigo = "arquivo.txt";
const arqNovo = "novo.txt";

fs.rename(arqAntigo, arqNovo, (err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("Arquivo renomeado");
  }
});
