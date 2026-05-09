const express = require("express");
const path = require("path");

const atos = require("./src/regras/atos");
const { obterChecklist } = require("./src/regras/documentos");
const { obterObservacoesNacionais } = require("./src/regras/observacoes-nacionais");
const { obterObservacoesSp } = require("./src/regras/observacoes-sp");

const app = express();

app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    service: "triagem-notarial",
    status: "online"
  });
});

app.get("/api/atos", (req, res) => {
  res.json({
    ok: true,
    atos
  });
});

app.post("/api/triagem", (req, res) => {
  const dados = req.body || {};
  const situacoes = Array.isArray(dados.situacoes) ? dados.situacoes : [];
  const atoSelecionado = atos.find((ato) => ato.id === dados.tipoAto);

  if (!atoSelecionado) {
    return res.status(400).json({
      ok: false,
      mensagem: "Tipo de ato não informado ou inválido."
    });
  }

  const checklist = obterChecklist(dados.tipoAto, situacoes);
  const observacoesNacionais = obterObservacoesNacionais(dados.tipoAto, situacoes);
  const observacoesSp = obterObservacoesSp(dados.tipoAto, situacoes);

  res.json({
    ok: true,
    mensagem: "Triagem gerada pelo backend.",
    atoSelecionado,
    situacoes,
    checklist,
    observacoesNacionais,
    observacoesSp
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Triagem Notarial rodando na porta ${PORT}`);
});