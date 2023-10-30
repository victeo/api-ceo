const express = require('express');
const https = require('https');
const app = express();

app.use((req, res) => {
  const options = {
    hostname: 'api.ceo-victeo.vercel.app', // O host da API que você quer acessar
    path: req.url, // O caminho da requisição original
    method: req.method, // O método da requisição original (GET, POST, etc.)
    headers: req.headers, // Os headers da requisição original
  };

  const proxy = https.request(options, (response) => {
    res.set(response.headers);
    response.pipe(res, { end: true });
  });

  req.pipe(proxy, { end: true });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Proxy rodando na porta ${port}`);
});
