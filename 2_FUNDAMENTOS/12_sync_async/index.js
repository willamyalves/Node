const fs = require("fs");

console.log("Início");

fs.writeFile("arquivo.txt", "Conteudo do arquivo", (err) => {
  setTimeout(() => {
    console.log("Arquivo criado");
  }, 5000);
});

console.log("Fim");
