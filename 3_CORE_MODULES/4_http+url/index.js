const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  const url = require("url").parse(req.url, true);
  const name = url.query.name;

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  if (!name) {
    res.end(
      "<h1>Preencha o seu nome</h1><form method='GET'><input type='text' name='name'><input type='submit'></form>"
    );
  } else {
    res.end(`<h1>Ola ${name}</h1>`);
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
