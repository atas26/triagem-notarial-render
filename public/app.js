const tipoAto = document.getElementById("tipoAto");
const btnTestar = document.getElementById("btnTestar");
const btnPdf = document.getElementById("btnPdf");
const resultado = document.getElementById("resultado");

function escaparHtml(valor) {
  return String(valor || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function carregarAtos() {
  tipoAto.innerHTML = '<option value="">Carregando tipos de ato...</option>';

  try {
    const resposta = await fetch("/api/atos");
    const dados = await resposta.json();

    if (!resposta.ok || dados.ok !== true || !Array.isArray(dados.atos)) {
      throw new Error("Não foi possível carregar os atos.");
    }

    tipoAto.innerHTML = '<option value="">Selecione</option>';

    dados.atos.forEach((ato) => {
      const option = document.createElement("option");
      option.value = ato.id;
      option.textContent = ato.nome;
      tipoAto.appendChild(option);
    });
  } catch (erro) {
    tipoAto.innerHTML = '<option value="">Erro ao carregar atos</option>';
    resultado.textContent = "Não foi possível carregar a lista de atos do servidor.";
  }
}

function montarDocumento(documento) {
  const nome = escaparHtml(documento.nome);
  const observacao = escaparHtml(documento.observacao);

  const nomeComLink = documento.link
    ? `<a href="${escaparHtml(documento.link)}" target="_blank" rel="noopener noreferrer">${nome}</a>`
    : nome;

  return `
    <li class="documento-item">
      <strong>${nomeComLink}</strong>
      ${observacao ? `<span>${observacao}</span>` : ""}
    </li>
  `;
}

function montarSecao(titulo, itens) {
  if (!Array.isArray(itens) || itens.length === 0) return "";

  return `
    <h4>${escaparHtml(titulo)}</h4>
    <ul>
      ${itens.map(montarDocumento).join("")}
    </ul>
  `;
}

function montarObservacao(item) {
  const classe = item.divergencia ? "observacao-item divergencia" : "observacao-item";

  return `
    <li class="${classe}">
      ${escaparHtml(item.texto)}
    </li>
  `;
}

function montarSecaoObservacoes(titulo, itens, classeExtra = "") {
  if (!Array.isArray(itens) || itens.length === 0) return "";

  return `
    <h4 class="${classeExtra}">${escaparHtml(titulo)}</h4>
    <ul>
      ${itens.map(montarObservacao).join("")}
    </ul>
  `;
}

function montarResultado(dados) {
  const ato = dados.atoSelecionado;
  const checklist = dados.checklist || {};

  if (!ato) {
    resultado.innerHTML = "Tipo de ato não localizado.";
    return;
  }

  resultado.innerHTML = `
    <section class="checklist">
      <h3>Checklist inicial</h3>
      <p><strong>Tipo de ato:</strong> ${escaparHtml(ato.nome)}</p>

      ${montarSecao("Documentos e informações iniciais", checklist.documentosIniciais)}
      ${montarSecao("Documentos do imóvel ou do bem", checklist.documentosImovelBem)}
      ${montarSecao("Documentos complementares", checklist.documentosComplementares)}

      ${montarSecaoObservacoes("Observações Nacionais (CNJ): diferenças com as cautelas locais", dados.observacoesNacionais)}
      ${montarSecaoObservacoes("Observações São Paulo: diferenças e cautelas locais", dados.observacoesSp, "titulo-sp")}
    </section>
  `;
}

btnTestar.addEventListener("click", async () => {
  if (!tipoAto.value) {
    resultado.textContent = "Selecione o tipo de ato antes de gerar a triagem.";
    tipoAto.focus();
    return;
  }

  resultado.textContent = "Gerando checklist...";

  try {
    const resposta = await fetch("/api/triagem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        tipoAto: tipoAto.value,
        situacoes: Array.from(document.querySelectorAll('input[name="situacoes"]:checked')).map((item) => item.value)
      })
    });

    const dados = await resposta.json();

    if (!resposta.ok || dados.ok !== true) {
      throw new Error(dados.mensagem || "A API respondeu com erro.");
    }

    montarResultado(dados);
  } catch (erro) {
    resultado.textContent =
      "Não foi possível gerar a triagem.\n\n" +
      "Verifique se o servidor está rodando com npm start.";
  }
});
btnPdf.addEventListener("click", () => {
  window.print();
});

carregarAtos();