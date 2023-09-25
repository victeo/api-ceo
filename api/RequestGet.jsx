import React, { useState, useEffect } from 'react';

function RequestGet({ url }) {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function fazerRequestGet() {
      try {
        const resposta = await fetch(url);

        if (!resposta.ok) {
          throw new Error(`Erro na requisição: ${resposta.statusText}`);
        }

        const dados = await resposta.json();
        setDados(dados);
      } catch (erro) {
        setErro(`Erro: ${erro.message}`);
      } finally {
        setLoading(false);
      }
    }

    fazerRequestGet();
  }, [url]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (erro) {
    return <div>{erro}</div>;
  }

  return <div>{JSON.stringify(dados)}</div>;
}

export default RequestGet;
