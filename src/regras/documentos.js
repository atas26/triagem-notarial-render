const links = require("./links");

const documentosComuns = [
  {
    nome: "Documento de identidade oficial das partes",
    observacao: "RG, CNH, carteira profissional válida ou outro documento oficial aceito para identificação."
  },
  {
    nome: "CPF",
    link: links.cpf,
    observacao: "Comprovante de situação cadastral no CPF."
  },
  {
    nome: "Comprovante de estado civil",
    link: links.registroCivil,
    observacao: "Certidão de nascimento, certidão de casamento, certidão de casamento com averbação de divórcio ou certidão de óbito do cônjuge falecido, conforme o caso."
  }
];

const documentosPorAto = {
  "compra-venda": [
    {
      nome: "Título de aquisição do alienante",
      observacao: "Escritura anterior, formal de partilha, carta de sentença, contrato registrado ou outro título que comprove a aquisição."
    },
    {
      nome: "Declaração sobre preço, forma de pagamento e quitação",
      observacao: "Informar valor do negócio, forma de pagamento, existência de sinal, arras, saldo, financiamento ou quitação."
    }
  ],

  "doacao": [
    {
      nome: "Informação sobre parentesco entre doador e donatário",
      observacao: "Necessária para análise tributária, legítima, eventual colação e regras sucessórias aplicáveis."
    },
    {
      nome: "Informação sobre reserva de usufruto, cláusulas restritivas ou reversão",
      observacao: "Indicar se haverá usufruto, incomunicabilidade, impenhorabilidade, inalienabilidade ou reversão."
    }
  ],

  "inventario": [
    {
      nome: "Certidão de óbito do autor da herança",
      link: "https://home.registrocivil.org.br/",
      observacao: "Documento essencial para abertura da sucessão."
    },
    {
      nome: "Certidão de testamento",
      link: links.buscaTestamento,
      observacao: "Verificar existência de testamento."
    },
    {
      nome: "Documentos dos herdeiros e do meeiro, se houver",
      observacao: "Documentos de identidade, CPF e certidões de estado civil."
    },
    {
      nome: "Plano de partilha",
      observacao: "Indicar bens, valores, dívidas, meação e quinhões hereditários."
    },
    {
      nome: "Declaração de inexistência de testamento ou autorização judicial, conforme o caso",
      observacao: "Necessária para orientar a qualificação do inventário extrajudicial."
    },
    {
      nome: "Documentos do advogado ou defensor público",
      observacao: "Nome, inscrição na OAB ou identificação funcional, endereço profissional e assinatura no ato."
    }
  ],

  "divorcio-extincao-uniao-estavel": [
    {
      nome: "Certidão de casamento atualizada",
      link: "https://home.registrocivil.org.br/",
      observacao: "No divórcio, verificar regime de bens e eventual pacto antenupcial."
    },
    {
      nome: "Pacto antenupcial, se houver",
      link: links.riDigital,
      observacao: "Verificar escritura e registro do pacto antenupcial."
    },
    {
      nome: "Relação de bens, dívidas e partilha",
      observacao: "Informar se haverá partilha, manutenção de bens em comum ou inexistência de bens."
    },
    {
      nome: "Informação sobre filhos",
      observacao: "Indicar existência de filhos comuns, idade, capacidade civil e eventual solução judicial prévia sobre guarda, convivência e alimentos."
    },
    {
      nome: "Declaração sobre gravidez",
      observacao: "Informação necessária para análise da viabilidade do ato extrajudicial."
    },
    {
      nome: "Documentos do advogado ou defensor público",
      observacao: "Nome, inscrição na OAB ou identificação funcional, endereço profissional e assinatura no ato."
    }
  ],

  "uniao-estavel": [
    {
      nome: "Documentos pessoais dos conviventes",
      observacao: "Documento de identidade, CPF e certidão de estado civil atualizada."
    },
    {
      nome: "Declaração sobre início da união estável",
      observacao: "Informar a data ou período inicial da convivência pública, contínua e duradoura."
    },
    {
      nome: "Regime de bens escolhido",
      observacao: "Indicar o regime aplicável à união estável e eventual disciplina patrimonial específica."
    },
    {
      nome: "Informação sobre filhos comuns, se houver",
      observacao: "Pode ser relevante para a qualificação do ato e para a redação da escritura."
    }
  ],

  "sobrepartilha": [
    {
      nome: "Escritura, formal de partilha ou carta de sentença da partilha anterior",
      observacao: "Documento necessário para identificar a partilha já realizada."
    },
    {
      nome: "Documentos do bem a sobrepartilhar",
      observacao: "A documentação varia conforme o bem seja imóvel, veículo, quota social, aplicação financeira ou outro direito."
    },
    {
      nome: "Declaração sobre o motivo da sobrepartilha",
      observacao: "Indicar omissão, descoberta posterior do bem, erro material, bem litigioso ou outra razão."
    }
  ],

  "nomeacao-inventariante": [
    {
      nome: "Certidão de óbito do autor da herança",
      link: "https://home.registrocivil.org.br/",
      observacao: "Documento necessário para identificar a sucessão."
    },
    {
      nome: "Documentos do nomeado inventariante",
      observacao: "Documento de identidade, CPF, estado civil, profissão e domicílio."
    },
    {
      nome: "Documentos dos herdeiros ou interessados anuentes",
      observacao: "Necessários para verificar legitimidade e consenso."
    },
    {
      nome: "Indicação da finalidade da nomeação",
      observacao: "Exemplo: representação do espólio perante banco, órgão público, registro imobiliário ou processo administrativo."
    }
  ],

  "procuracao": [
    {
      nome: "Dados do outorgante",
      observacao: "Documento de identidade, CPF, estado civil, profissão, domicílio e capacidade civil."
    },
    {
      nome: "Dados do procurador",
      observacao: "Nome completo, documento de identidade, CPF, estado civil, profissão e domicílio."
    },
    {
      nome: "Descrição dos poderes",
      observacao: "Indicar com precisão os poderes outorgados, especialmente quando envolver alienação, oneração, recebimento de valores, quitação, representação empresarial ou atos bancários."
    },
    {
      nome: "Dados do bem ou negócio, se houver",
      observacao: "Quando a procuração for específica, indicar imóvel, veículo, quotas, conta bancária, processo ou negócio jurídico relacionado."
    }
  ],

  "ata-notarial": [
    {
      nome: "Identificação do solicitante",
      observacao: "Documento de identidade, CPF, qualificação e interesse na constatação."
    },
    {
      nome: "Descrição do fato a ser constatado",
      observacao: "Informar o que deve ser verificado pelo tabelião ou preposto autorizado."
    },
    {
      nome: "Indicação do meio de verificação",
      observacao: "Exemplo: site, aplicativo, conversa eletrônica, documento, comparecimento presencial, diligência externa ou plataforma digital."
    },
    {
      nome: "Arquivos, links, telas ou documentos relacionados",
      observacao: "Fornecer os elementos necessários à constatação, sem substituir a verificação notarial."
    }
  ],

  "usucapiao-extrajudicial": [
    {
      nome: "Ata notarial para usucapião",
      observacao: "A ata deve descrever a posse, o tempo, a modalidade pretendida e os elementos verificados pelo tabelião."
    },
    {
      nome: "Planta e memorial descritivo",
      observacao: "Documentos técnicos do imóvel, conforme exigências registrais aplicáveis."
    },
    {
      nome: "ART, RRT ou TRT",
      observacao: "Documento de responsabilidade técnica do profissional que elaborou a planta e o memorial."
    },
    {
      nome: "Documentos de posse",
      observacao: "Contas, contratos, declarações, fotos, correspondências, comprovantes tributários ou outros elementos que demonstrem posse."
    },
    {
      nome: "Certidões forenses",
      observacao: "Certidões exigidas para instrução do procedimento extrajudicial de usucapião."
    }
  ],

  "adjudicacao-compulsoria-extrajudicial": [
    {
      nome: "Contrato, compromisso de compra e venda ou cessão",
      observacao: "Documento que demonstre a cadeia negocial e a obrigação de transmitir."
    },
    {
      nome: "Prova de quitação",
      observacao: "Recibos, comprovantes, declaração de quitação ou outros documentos que demonstrem pagamento integral."
    },
    {
      nome: "Ata notarial de adjudicação compulsória extrajudicial",
      observacao: "Deve documentar os elementos do caso, cadeia negocial, quitação e providências adotadas."
    },
    {
      nome: "Documentos do imóvel",
      observacao: "Matrícula, certidões e demais documentos necessários à qualificação do título."
    }
  ],

  "alienacao-fiduciaria": [
    {
      nome: "Dados do credor fiduciário",
      observacao: "Qualificação completa, documentos e poderes de representação, se pessoa jurídica."
    },
    {
      nome: "Dados do devedor fiduciante",
      observacao: "Qualificação completa e documentos pessoais ou societários."
    },
    {
      nome: "Descrição da dívida garantida",
      observacao: "Valor, vencimento, encargos, forma de pagamento e condições de inadimplemento."
    },
    {
      nome: "Descrição da garantia",
      observacao: "Identificação completa do imóvel, veículo ou outro bem dado em garantia, conforme o caso."
    }
  ],

  "dacao-em-pagamento": [
    {
      nome: "Documento da dívida a ser quitada",
      observacao: "Contrato, confissão de dívida, demonstrativo, declaração ou outro documento que identifique a obrigação."
    },
    {
      nome: "Descrição do bem dado em pagamento",
      observacao: "Imóvel, veículo, quotas, direitos ou outro bem usado para extinção da dívida."
    },
    {
      nome: "Declaração de quitação",
      observacao: "Indicar se a dação extingue total ou parcialmente a obrigação."
    }
  ],

  "confissao-divida": [
    {
      nome: "Identificação do credor e do devedor",
      observacao: "Documentos pessoais ou societários, poderes de representação e qualificação completa."
    },
    {
      nome: "Descrição da dívida",
      observacao: "Valor, origem, vencimento, forma de pagamento, encargos e condições de inadimplemento."
    },
    {
      nome: "Garantias, se houver",
      observacao: "Fiador, avalista, hipoteca, alienação fiduciária, penhor, caução ou outra garantia."
    }
  ],

  "pacto-antenupcial": [
    {
      nome: "Documentos pessoais dos nubentes",
      observacao: "Documento de identidade, CPF, estado civil, profissão e domicílio."
    },
    {
      nome: "Regime de bens escolhido",
      observacao: "Indicar o regime pretendido e eventuais regras patrimoniais específicas."
    },
    {
      nome: "Certidão de habilitação para casamento, se houver",
      observacao: "Pode auxiliar na identificação do procedimento matrimonial."
    }
  ],

  "testamento-revogacao": [
    {
      nome: "Documentos pessoais do testador",
      observacao: "Documento de identidade, CPF, estado civil, profissão, domicílio e capacidade civil."
    },
    {
      nome: "Informações sobre herdeiros necessários",
      observacao: "Indicar descendentes, ascendentes, cônjuge ou companheiro, conforme o caso."
    },
    {
      nome: "Indicação dos bens e beneficiários",
      observacao: "Informações necessárias para orientar a redação das disposições testamentárias."
    },
    {
      nome: "Dados do testamento anterior, em caso de revogação",
      observacao: "Informar data, livro, folhas, tabelionato e espécie do testamento a ser revogado, quando disponível."
    }
  ],

  "distrato-rescisao": [
    {
      nome: "Contrato ou escritura a ser distratada",
      observacao: "Documento que deu origem ao negócio jurídico."
    },
    {
      nome: "Declaração das partes sobre efeitos do distrato",
      observacao: "Informar restituição de valores, quitação, posse, multas, indenizações e responsabilidades pendentes."
    },
    {
      nome: "Documentos do bem envolvido",
      observacao: "Quando houver imóvel, veículo, quotas ou outro bem, selecionar a situação correspondente na triagem."
    }
  ]
};

