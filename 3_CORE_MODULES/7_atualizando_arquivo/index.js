const http = require("http");
const fs = require("fs");

const port = 3000;

const server = http.createServer((req, res) => {
  const url = require("url").parse(req.url, true);
  const name = url.query.name;

  if (!name) {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else {
    const nameInNewLine = name + ",\r\n";

    fs.appendFile("arquivo.txt", nameInNewLine, (err) => {
      res.writeHead(302, { Location: "/" });
      res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
