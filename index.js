const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Configuração do Proxy
const apiProxy = createProxyMiddleware('/api', {
  target: 'http://20.88.41.42',  // Endereço do servidor de destino
  changeOrigin: true,           // Altera a origem da requisição para o servidor de destino
  pathRewrite: {
    '^/api': '/api/categoria/v1',  // Rota da API que será chamada
  },
});

// Adiciona o middleware do proxy
app.use('/api', apiProxy);

// Inicia o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
