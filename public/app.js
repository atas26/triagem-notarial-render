const form = document.getElementById('triagemForm');
const resultado = document.getElementById('resultado');
const emptyState = document.getElementById('emptyState');
const resultadoTitulo = document.getElementById('resultadoTitulo');
const resultadoSubtitulo = document.getElementById('resultadoSubtitulo');
const resultadoSecoes = document.getElementById('resultadoSecoes');
const textoCopiavel = document.getElementById('textoCopiavel');
const toast = document.getElementById('toast');
const atoSelect = document.getElementById('ato');

function obterSelecionados() {
  return {
    ato: document.getElementById('ato').value,
    temImovel: document.getElementById('temImovel').checked,
    imovelRural: document.getElementById('imovelRural').checked,
    dominioUniao: document.getElementById('dominioUniao').checked,
    temPJ: document.getElementById('temPJ').checked,
    temProcuracao: document.getElementById('temProcuracao').checked,
    temEstrangeiro: document.getElementById('temEstrangeiro').checked,
    temFinanciamento: document.getElementById('temFinanciamento').checked,
    temContaNotarial: document.getElementById('temContaNotarial').checked,
    temTributo: document.getElementById('temTributo').checked,
    conteudoEconomico: document.getElementById('conteudoEconomico').checked,
    atoEletronico: document.getElementById('atoEletronico').checked,
    haMenorOuIncapaz: document.getElementById('haMenorOuIncapaz').checked,
    observacoes: document.getElementById('observacoes').value.trim()
  };
}

const linksDocumentais = [
  { termos: ['CPF/MF', 'CPF'], url: 'https://servicos.receita.fazenda.gov.br/servicos/cpf/consultasituacao/consultapublica.asp' },
  { termos: ['certidões de nascimento, casamento e óbito', 'certidão de casamento', 'certidão de nascimento', 'certidão de óbito', 'certidões de nascimento', 'certidões de casamento'], url: 'https://home.registrocivil.org.br/' },
  { termos: ['pacto antenupcial', 'registro do pacto'], url: 'https://ridigital.org.br/' },
  { termos: ['procuração pública', 'substabelecimento'], url: 'https://buscacep.org.br/' },
  { termos: ['certidão negativa de testamento', 'certidão de testamento', 'Registro Central de Testamentos On-Line', 'RCTO'], url: 'https://www.buscatestamento.org.br/CertidaoOnline/SolicitacaoTestamento.aspx' },
  { termos: ['CENSEC'], url: 'https://www.censec.org.br/' },
  { termos: ['certidão de ações reais e pessoais reipersecutórias', 'ações reais e pessoais reipersecutórias', 'certidão de ônus reais', 'ônus reais', 'certidão atualizada da matrícula', 'certidão de propriedade de bens imóveis', 'matrícula', 'transcrição', 'Registro de Imóveis'], url: 'https://ridigital.org.br/' },
  { termos: ['certidão de dados cadastrais'], url: 'https://prefeitura.sp.gov.br/web/fazenda/servicos/certidoes/' },
  { termos: ['certidão de tributos imobiliários', 'certidão de débitos de tributos imobiliários', 'prova de quitação dos tributos municipais', 'tributos municipais'], url: 'https://duc.prefeitura.sp.gov.br/certidoes/forms_anonimo/frmConsultaEmissaoCertificado.aspx' },
  { termos: ['carnê de IPTU', 'IPTU'], url: 'https://iptu.prefeitura.sp.gov.br/' },
  { termos: ['guia do ITBI', 'ITBI'], url: 'https://itbi.prefeitura.sp.gov.br/forms/frm_sql.aspx?tipo=SQL#/' },
  { termos: ['ITCMD'], url: 'https://www10.fazenda.sp.gov.br/ITCMD_DEC/Default.aspx' },
  { termos: ['Justiça Estadual'], url: 'https://www.tjsp.jus.br/Certidoes/Certidoes/CertidoesPrimeiraInstancia' },
  { termos: ['Justiça Federal'], url: 'https://www.jfsp.jus.br/servicos-judiciais/certidoes/' },
  { termos: ['Justiça Trabalhista', 'CNDT', 'certidão trabalhista'], url: 'https://cndt-certidao.tst.jus.br/inicio.faces' },
  { termos: ['Receita Federal'], url: 'https://servicos.receitafederal.gov.br/servico/certidoes/#/home' },
  { termos: ['CCIR'], url: 'https://sncr.serpro.gov.br/ccir/emissao' },
  { termos: ['CAR'], url: 'https://www.car.gov.br/#/consultar' },
  { termos: ['ITR'], url: 'https://servicos.receitafederal.gov.br/servico/certidoes/#/home' },
  { termos: ['SPU', 'terreno da União', 'domínio útil'], url: 'https://sistema.patrimoniodetodos.gov.br/' },
  { termos: ['JUCESP'], url: 'https://portalfacilitasp.sp.gov.br/facilitasp' },
  { termos: ['indisponibilidade'], url: 'https://indisponibilidade.onr.org.br/' }
];