const documentosImovel = [
  {
    nome: "Matrícula ou transcrição atualizada do imóvel",
    link: "https://ridigital.org.br/",
    observacao: "Documento base para identificação do imóvel, titularidade, ônus e atos registrados."
  },
  {
    nome: "Certidão de ônus reais",
    link: "https://ridigital.org.br/",
    observacao: "Verificar hipoteca, alienação fiduciária, usufruto, penhora, indisponibilidade, cláusulas restritivas e outros gravames."
  },
  {
    nome: "Certidão de ações reais e pessoais reipersecutórias",
    link: "https://ridigital.org.br/",
    observacao: "Usada para verificar ações relacionadas ao imóvel ou à titularidade imobiliária."
  },
  {
    nome: "Cadastro municipal do imóvel",
    observacao: "Número de contribuinte, IPTU, inscrição imobiliária ou documento equivalente do município."
  },
  {
    nome: "Certidão de débitos de tributos imobiliários",
    observacao: "Certidão municipal relativa a IPTU, taxas e demais tributos incidentes sobre o imóvel urbano."
  }
];

const documentosPorSituacaoComplementar = {
  "imovel-rural": [
    {
      nome: "CCIR",
      link: links.ccir,
      observacao: "Certificado de Cadastro de Imóvel Rural."
    },
    {
      nome: "ITR",
      link: links.itr,
      observacao: "Certidão ou comprovante relacionado ao Imposto Territorial Rural."
    },
    {
      nome: "CAR",
      link: links.car,
      observacao: "Cadastro Ambiental Rural, quando aplicável."
    }
  ],

  "dominio-uniao": [
    {
      nome: "Certidão ou consulta da SPU",
      link: links.spu,
      observacao: "Usada quando houver domínio útil, benfeitorias, ocupação ou cessão de direitos sobre terreno da União."
    }
  ],

  "pessoa-juridica": [
    {
      nome: "Contrato social, estatuto ou ato constitutivo",
      observacao: "Documento necessário para verificar existência, representação e poderes."
    },
    {
      nome: "Última alteração contratual ou consolidação",
      observacao: "Necessária quando houver alteração de sócios, administradores, sede, objeto ou poderes."
    },
    {
      nome: "Certidão simplificada ou ficha cadastral da Junta Comercial",
      link: links.jucesp,
      observacao: "Para sociedades registradas na JUCESP, auxilia na verificação cadastral."
    },
    {
      nome: "CNPJ",
      link: links.cnpj,
      observacao: "Consulta cadastral da pessoa jurídica."
    }
  ],

  procuracao: [
    {
      nome: "Procuração pública ou substabelecimento",
      link: links.buscaCep,
      observacao: "Verificar poderes, validade, revogação, substabelecimento e suficiência para o ato."
    }
  ],

  estrangeiro: [
    {
      nome: "Documento estrangeiro com apostila ou legalização consular, quando aplicável",
      observacao: "Verificar tradução juramentada e registro em RTD quando exigido para produção de efeitos no Brasil."
    }
  ],

  financiamento: [
    {
      nome: "Instrumento de financiamento ou minuta bancária",
      observacao: "Verificar valor financiado, garantia, credor, condições de pagamento e forma de liberação dos recursos."
    }
  ],

  "conta-notarial": [
    {
      nome: "Instruções da conta notarial vinculada",
      observacao: "Informar valor, condições objetivas de liberação, beneficiário, prazo e vínculo com o negócio jurídico."
    }
  ],

  "tributo-isencao": [
    {
      nome: "Guia de ITBI, ITCMD ou documento de isenção",
      observacao: "A exigência varia conforme a natureza do ato e a legislação tributária aplicável."
    }
  ],

  "uif-coaf": [
    {
      nome: "Informações para conformidade UIF (COAF)",
      observacao: "Forma de pagamento, origem econômica, beneficiário final, pessoa exposta politicamente e eventual operação atípica."
    }
  ],

  "eletronico-hibrido": [
    {
      nome: "Dados para ato eletrônico ou híbrido",
      observacao: "Verificar videoconferência, assinatura eletrônica, e-Notariado, certificado digital e competência aplicável."
    }
  ]
};

function obterChecklist(tipoAto, situacoes = []) {
  const documentosIniciais = [
    ...documentosComuns,
    ...(documentosPorAto[tipoAto] || [])
  ];

  const documentosImovelBem = situacoes.includes("imovel")
    ? documentosImovel
    : [];

  const documentosComplementares = situacoes.flatMap((situacao) => {
    if (situacao === "imovel") return [];
    return documentosPorSituacaoComplementar[situacao] || [];
  });

  return {
    documentosIniciais,
    documentosImovelBem,
    documentosComplementares
  };
}

module.exports = {
  obterChecklist
};