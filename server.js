const express = require('express');
const path = require('path');
const { obterAtos, montarTriagem } = require('./src/regras/triagem-core');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '1mb' }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/triagem-notarial', express.static(path.join(__dirname, 'public')));

app.get(['/api/health', '/triagem-notarial/api/health'], (req, res) => {
  res.json({
    ok: true,
    service: 'triagem-notarial',
    status: 'online'
  });
});

app.get(['/api/atos', '/triagem-notarial/api/atos'], (req, res) => {
  res.json({
    ok: true,
    atos: obterAtos()
  });
});

app.post(['/api/triagem', '/triagem-notarial/api/triagem'], (req, res) => {
  const triagem = montarTriagem(req.body || {});

  if (!triagem) {
    return res.status(400).json({
      ok: false,
      mensagem: 'Tipo de ato não informado ou inválido.'
    });
  }

  res.json({
    ok: true,
    triagem
  });
});

app.get(['/triagem-notarial', '/triagem-notarial/'], (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Triagem Notarial rodando na porta ${PORT}`);
});