function regrasDocumentaisOrdenadas() {
  return linksDocumentais
    .flatMap(regra => regra.termos.map(termo => ({ termo, url: regra.url })))
    .sort((a, b) => b.termo.length - a.termo.length);
}

function escapeHtml(texto) {
  return String(texto)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function linkificarTextoDocumental(texto) {
  const original = String(texto);
  const lower = original.toLowerCase();
  const candidatos = [];

  regrasDocumentaisOrdenadas().forEach(regra => {
    const termoLower = regra.termo.toLowerCase();
    let pos = lower.indexOf(termoLower);

    while (pos !== -1) {
      candidatos.push({
        start: pos,
        end: pos + termoLower.length,
        url: regra.url
      });

      pos = lower.indexOf(termoLower, pos + termoLower.length);
    }
  });

  candidatos.sort((a, b) => a.start - b.start || (b.end - b.start) - (a.end - a.start));

  const selecionados = [];
  let limite = 0;

  candidatos.forEach(candidato => {
    if (candidato.start >= limite) {
      selecionados.push(candidato);
      limite = candidato.end;
    }
  });

  if (!selecionados.length) return escapeHtml(original);

  let html = '';
  let cursor = 0;

  selecionados.forEach(match => {
    html += escapeHtml(original.slice(cursor, match.start));
    html += `<a class="doc-link" href="${escapeHtml(match.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(original.slice(match.start, match.end))}</a>`;
    cursor = match.end;
  });

  html += escapeHtml(original.slice(cursor));

  return html;
}

function criarSecao(titulo, itens, classe = '', aplicarLinksDocumentais = false) {
  if (!itens || itens.length === 0) return '';

  const lis = itens
    .map(item => `<li>${aplicarLinksDocumentais ? linkificarTextoDocumental(item) : escapeHtml(item)}</li>`)
    .join('');

  return `<div class="section ${classe}"><h3>${escapeHtml(titulo)}</h3><ul>${lis}</ul></div>`;
}

function criarSecaoAgrupada(titulo, grupos, classe = '', aplicarLinksDocumentais = false) {
  if (!grupos || grupos.length === 0) return '';

  const conteudo = grupos
    .filter(grupo => grupo.itens && grupo.itens.length > 0)
    .map(grupo => {
      const tituloDivergencia = /^Divergências|^Diferenças/i.test(grupo.titulo || '');

      const lis = grupo.itens.map(item => {
        const texto = String(item);
        const divergencia =
          /^Divergência|^Diferença/i.test(texto) ||
          /testamento invalidado, revogado, rompido ou caduco/i.test(texto);

        return `<li class="${divergencia ? 'divergencia-item' : ''}">${aplicarLinksDocumentais ? linkificarTextoDocumental(texto) : escapeHtml(texto)}</li>`;
      }).join('');

      return `<h4 class="group-title ${tituloDivergencia ? 'divergencia-title' : ''}">${escapeHtml(grupo.titulo)}</h4><ul class="grouped-list">${lis}</ul>`;
    })
    .join('');

  if (!conteudo) return '';

  return `<div class="section ${classe}"><h3>${escapeHtml(titulo)}</h3>${conteudo}</div>`;
}

function adicionarGruposAoTexto(linhas, titulo, grupos) {
  if (!grupos || !grupos.length) return;

  linhas.push('');
  linhas.push(`${titulo}:`);

  grupos.forEach(grupo => {
    if (!grupo.itens || !grupo.itens.length) return;

    linhas.push(`- ${grupo.titulo}`);
    grupo.itens.forEach((item, i) => linhas.push(`  ${i + 1}. ${item}`));
  });
}

function montarTexto(t) {
  const linhas = [];

  linhas.push('TRIAGEM NOTARIAL');
  linhas.push('');
  linhas.push(`Ato: ${t.titulo}`);
  linhas.push('');
  linhas.push('Documentos e informações iniciais:');

  t.documentos.forEach((item, i) => linhas.push(`${i + 1}. ${item}`));

  if (t.imovel.length) {
    linhas.push('');
    linhas.push('Documentos do imóvel ou do bem:');
    t.imovel.forEach((item, i) => linhas.push(`${i + 1}. ${item}`));
  }

  adicionarGruposAoTexto(linhas, 'Documentos complementares', t.complementaresGrupos);
  adicionarGruposAoTexto(linhas, 'Observações Nacionais (CNJ): diferenças com as cautelas locais', t.conformidadeGrupos);
  adicionarGruposAoTexto(linhas, 'Observações São Paulo: diferenças e cautelas locais', t.saoPauloGrupos);

  if (t.tributos.length) {
    linhas.push('');
    linhas.push('Tributos, guias e isenções:');
    t.tributos.forEach((item, i) => linhas.push(`${i + 1}. ${item}`));
  }

  if (t.atencao.length) {
    linhas.push('');
    linhas.push('Pontos de atenção:');
    t.atencao.forEach((item, i) => linhas.push(`${i + 1}. ${item}`));
  }

  linhas.push('');
  linhas.push('Pendências antes da lavratura:');
  t.pendencias.forEach((item, i) => linhas.push(`${i + 1}. ${item}`));

  if (t.observacoes) {
    linhas.push('');
    linhas.push('Observações informadas:');
    linhas.push(t.observacoes);
  }

  linhas.push('');
  linhas.push('Aviso: checklist orientativo. A lista não substitui a qualificação notarial, a análise da serventia competente, a conferência dos documentos originais, a legislação local aplicável, a tabela de emolumentos ou a orientação jurídica do caso concreto.');

  return linhas.join('\n');
}

function renderizarTriagem(triagem) {
  resultadoTitulo.textContent = triagem.titulo;
  resultadoSubtitulo.textContent = triagem.resumo;

  resultadoSecoes.innerHTML = [
    criarSecao('Documentos e informações iniciais', triagem.documentos, '', true),
    criarSecao('Documentos do imóvel ou do bem', triagem.imovel, '', true),
    criarSecaoAgrupada('Documentos complementares', triagem.complementaresGrupos, '', true),
    criarSecaoAgrupada('Observações Nacionais (CNJ): diferenças com as cautelas locais', triagem.conformidadeGrupos, 'okbox'),
    criarSecaoAgrupada('Observações São Paulo: diferenças e cautelas locais', triagem.saoPauloGrupos, 'spbox'),
    criarSecao('Tributos, guias e isenções', triagem.tributos),
    criarSecao('Pontos de atenção', triagem.atencao, 'attention'),
    criarSecao('Pendências antes da lavratura', triagem.pendencias),
    triagem.observacoes ? criarSecao('Observações informadas', [triagem.observacoes]) : ''
  ].join('');

  textoCopiavel.textContent = montarTexto(triagem);
  emptyState.style.display = 'none';
  resultado.classList.add('active');
  document.getElementById('resultadoCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function mostrarToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2100);
}

async function carregarAtos() {
  try {
    const resposta = await fetch('/api/atos');
    const dados = await resposta.json();

    if (!resposta.ok || !dados.ok || !Array.isArray(dados.atos)) return;

    atoSelect.innerHTML = '<option value="">Selecione</option>';

    dados.atos.forEach(ato => {
      const option = document.createElement('option');
      option.value = ato.id;
      option.textContent = ato.nome;
      atoSelect.appendChild(option);
    });
  } catch (erro) {
    mostrarToast('Não foi possível carregar os atos do servidor.');
  }
}

form.addEventListener('submit', async function(e) {
  e.preventDefault();

  const selecionados = obterSelecionados();

  if (!selecionados.ato) {
    mostrarToast('Selecione o tipo de ato.');
    atoSelect.focus();
    return;
  }

  try {
    const resposta = await fetch('/api/triagem', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(selecionados)
    });

    const dados = await resposta.json();

    if (!resposta.ok || !dados.ok || !dados.triagem) {
      throw new Error(dados.mensagem || 'Falha ao gerar triagem.');
    }

    renderizarTriagem(dados.triagem);
  } catch (erro) {
    mostrarToast('Não foi possível gerar a triagem pelo servidor.');
  }
});

document.getElementById('pdfBtn').addEventListener('click', function() {
  if (!textoCopiavel.textContent.trim()) {
    mostrarToast('Gere o checklist antes de gerar o PDF.');
    return;
  }

  window.print();
});

document.getElementById('limparBtn').addEventListener('click', function() {
  form.reset();
  resultado.classList.remove('active');
  emptyState.style.display = 'flex';
  resultadoSecoes.innerHTML = '';
  textoCopiavel.textContent = '';
  document.getElementById('ato').focus();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function setupCounter() {
  const counter = document.getElementById('visitCounter');
  if (!counter) return;

  const page = 'portalnotarial.com.br/triagem-notarial.html';
  const encodedPage = page.split('/').map(encodeURIComponent).join('/');

  counter.src = `https://hits.sh/${encodedPage}.svg?label=Visitas%3A&color=e5e7eb&labelColor=ffffff&style=flat-square`;

  counter.onerror = () => {
    const holder = counter.closest('.visit');
    if (holder) holder.textContent = 'Visitas: 0';
  };
}

setupCounter();
carregarAtos();

document.getElementById('ato').addEventListener('change', function() {
  const atosComImovel = [
    'compraVenda',
    'doacao',
    'usucapiao',
    'adjudicacao',
    'alienacaoFiduciaria',
    'distrato',
    'sobrepartilha',
    'dacaoPagamento'
  ];

  if (atosComImovel.includes(this.value)) {
    document.getElementById('temImovel').checked = true;
  }
});