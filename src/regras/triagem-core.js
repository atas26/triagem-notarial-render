// Base textual gerada a partir do arquivo revisado da Triagem Notarial.
// Mantida no backend para evitar exposição integral no HTML público.

const dadosAtos = {
  "compraVenda": {
    "nome": "Compra e venda",
    "resumo": "Checklist inicial para escritura pública de compra e venda de bens imóveis ou móveis.",
    "documentos": [
      "Pessoa física, documento de identidade oficial original ou documento equivalente e CPF.",
      "Estado civil, solteiro, certidão de nascimento quando necessária à comprovação. Casado, certidão de casamento. Separado ou divorciado, certidão de casamento com averbação da separação ou do divórcio. Viúvo, certidão de casamento e certidão de óbito do cônjuge falecido.",
      "Regime de bens, certidão de casamento com indicação do regime, certidão do pacto antenupcial registrado no Registro de Imóveis quando o regime for diverso do legal.",
      "Cônjuge ou convivente, representante, interveniente ou anuente, documento de identidade oficial, CPF e qualificação completa quando comparecer ou quando o ato exigir anuência.",
      "Representação, instrumento de procuração pública ou substabelecimento, com poderes expressos e especiais quando exigidos. Se a procuração for utilizada para o ato, apresentar certidão expedida nos 90 dias anteriores quando aplicável (em alguns estados é exigido). Em São Paulo a certidão é exigida.",
      "Preço e forma de pagamento, declaração das partes e, se houver, comprovantes de transferência, recibos, cheques identificados por número e banco sacado, contrato preliminar, sinal, arras, saldo, quitação e entrega da posse.",
      "Valor do negócio, valor venal e valor atribuído pela Fazenda, com indicação obrigatória na escritura."
    ],
    "imovel": [
      "Certidão atualizada da matrícula ou transcrição do Registro de Imóveis competente, com prazo de validade de 30 dias.",
      "Certidão de ações reais e pessoais reipersecutórias e certidão de ônus reais, com prazo de validade de 30 dias (em alguns estados é documento apartado, em São Paulo não vem com a matrícula).",
      "Título de aquisição do alienante ou titular, se houver, com referência à natureza do negócio jurídico, ao instrumento que o documenta, à matrícula, ao registro anterior e ao Registro de Imóveis (caso o título não tenha sido levado a registro ou conste como ato historiado, como cessão).",
      "Certidões dos distribuidores do foro das Justiças Estadual, Federal e Trabalhista, ou dispensa expressa pelo adquirente e declaração do alienante sobre inexistência de ônus reais, judiciais ou extrajudiciais.",
      "Prova de quitação dos tributos municipais, ou dispensa expressa do adquirente com declaração de responsabilidade pelos débitos fiscais existentes.",
      "Imóvel urbano, carnê de IPTU, certidão de dados cadastrais ou documento municipal com o número de contribuinte, logradouro, número, bairro, cidade e Estado.",
      "Guia do ITBI, documento de recolhimento do imposto de transmissão, ou documento que comprove imunidade, isenção, não incidência ou hipótese legal de pagamento posterior à lavratura.",
      "Certidões do INSS, Receita Federal e órgãos públicos, quando exigidas por lei. Se houver dispensa legal ou não sujeição, declaração correspondente sob as penas da lei. A Lei 8.212/1991, art. 47, exige. As normas de São Paulo deixam a critério do tabelião. Jurisprudência é no sentido da não exigência, embora a lei exija.",
      "Pacto antenupcial que alcance o imóvel, certidão do registro no Registro de Imóveis. Se não registrado, menção à necessidade de registro antes da alienação ou oneração.",
      "Construção, aumento de área, demolição, alteração de cadastro, número predial ou nome de rua, documentos comprobatórios exigíveis para eventual averbação no Registro de Imóveis.",
      "Imóvel rural, CCIR emitido pelo INCRA, número cadastral rural indicado na norma, prova de quitação do ITR dos últimos cinco anos (ou certidão negativa, embora conste na lei a exigência de quitação dos últimos cinco anos) e autorização do INCRA para desmembramento quando exigível.",
      "Domínio útil ou terreno da União, certidão da SPU em transferência de domínio útil, benfeitorias ou cessão de direitos. Em enfiteuse privada, comprovante dos três últimos foros anuais."
    ],
    "tributos": [
      "Verificar a incidência, recolhimento ou hipótese de isenção do ITBI.",
      "Confirmar o valor declarado, valor venal, valor de referência municipal e base utilizada para cálculo, conforme regra local.",
      "Arquivar comprovantes de pagamento ou documentos de reconhecimento de isenção, quando existentes."
    ],
    "atencao": [
      "Conferir a disponibilidade do imóvel, legitimidade do vendedor e poderes de eventual procurador.",
      "Verificar a comunicação patrimonial conforme estado civil e regime de bens.",
      "Checar se há necessidade de anuência de cônjuge, credor fiduciário, condômino, usufrutuário ou outro interessado.",
      "Realizar consulta prévia à CNIB (o cartório emite) e consignar no ato o resultado e o hash da pesquisa.",
      "Cientificar as partes sobre a possibilidade de obtenção da CNDT em alienação ou oneração de imóvel."
    ]
  },
  "doacao": {
    "nome": "Doação",
    "resumo": "Checklist inicial para doação de bens móveis, imóveis, quotas, direitos ou valores.",
    "documentos": [
      "Pessoa física, documento de identidade oficial original ou documento equivalente e CPF.",
      "Estado civil, solteiro, certidão de nascimento quando necessária à comprovação. Casado, certidão de casamento. Separado ou divorciado, certidão de casamento com averbação da separação ou do divórcio. Viúvo, certidão de casamento e certidão de óbito do cônjuge falecido.",
      "Regime de bens, certidão de casamento com indicação do regime, certidão do pacto antenupcial registrado no Registro de Imóveis quando o regime for diverso do legal.",
      "Cônjuge ou convivente, representante, interveniente ou anuente, documento de identidade oficial, CPF e qualificação completa quando comparecer ou quando o ato exigir anuência.",
      "Representação, instrumento de procuração pública ou substabelecimento, com poderes expressos e especiais quando exigidos. Se a procuração for utilizada para o ato, apresentar certidão expedida nos 90 dias anteriores quando aplicável.",
      "Doador e donatário, documento de identidade oficial, CPF e qualificação completa.",
      "Grau de parentesco entre doador e donatário, quando existente.",
      "Bem doado, documento de titularidade, descrição, valor atribuído e, se houver, reserva de usufruto e cláusula de reversão.",
      "Cláusulas restritivas, indicação se há incomunicabilidade, impenhorabilidade, inalienabilidade, reversão, dispensa de colação ou adiantamento de legítima.",
      "Donatário absolutamente incapaz, doação pura, dispensada a aceitação conforme art. 543 do Código Civil. Demais hipóteses, documento de representação ou assistência e identificação do representante ou assistente.",
      "Donatário menor com adquirente onerado por encargo, documentar a hipótese de doação modal, dispensada a autorização judicial. Adquirente onerado em situação diversa, exigir alvará judicial.",
      "Declaração do doador sobre patrimônio remanescente, para fins de aferição de eventual doação inoficiosa."
    ],
    "imovel": [
      "Certidão atualizada da matrícula ou transcrição do Registro de Imóveis competente, com prazo de validade de 30 dias.",
      "Certidão de ações reais e pessoais reipersecutórias e certidão de ônus reais, com prazo de validade de 30 dias (em alguns estados é documento apartado, em São Paulo não vem com a matrícula).",
      "Prova de quitação dos tributos municipais, ou dispensa expressa do adquirente com declaração de responsabilidade pelos débitos fiscais existentes.",
      "Imóvel urbano, carnê de IPTU, certidão de dados cadastrais ou documento municipal com o número de contribuinte, logradouro, número, bairro, cidade e Estado.",
      "Guia do ITCMD, documento de recolhimento do imposto de transmissão causa mortis e doação, ou documento que comprove imunidade, isenção, não incidência ou hipótese legal de pagamento posterior à lavratura.",
      "Certidões do INSS, Receita Federal e órgãos públicos, quando exigidas por lei. Se houver dispensa legal ou não sujeição, declaração correspondente sob as penas da lei.",
      "Pacto antenupcial que alcance o imóvel, certidão do registro no Registro de Imóveis. Se não registrado, menção à necessidade de registro antes da alienação ou oneração.",
      "Construção, aumento de área, demolição, alteração de cadastro, número predial ou nome de rua, documentos comprobatórios exigíveis para eventual averbação no Registro de Imóveis.",
      "Imóvel rural, CCIR emitido pelo INCRA, número cadastral rural indicado na norma, prova de quitação do ITR dos últimos cinco anos e autorização do INCRA para desmembramento quando exigível."
    ],
    "tributos": [
      "Verificar a incidência, recolhimento ou hipótese de isenção do ITCMD.",
      "Conferir a base de cálculo, valor declarado e documentos fiscais exigidos pela Fazenda competente."
    ],
    "atencao": [
      "Avaliar necessidade de anuência conjugal.",
      "Verificar legítima, adiantamento de herança, dispensa de colação e eventual excesso disponível, observado o art. 549 do Código Civil sobre nulidade da doação inoficiosa quanto ao excedente da legítima.",
      "Conferir vedação à doação universal sem reserva de bens suficientes à subsistência do doador, conforme art. 548 do Código Civil.",
      "Confirmar consulta à CNIB (o cartório emite) e consignar resultado e hash no ato.",
      "Cientificar as partes sobre obtenção da CNDT em transmissão imobiliária."
    ]
  },
  "inventario": {
    "nome": "Inventário extrajudicial",
    "resumo": "Checklist inicial para inventário e partilha por escritura pública.",
    "documentos": [
      "Autor da herança, certidão de óbito, documento de identidade oficial (original ou cópia autenticada) e CPF, qualificação completa, regime de bens, pacto antenupcial e registro imobiliário se houver, dia e lugar do falecimento, data de expedição, livro, folha, termo e serventia do registro de óbito.",
      "Herdeiros, meeiro e respectivos cônjuges ou companheiros, documento de identidade oficial e CPF.",
      "Vínculo sucessório, certidão comprobatória do parentesco dos herdeiros.",
      "Estado civil dos interessados, solteiro, certidão de nascimento. Casado, certidão de casamento. Separado ou divorciado, certidão de casamento com averbação da separação ou do divórcio. Viúvo, certidão de casamento e certidão de óbito do cônjuge falecido.",
      "Cônjuge sobrevivente e herdeiros casados, certidão de casamento e pacto antenupcial se houver.",
      "Certidões de nascimento, casamento e óbito utilizadas para comprovar estado civil e qualidade de herdeiro. Para herdeiro maior que se declare solteiro, certidão de nascimento posterior ao óbito do autor da herança (em São Paulo é exigido).",
      "Certidão de casamento dos sucessores comprovando o estado civil na data da abertura da sucessão e, havendo renúncia ou cessão da herança, também na data da escritura (em São Paulo é exigido).",
      "Advogado ou defensor público, nome, número de inscrição e seção da OAB, qualificação completa do profissional.",
      "Testamento, certidão comprobatória da inexistência de testamento no Registro Central de Testamentos On-Line. Se houver testamento, certidão de todos os testamentos e autorização judicial expressa com trânsito em julgado.",
      "Plano de partilha ou adjudicação, relação dos herdeiros, meeiro, quinhões, meação, dívidas, créditos, pagamentos, cessões, renúncias e eventual torna (alguns tabelionatos solicitam as primeiras declarações).",
      "Tributos, certidão negativa ou certidão positiva com efeitos de negativa de tributos, documento comprobatório do recolhimento do ITCMD e eventuais guias de outros tributos.",
      "Documentos apresentados, originais ou cópias autenticadas. Documentos de identidade das partes sempre em original.",
      "Inventariante autorizado a alienar bens do espólio, garantia real ou fidejussória, discriminação das despesas com pagamento de impostos, honorários, emolumentos e outros tributos, vinculação do preço ao pagamento dessas despesas, ausência de indisponibilidade dos herdeiros e do cônjuge ou convivente sobrevivente, menção às guias dos impostos e indicação dos emolumentos estimados.",
      "Falecido estrangeiro com bens situados no Brasil, certidão consular sobre teor e vigência da lei aplicável à época do óbito.",
      "Pendência de inventário judicial, comprovação do deferimento do pedido de desistência ou suspensão do processo com a finalidade específica de lavrar a escritura de inventário e partilha."
    ],
    "imovel": [
      "Certidão de propriedade dos bens imóveis e dos direitos a eles relativos.",
      "Certidão atualizada da matrícula ou transcrição do Registro de Imóveis competente, quando necessária à identificação do bem.",
      "Certidão de ações reais e pessoais reipersecutórias e certidão de ônus reais, quando aplicáveis ao ato e à qualificação do imóvel (alguns estados solicitam certidão apartada, em São Paulo vem com a matrícula).",
      "Bens móveis, quotas, veículos, aplicações, saldos bancários, créditos e outros direitos, documentos necessários à comprovação da titularidade e do valor.",
      "Imóvel urbano, documento municipal com número de contribuinte ou dados cadastrais do IPTU, quando necessário à descrição e tributação.",
      "Imóvel rural, CCIR emitido pelo INCRA e documentos cadastrais rurais exigíveis. Havendo partilha de imóvel rural, apresentar CCIR e prova de quitação do ITR dos últimos cinco anos.",
      "Bens localizados no exterior, identificar separadamente sem partilhar. A norma nacional e a paulista vedam escritura pública de inventário e partilha referente a bens localizados no exterior, conforme art. 29 da Resolução 35 do CNJ e item 127 das NSCGJ-SP."
    ],
    "tributos": [
      "Verificar declaração, guia, homologação, recolhimento ou isenção do ITCMD.",
      "Conferir eventual incidência de ITBI havendo partilha desigual com torna, conforme regra aplicável.",
      "Recolher tributos antes da lavratura da escritura, conforme art. 15 da Resolução 35 do CNJ e item 110 das NSCGJ-SP."
    ],
    "atencao": [
      "Confirmar a capacidade civil dos interessados e consenso sobre a partilha.",
      "Consultar o RCTO/CENSEC e verificar a existência de testamento, decisão judicial, autorização ou hipótese normativa específica.",
      "Checar a representação por procuração pública com poderes específicos.",
      "Inserir no corpo da escritura a ressalva de eventuais erros, omissões ou direitos de terceiros, conforme item 123 das NSCGJ-SP.",
      "Havendo herdeiro único, lavrar escritura de inventário e adjudicação, sem partilha, conforme art. 26 da Resolução 35 do CNJ.",
      "Existência de credores do espólio não impede a realização do inventário, partilha ou adjudicação por escritura pública.",
      "Inventário negativo é admissível por escritura pública."
    ]
  },
  "uniaoEstavel": {
    "nome": "União estável",
    "resumo": "Checklist inicial para escritura declaratória ou de reconhecimento de união estável.",
    "documentos": [
      "Conviventes, documento de identidade oficial ou documento equivalente e CPF.",
      "Estado civil, solteiro, certidão de nascimento quando necessária à comprovação. Casado, certidão de casamento. Separado ou divorciado, certidão de casamento com averbação da separação ou do divórcio. Viúvo, certidão de casamento e certidão de óbito do cônjuge falecido.",
      "Regime de bens adotado, regime escolhido pelas partes (comunhão parcial de bens com cláusulas especiais, separação de bens, comunhão universal de bens, participação final nos aquestos e separação obrigatória). A separação obrigatória do art. 1.641, II, do Código Civil pode ser afastada, em uniões envolvendo pessoa maior de 70 anos, por manifestação expressa de vontade mediante escritura pública, conforme STF, ARE 1309642, Tema 1236.",
      "Data de início da união estável, documento ou declaração para indicação. O regime de bens vigora a partir do registro da escritura no Registro de Imóveis, com efeitos perante terceiros desde esse registro, conforme art. 1.657 do Código Civil. A data de início da convivência produz efeitos inter partes para fins de partilha, segundo a prova produzida.",
      "Filhos, dependência econômica ou bens comuns, certidões e documentos de comprovação quando forem mencionados no ato."
    ],
    "imovel": [
      "Certidão atualizada da matrícula ou transcrição do Registro de Imóveis competente, com prazo de validade de 30 dias.",
      "Prova de quitação dos tributos municipais, ou dispensa expressa do adquirente com declaração de responsabilidade pelos débitos fiscais existentes.",
      "Imóvel urbano, carnê de IPTU, certidão de dados cadastrais ou documento municipal com o número de contribuinte, logradouro, número, bairro, cidade e Estado.",
      "Guia do ITBI, documento de recolhimento do imposto de transmissão, ou documento que comprove imunidade, isenção, não incidência ou hipótese legal de pagamento posterior à lavratura.",
      "Certidões do INSS, Receita Federal e órgãos públicos, quando exigidas por lei. Se houver dispensa legal ou não sujeição, declaração correspondente sob as penas da lei.",
      "Pacto antenupcial que alcance o imóvel, certidão do registro no Registro de Imóveis. Se não registrado, menção à necessidade de registro antes da alienação ou oneração.",
      "Construção, aumento de área, demolição, alteração de cadastro, número predial ou nome de rua, documentos comprobatórios exigíveis para eventual averbação no Registro de Imóveis.",
      "Imóvel rural, CCIR emitido pelo INCRA, número cadastral rural indicado na norma, prova de quitação do ITR dos últimos cinco anos e autorização do INCRA para desmembramento quando exigível.",
      "Bens móveis, quotas, veículos, aplicações, saldos bancários, créditos ou outros direitos, documentos necessários à comprovação da titularidade, identificação, valor e eventual ônus."
    ],
    "tributos": [
      "A escritura declaratória de união estável não substitui a análise tributária de eventual transmissão patrimonial presente ou futura.",
      "Verificar incidência tributária se houver disposição com efeito de transferência de bens ou direitos."
    ],
    "atencao": [
      "Conferir manifestação de vontade de ambos os conviventes e inexistência de impedimento declarado para a união estável.",
      "Evitar cláusulas ambíguas sobre início da convivência, regime patrimonial e efeitos perante terceiros.",
      "Orientar sobre a possibilidade de registro do título no Livro E do Registro Civil das Pessoas Naturais do último domicílio dos conviventes, conforme art. 539 do Provimento CN 149/2023."
    ]
  },
  "sobrepartilha": {
    "nome": "Sobrepartilha",
    "resumo": "Checklist inicial para escritura de sobrepartilha extrajudicial.",
    "documentos": [
      "Meeiro, herdeiros, ex-cônjuges ou ex-conviventes e respectivos cônjuges, quando aplicável, documento de identidade oficial e CPF.",
      "Estado civil, solteiro, certidão de nascimento quando necessária à comprovação. Casado, certidão de casamento. Separado ou divorciado, certidão de casamento com averbação da separação ou do divórcio. Viúvo, certidão de casamento e certidão de óbito do cônjuge falecido.",
      "Partilha anterior, escritura pública, formal de partilha, carta de sentença, certidão da escritura ou decisão judicial que originou a partilha já realizada.",
      "Autor da herança ou ato originário, certidão de óbito, certidão de casamento, pacto antenupcial e documentos sucessórios necessários, quando a sobrepartilha decorrer de inventário, se já não constar do inventário.",
      "Advogado ou defensor público, nome, número de inscrição e seção da OAB, qualificação completa do profissional.",
      "Bem, direito, dívida ou crédito omitido, documento de titularidade, identificação, valor, origem e justificativa da sobrepartilha.",
      "Plano de sobrepartilha, quinhões, meação, partilha, eventual torna, cessão ou renúncia.",
      "Tributos, guias, declarações, comprovantes de recolhimento ou documentos de isenção, não incidência ou complementação fiscal."
    ],
    "imovel": [
      "Certidão de propriedade dos bens imóveis e dos direitos a eles relativos.",
      "Certidão atualizada da matrícula ou transcrição do Registro de Imóveis competente, quando necessária à identificação do bem.",
      "Certidão de ações reais e pessoais reipersecutórias e certidão de ônus reais, quando aplicáveis ao ato e à qualificação do imóvel (alguns estados solicitam certidão apartada, em São Paulo vem com a matrícula).",
      "Bens móveis, quotas, veículos, aplicações, saldos bancários, créditos e outros direitos, documentos necessários à comprovação da titularidade e do valor.",
      "Imóvel urbano, documento municipal com número de contribuinte ou dados cadastrais do IPTU, quando necessário à descrição e tributação.",
      "Imóvel rural, CCIR emitido pelo INCRA e documentos cadastrais rurais exigíveis. Havendo partilha de imóvel rural, apresentar CCIR.",
      "Bens localizados no exterior, identificar separadamente sem partilhar. A norma nacional e a paulista vedam escritura pública de inventário e partilha referente a bens localizados no exterior."
    ],
    "tributos": [
      "Verificar declaração, guia, homologação, recolhimento ou isenção do imposto aplicável ao caso.",
      "Conferir eventual incidência de ITBI ou ITCMD se houver partilha desigual, torna ou transmissão patrimonial."
    ],
    "atencao": [
      "Conferir se o bem foi omitido, sonegado, descoberto posteriormente ou reservado para partilha futura.",
      "Verificar a capacidade civil dos interessados, consenso e necessidade de participação de cônjuges ou conviventes.",
      "Checar se o ato anterior, testamento, decisão judicial ou presença de incapaz exige providência prévia.",
      "Inserir no corpo da escritura a ressalva de eventuais erros, omissões ou direitos de terceiros, conforme item 123 das NSCGJ-SP.",
      "Sobrepartilha admitida ainda que o herdeiro, hoje maior e capaz, fosse menor ou incapaz ao tempo do óbito ou do processo judicial, conforme art. 25 da Resolução 35 do CNJ e item 122 das NSCGJ-SP."
    ]
  },
  "divorcio": {
    "nome": "Divórcio e extinção de união estável",
    "resumo": "Checklist inicial para divórcio consensual ou extinção consensual de união estável por escritura pública.",
    "documentos": [
      "Cônjuges ou conviventes, documento de identidade oficial ou documento equivalente e CPF.",
      "Divórcio, certidão de casamento. Se já houver separação, certidão de casamento com averbação da separação. Para conversão de separação em divórcio, certidão da averbação da separação no assento de casamento.",
      "Extinção de união estável, escritura declaratória, termo declaratório, sentença, contrato de convivência ou outro documento que comprove a união estável, quando existente.",
      "Pacto antenupcial ou contrato de convivência, se houver, com dados do registro quando aplicável.",
      "Filhos, certidão de nascimento ou outro documento de identidade oficial. Havendo filhos comuns, indicar nomes, datas de nascimento e capacidade.",
      "Filhos menores ou incapazes, decisão judicial prévia sobre guarda, convivência familiar e alimentos, com cópia da decisão e certidão de trânsito em julgado.",
      "Gravidez, declaração de inexistência de gravidez do cônjuge virago ou de desconhecimento dessa condição, quando aplicável.",
      "Advogado ou defensor público, nome, número de inscrição e seção da OAB, qualificação completa do profissional. Vedada a acumulação das funções de procurador e advogado das partes, conforme item 89.2 das NSCGJ-SP.",
      "Procuração para representação, instrumento público com poderes especiais, cláusulas essenciais e prazo de validade de 30 dias contados da lavratura. Procuração lavrada no exterior, registrada em Registro de Títulos e Documentos e traduzida quando necessário, com prazo de até 90 dias.",
      "Partilha, alimentos e nome, declaração sobre retomada ou manutenção do nome, alimentos entre cônjuges ou conviventes, bens particulares, bens comuns, dívidas e eventual partilha posterior.",
      "Tributos, comprovante de recolhimento do tributo devido, se houver transmissão de patrimônio individual ou partilha desigual do patrimônio comum."
    ],
    "imovel": [
      "Certidão de propriedade dos bens imóveis e dos direitos a eles relativos.",
      "Certidão atualizada da matrícula ou transcrição do Registro de Imóveis competente, com prazo de validade de 30 dias.",
      "Certidão de ações reais e pessoais reipersecutórias e certidão de ônus reais, com prazo de validade de 30 dias, quando exigíveis pela qualificação do ato (alguns estados solicitam certidão à parte).",
      "Documentos necessários à comprovação da titularidade de bens móveis, veículos, quotas, saldos, investimentos, créditos e demais direitos.",
      "Imóvel urbano, carnê de IPTU, certidão de dados cadastrais ou documento municipal com número de contribuinte.",
      "Imóvel rural, CCIR emitido pelo INCRA, documentos cadastrais rurais e prova de quitação do ITR quando aplicáveis.",
      "Partilha de bens imóveis, documentos fiscais e guia do ITBI ou ITCMD quando houver transmissão tributável ou partilha desigual."
    ],
    "tributos": [
      "Verificar eventual incidência de ITBI ou ITCMD em partilha desigual, conforme regra aplicável.",
      "Arquivar guias, comprovantes ou documentos de reconhecimento de isenção, quando existentes."
    ],
    "atencao": [
      "Confirmar consenso entre as partes.",
      "Verificar se há filhos comuns menores ou incapazes. Nessa hipótese, confirmar prévia resolução judicial de guarda, convivência e alimentos, quando exigida.",
      "Conferir se todos os bens e dívidas foram descritos com clareza.",
      "Cientificar as partes sobre a possibilidade de obtenção da CNDT em partilha de bens imóveis decorrente de divórcio ou extinção de união estável."
    ]
  },
  "pacto": {
    "nome": "Pacto antenupcial",
    "resumo": "Checklist inicial para escritura pública de pacto antenupcial.",
    "documentos": [
      "Nubentes, documento de identidade oficial ou documento equivalente e CPF.",
      "Estado civil, solteiro, certidão de nascimento quando necessária à comprovação. Casado, certidão de casamento. Separado ou divorciado, certidão de casamento com averbação da separação ou do divórcio. Viúvo, certidão de casamento e certidão de óbito do cônjuge falecido.",
      "Domicílio, residência, nacionalidade e profissão dos nubentes, conforme documento apresentado ou declaração para qualificação.",
      "Regime de bens escolhido e cláusulas patrimoniais pretendidas. Disposições convencionais admitidas pelo art. 1.639 e seguintes do Código Civil, com vedação a cláusulas que afastem norma absoluta, ordem pública ou direitos conjugais (art. 1.655 do Código Civil)."
    ],
    "imovel": [
      "Bens imóveis mencionados no pacto, certidão atualizada da matrícula ou transcrição do Registro de Imóveis competente.",
      "Bens móveis, quotas, veículos, aplicações, saldos bancários, créditos ou outros direitos mencionados no pacto, documentos de titularidade, identificação e valor.",
      "Pacto com reflexo sobre imóvel, registro no Livro 3 do Registro de Imóveis do domicílio dos cônjuges para eficácia perante terceiros, conforme art. 1.657 do Código Civil."
    ],
    "tributos": [
      "Em regra, a lavratura do pacto não substitui a análise tributária de eventual transmissão patrimonial futura.",
      "Verificar incidência tributária se houver disposição com efeito de transmissão de bens ou direitos."
    ],
    "atencao": [
      "Alertar sobre a necessidade de celebração do casamento como condição de eficácia do pacto, sob pena de caducidade conforme art. 1.653 do Código Civil.",
      "Alertar sobre a necessidade de registro do pacto no Livro 3 do Registro de Imóveis do domicílio dos cônjuges para eficácia perante terceiros, conforme art. 1.657 do Código Civil e item 83 das NSCGJ-SP.",
      "Evitar cláusulas que afastem deveres legais indisponíveis ou gerem ambiguidade na administração patrimonial.",
      "Conferir compatibilidade da redação com o regime escolhido."
    ]
  },
  "procuracao": {
    "nome": "Procuração pública",
    "resumo": "Checklist inicial para lavratura de procuração pública.",
    "documentos": [
      "Outorgante pessoa física, documento de identidade oficial ou documento equivalente e CPF.",
      "Estado civil, solteiro, certidão de nascimento quando necessária à comprovação. Casado, certidão de casamento. Separado ou divorciado, certidão de casamento com averbação da separação ou do divórcio. Viúvo, certidão de casamento e certidão de óbito do cônjuge falecido.",
      "Regime de bens e cônjuge, certidão de casamento, pacto antenupcial e qualificação do cônjuge quando os poderes exigirem anuência ou atingirem patrimônio comum.",
      "Procurador, nome, nacionalidade, estado civil, profissão, documento de identidade, CPF, domicílio e residência. Na ausência de qualificação completa, basta o nome e a indicação de que o outorgante ignora os demais dados, por analogia ao item 133 das NSCGJ-SP. A aceitação do mandato é tácita pelo exercício, conforme art. 658 do Código Civil.",
      "Poderes outorgados, minuta ou instrução escrita com a finalidade do mandato, poderes especiais, prazo, substabelecimento, autocontratação, recebimento de preço, quitação e representação perante órgãos específicos, se houver. Os poderes especiais são interpretados restritivamente, conforme art. 661, § 1º, do Código Civil.",
      "Advogado como outorgado, número de inscrição na OAB ou declaração do outorgante de que ignora esse número. Sociedade de advogados, identificação dos advogados que a integram."
    ],
    "imovel": [
      "Poderes sobre imóvel, certidão atualizada da matrícula ou transcrição, ou dados suficientes de matrícula, transcrição, endereço, cadastro municipal e Registro de Imóveis.",
      "Negócio autorizado, identificação expressa do ato pretendido, como vender, comprar, doar, hipotecar, alienar fiduciariamente, permutar, receber preço, dar quitação, instituir garantia ou assinar escritura.",
      "Procuração de origem estrangeira utilizada no ato, apostilada ou consularizada, tradução pública juramentada e registro em Registro de Títulos e Documentos."
    ],
    "tributos": [
      "A procuração não substitui a análise tributária do ato que for praticado pelo procurador."
    ],
    "atencao": [
      "Conferir capacidade e manifestação de vontade do outorgante.",
      "Redigir poderes especiais de modo claro e expresso, observando interpretação restritiva.",
      "Verificar prazo da procuração, com atenção à recomendação de prazo não superior a um ano em outorgas por pessoas idosas com risco patrimonial concreto, conforme item 132 das NSCGJ-SP.",
      "Verificar a aceitação da procuração pelo órgão, banco, consulado, registro ou instituição destinatária."
    ]
  },
  "ata": {
    "nome": "Ata notarial",
    "resumo": "Checklist inicial para ata notarial de constatação, prova ou certificação.",
    "documentos": [
      "Solicitante, documento de identidade oficial ou documento equivalente e CPF.",
      "Qualificação do solicitante, nome, nacionalidade, estado civil, profissão, documento de identidade, CPF, domicílio e residência.",
      "Fato a constatar, indicação objetiva do fato jurídico, local, data e hora da lavratura, e, se diversa, hora em que os fatos serão presenciados ou verificados.",
      "Meio de constatação, endereço físico, endereço eletrônico, plataforma, conversa, imagem, documento, reunião, arquivo, link ou ambiente a ser verificado.",
      "Documentos, imagens, arquivos, laudos, relatórios técnicos ou declarações que serão apresentados para instruir a ata, quando aplicável.",
      "Testemunhas, técnicos ou peritos, documento de identificação, CPF, qualificação e documento técnico ou relatório, se comparecerem ou assinarem o ato.",
      "Menor ou adolescente em conteúdo sensível, boletim de ocorrência se houver e dados necessários à comunicação ao Ministério Público ou autoridade policial, quando aplicável (em São Paulo é exigido).",
      "Tratamento de dados pessoais, observância da LGPD em coleta, uso e arquivamento, com atenção a dados sensíveis e a terceiros."
    ],
    "imovel": [
      "Constatação física em imóvel, endereço completo, autorização de acesso, identificação do responsável pelo acesso e elementos de localização.",
      "Se a ata envolver posse, ocupação, estado físico ou situação registral do imóvel, matrícula ou transcrição, documentos cadastrais, fotos, plantas, contas, notificações e demais documentos apresentados.",
      "Se houver diligência externa, dados do local, data, horário pretendido e pessoa responsável pelo acompanhamento."
    ],
    "tributos": [
      "Verificar se a ata possui conteúdo econômico declarado ou mensurável, conforme tabela de custas aplicável (ata para adjudicação).",
      "Diligências externas e atos fora do horário podem exigir enquadramento próprio, conforme norma local."
    ],
    "atencao": [
      "A ata narra fatos percebidos pelo tabelião ou preposto autorizado, sem emitir conclusão jurídica indevida. Em ata para usucapião, a modalidade pretendida e a base legal são os documentos que comprovam a posse e declaração do requerente, conforme art. 401, I, d, do Provimento CN 149/2023. Em ata para adjudicação compulsória, o tabelião atesta o adimplemento e o inadimplemento sem juízo de mérito.",
      "Conferir proteção de dados pessoais, imagem de terceiros, menores, sigilo e eventual necessidade de anonimização.",
      "Separar constatação técnica feita por assistentes técnicos ou peritos da percepção do tabelião.",
      "É possível lavrar ata quando o objeto narrado constitua fato ilícito, vedada a atuação contra a moral, a ética, os costumes e a lei, conforme item 141 das NSCGJ-SP."
    ]
  },
  "usucapiao": {
    "nome": "Ata para usucapião extrajudicial",
    "resumo": "Checklist inicial para ata notarial destinada à instrução de usucapião extrajudicial.",
    "documentos": [
      "Requerente e cônjuge ou convivente, quando aplicável, documento de identidade oficial ou documento equivalente e CPF.",
      "Estado civil, solteiro, certidão de nascimento quando necessária à comprovação. Casado, certidão de casamento. Separado ou divorciado, certidão de casamento com averbação da separação ou do divórcio. Viúvo, certidão de casamento e certidão de óbito do cônjuge falecido.",
      "Advogado ou defensor público, qualificação completa do profissional. A presença é facultativa na ata e obrigatória no requerimento ao Registro de Imóveis.",
      "Relato da posse, início, forma de aquisição, continuidade, finalidade, modalidade de usucapião pretendida, soma de posses e identificação dos antecessores.",
      "Justo título ou outros documentos que demonstrem origem, continuidade, natureza e tempo da posse, como contratos, recibos, contas, tributos, correspondências, fotos, declarações e documentos de ocupação.",
      "Declaração dos requerentes sobre desconhecimento de ação possessória ou reivindicatória em trâmite envolvendo o imóvel, quando constar da ata.",
      "Declarações de testemunhas sobre tempo e características da posse, especialmente em lote vago ou área sem edificação, quando necessário.",
      "Certidões negativas dos distribuidores em nome do requerente, do proprietário do imóvel usucapiendo e de todos os demais possuidores anteriores e respectivos cônjuges ou companheiros, em caso de sucessão de posse, expedidas nos últimos 30 dias, conforme art. 401, IV, do Provimento CN 149/2023.",
      "Certidão dos órgãos municipais ou federais que demonstre a natureza urbana ou rural do imóvel usucapiendo, expedida nos 30 dias anteriores ao requerimento.",
      "Valor do imóvel declarado pelo requerente, valor venal do último lançamento de IPTU ou ITR ou, se inexistente, valor aproximado de mercado."
    ],
    "imovel": [
      "Matrícula ou transcrição do imóvel usucapiendo, ou certidão negativa quando não houver registro individualizado.",
      "Planta e memorial descritivo assinados por profissional habilitado e pelos titulares de direitos reais e confrontantes, quando exigíveis.",
      "ART, RRT ou TRT do responsável técnico pela planta e memorial descritivo.",
      "Reconhecimento de firma das assinaturas lançadas na planta e no memorial descritivo, por semelhança ou autenticidade, quando exigido pela norma paulista.",
      "Unidade autônoma de condomínio edilício ou loteamento regularmente instituído, descrição constante da matrícula, dispensadas planta e memorial descritivo.",
      "Imóvel urbano, IPTU, certidão de dados cadastrais, número de contribuinte e endereço completo.",
      "Imóvel rural, CCIR, ITR, documentos cadastrais rurais, área, confrontações, localização e elementos de identificação.",
      "Descrição georreferenciada nas hipóteses da Lei 10.267/2001 e dos decretos regulamentadores, conforme art. 401, V, do Provimento CN 149/2023.",
      "Cópias do requerimento, ata notarial, planta, memorial e demais documentos em quantidade suficiente para notificação dos titulares de direitos e confrontantes que não assinaram."
    ],
    "tributos": [
      "A ata não substitui a qualificação registral nem a análise de tributos eventualmente exigidos em etapas posteriores."
    ],
    "atencao": [
      "A ata documenta a percepção notarial e os elementos apresentados, sem declarar aquisição de propriedade. A modalidade pretendida e a base legal são os documentos que comprovam o exercício da posse e a declaração do requerente.",
      "Verificar coerência entre relato da posse, documentos, área, confrontações e modalidade pretendida.",
      "Em ata de usucapião, observar a circunscrição territorial do tabelião e o município da delegação em diligência externa."
    ]
  },
  "adjudicacao": {
    "nome": "Ata para adjudicação compulsória extrajudicial",
    "resumo": "Checklist inicial para ata notarial destinada à adjudicação compulsória extrajudicial.",
    "documentos": [
      "Requerente, requerido, cedentes, cessionários, sucessores, cônjuges ou companheiros, documento de identidade oficial, CPF ou CNPJ, endereço e qualificação.",
      "Estado civil, solteiro, certidão de nascimento quando necessária à comprovação. Casado, certidão de casamento. Separado ou divorciado, certidão de casamento com averbação da separação ou do divórcio. Viúvo, certidão de casamento e certidão de óbito do cônjuge falecido.",
      "Advogado ou defensor público, qualificação completa do profissional. A presença é facultativa na ata e obrigatória no requerimento ao Registro de Imóveis.",
      "Instrumento de promessa de compra e venda, promessa de cessão, cessão (irrevogável e irretratável), sucessão ou outro ato ou negócio jurídico que fundamenta a adjudicação.",
      "Histórico de cessões e sucessões, instrumentos, valores, natureza das estipulações, existência ou não de direito de arrependimento e identificação de quem deve constar como requerido.",
      "Prova do adimplemento integral do preço ou do cumprimento da contraprestação à transferência do imóvel.",
      "Prova do inadimplemento da obrigação de outorgar ou receber o título de propriedade, inclusive notificação extrajudicial pelo oficial do Registro de Imóveis e decurso do prazo de 15 dias contados da entrega da notificação, conforme art. 216-B, § 1º, II, da Lei 6.015/1973.",
      "Declaração do requerente, sob as penas da lei, de inexistência de processo judicial que impeça o registro.",
      "Certidões dos distribuidores forenses da comarca da situação do imóvel e do domicílio do requerente, demonstrando inexistência de litígio envolvendo o contrato.",
      "Comprovante do recolhimento do ITBI, exigido pelo art. 216-B, § 1º, V, da Lei 6.015/1973."
    ],
    "imovel": [
      "Matrícula ou transcrição do imóvel adjudicando e, se o registro estiver em circunscrição anterior, certidão do registro anterior.",
      "Descrição do imóvel com seus ônus e gravames. Para imóvel urbano matriculado, identificação ou denominação do bem e endereço podem bastar, sem prejuízo de complemento de especialidade.",
      "Certidão de ônus reais, ações reais e pessoais reipersecutórias e demais certidões necessárias à qualificação registral.",
      "Valor venal atribuído ao imóvel adjudicando na data do requerimento inicial, segundo a legislação local.",
      "Documentos que aperfeiçoem ou complementem a especialidade objetiva do imóvel, como cadastro municipal, planta, descrição, área, confrontações e elementos de localização.",
      "Tributos e guias pertinentes à transferência, inclusive ITBI, isenção, imunidade ou não incidência, conforme exigência municipal e registral."
    ],
    "tributos": [
      "Verificar ITBI, base de cálculo, guia, isenção ou exigência municipal pertinente ao caso. Exigível no Registro de Imóveis.",
      "A ata não substitui a qualificação registral nem eventual exigência fiscal ou registral."
    ],
    "atencao": [
      "A ata certifica elementos exigidos pelas normas, documentos apresentados e fatos verificáveis, sem suprir a qualificação do registro imobiliário.",
      "Conferir cadeia negocial, legitimidade das partes e correspondência entre contrato e matrícula.",
      "Verificar se há impedimento registral ou judicial que exija solução prévia.",
      "Lembrar que o registro da promessa de venda ou da promessa de cessão não é condição para o processo extrajudicial da adjudicação compulsória, conforme Súmula 239 do STJ."
    ]
  },
  "alienacaoFiduciaria": {
    "nome": "Alienação fiduciária em garantia",
    "resumo": "Checklist inicial para escritura com constituição de alienação fiduciária em garantia sobre imóvel.",
    "documentos": [
      "Pessoa física, documento de identidade oficial ou documento equivalente e CPF.",
      "Estado civil, solteiro, certidão de nascimento quando necessária à comprovação. Casado, certidão de casamento. Separado ou divorciado, certidão de casamento com averbação da separação ou do divórcio. Viúvo, certidão de casamento e certidão de óbito do cônjuge falecido.",
      "Regime de bens, certidão de casamento com indicação do regime, pacto antenupcial e certidão do registro do pacto no Registro de Imóveis, se for o caso.",
      "Cônjuge, convivente, representante, interveniente ou anuente, documento de identidade oficial, CPF e qualificação completa quando comparecer ou quando o ato exigir anuência.",
      "Representação, instrumento de procuração pública ou substabelecimento, com poderes especiais e expressos para gravar o imóvel em garantia fiduciária, conforme art. 661, § 1º, do Código Civil. Se a procuração for utilizada para o ato, apresentar certidão expedida nos 90 dias anteriores quando aplicável.",
      "Devedor, credor fiduciário, fiduciante, intervenientes, garantidores e cônjuges ou conviventes, documento de identidade oficial, CPF ou CNPJ e qualificação completa.",
      "Obrigação garantida, instrumento da dívida, contrato, confissão de dívida ou documento equivalente com valor, vencimento, encargos, juros, correção, multa, prazo e condições de mora.",
      "Cláusulas obrigatórias do contrato, conforme art. 24 da Lei 9.514/1997, valor do principal da dívida, prazo e condições de reposição, taxa de juros e encargos, cláusula de constituição da propriedade fiduciária com descrição do imóvel e indicação do título e modo de aquisição, cláusula assegurando ao fiduciante adimplente a livre utilização do imóvel, indicação do valor do imóvel para leilão e critérios de revisão, cláusula sobre os procedimentos do leilão, prazo de carência antes da intimação para purgação de mora.",
      "Avaliação do imóvel dado em garantia, com critérios adotados pelas partes para fins de venda em leilão (art. 24, VI, da Lei 9.514/1997).",
      "Forma de liberação do crédito e pagamento, dados bancários, comprovantes ou declaração das partes, quando necessários à redação do ato.",
      "Garantias adicionais, fiança ou aval, com identificação dos garantidores e respectivas anuências."
    ],
    "imovel": [
      "Certidão atualizada da matrícula com inteiro teor, ou transcrição, do Registro de Imóveis competente, com prazo de validade de 30 dias.",
      "Certidão de ações reais e pessoais reipersecutórias e certidão de ônus reais, com prazo de validade de 30 dias (em alguns estados é documento apartado, em São Paulo não vem com a matrícula).",
      "Certidões dos distribuidores do foro das Justiças Estadual, Federal e Trabalhista, ou dispensa expressa pelo adquirente e declaração do alienante sobre inexistência de ônus reais, judiciais ou extrajudiciais.",
      "Prova de quitação dos tributos municipais, ou dispensa expressa do adquirente com declaração de responsabilidade pelos débitos fiscais existentes.",
      "Imóvel urbano, carnê de IPTU, certidão de dados cadastrais ou documento municipal com o número de contribuinte, logradouro, número, bairro, cidade e Estado.",
      "Guia do ITBI, documento de recolhimento do imposto de transmissão, ou documento que comprove imunidade, isenção, não incidência ou hipótese legal de pagamento posterior à lavratura.",
      "Certidões do INSS, Receita Federal e órgãos públicos, quando exigidas por lei. Se houver dispensa legal ou não sujeição, declaração correspondente sob as penas da lei.",
      "Pacto antenupcial que alcance o imóvel, certidão do registro no Registro de Imóveis. Se não registrado, menção à necessidade de registro antes da alienação ou oneração.",
      "Construção, aumento de área, demolição, alteração de cadastro, número predial ou nome de rua, documentos comprobatórios exigíveis para eventual averbação no Registro de Imóveis.",
      "Imóvel rural, CCIR emitido pelo INCRA, número cadastral rural indicado na norma, prova de quitação do ITR dos últimos cinco anos e autorização do INCRA para desmembramento quando exigível.",
      "Documentos sobre ônus, indisponibilidade, penhora, hipoteca, usufruto, locação, alienação fiduciária anterior ou outra restrição incidente sobre o imóvel.",
      "Consulta à CNIB (o cartório emite) com hash consignado no ato."
    ],
    "tributos": [
      "Verificar a incidência de emolumentos e tributos conforme natureza do negócio e legislação aplicável.",
      "A constituição de garantia não dispensa a análise registral e fiscal própria."
    ],
    "atencao": [
      "Conferir requisitos da garantia, cláusulas de vencimento, intimação, consolidação e leilões, observada a Lei 9.514/1997, a Lei 13.043/2014, a Lei 14.711/2023 e o Provimento CN 172/2024.",
      "Verificar se o bem pode ser dado em garantia. O bem de família admite alienação fiduciária, conforme STJ, Edição 202, Tese 3.",
      "Verificar anuências necessárias do cônjuge, convivente, coproprietário ou credor.",
      "Separar obrigação principal, garantia, avaliação, prazo, encargos e regras de execução.",
      "Lembrar que a alienação fiduciária pode ser contratada por qualquer pessoa, física ou jurídica, e não é privativa do SFI, conforme item 224 das NSCGJ-SP.",
      "Cessão da posição do fiduciante exige anuência expressa do credor, conforme item 232 das NSCGJ-SP. Cessão do crédito independe de anuência do devedor, conforme item 234 das NSCGJ-SP."
    ]
  },
  "distrato": {
    "nome": "Distrato, rescisão ou desfazimento",
    "resumo": "Checklist inicial para escritura de distrato, rescisão ou negócio de retorno patrimonial.",
    "documentos": [
      "Pessoa física, documento de identidade oficial ou documento equivalente e CPF.",
      "Estado civil, solteiro, certidão de nascimento quando necessária à comprovação. Casado, certidão de casamento. Separado ou divorciado, certidão de casamento com averbação da separação ou do divórcio. Viúvo, certidão de casamento e certidão de óbito do cônjuge falecido.",
      "Regime de bens, certidão de casamento com indicação do regime, pacto antenupcial e certidão do registro do pacto no Registro de Imóveis, se for o caso.",
      "Cônjuge, convivente, representante, interveniente ou anuente, documento de identidade oficial, CPF e qualificação completa quando comparecer ou quando o ato exigir anuência.",
      "Representação, instrumento de procuração pública ou substabelecimento, com poderes especiais quando exigidos.",
      "Negócio a desfazer, escritura pública, contrato, instrumento particular, recibos, registros, averbações, garantias e documentos que demonstrem o ato originário.",
      "Motivo e condições do desfazimento, minuta, acordo, declaração de vontade, valores a restituir, quitação, multas, perdas, despesas, saldo e forma de pagamento.",
      "Comprovantes financeiros, recibos, transferências, cheques, comprovantes de depósito, conta notarial vinculada ou outros documentos de pagamento.",
      "Tributos e registro anterior, guias pagas, pedidos de restituição, documentos fiscais e certidões pertinentes ao ato anterior, quando houver.",
      "Decisão judicial reconhecedora de causa rescisória, quando o desfazimento decorrer de ação anulatória ou rescisória."
    ],
    "imovel": [
      "Certidão atualizada da matrícula ou transcrição do Registro de Imóveis competente, com prazo de validade de 30 dias.",
      "Certidão de ações reais e pessoais reipersecutórias e certidão de ônus reais, com prazo de validade de 30 dias (em determinados estados, podem exigir certidão apartada).",
      "Título de aquisição do alienante ou titular, com natureza do negócio, instrumento, matrícula, registro anterior e Registro de Imóveis.",
      "Prova de quitação dos tributos municipais, ou dispensa expressa do adquirente com declaração de responsabilidade pelos débitos fiscais existentes.",
      "Imóvel urbano, carnê de IPTU, certidão de dados cadastrais ou documento municipal com o número de contribuinte, logradouro, número, bairro, cidade e Estado.",
      "Guia do ITBI, documento de recolhimento do imposto de transmissão, ou documento que comprove imunidade, isenção, não incidência ou hipótese legal de pagamento posterior à lavratura.",
      "Certidões do INSS, Receita Federal e órgãos públicos, quando exigidas por lei.",
      "Pacto antenupcial que alcance o imóvel, certidão ou informação do registro no Registro de Imóveis. Se não registrado, menção à necessidade de registro antes da alienação ou oneração.",
      "Imóvel rural, CCIR emitido pelo INCRA, número cadastral rural indicado na norma, prova de quitação do ITR dos últimos cinco anos e autorização do INCRA para desmembramento quando exigível.",
      "Escritura, registro ou certidão do ato anterior que produziu o efeito real a ser desfeito.",
      "Situação atual da posse, domínio, ônus, averbações, garantias, indisponibilidades e eventuais restrições registrais."
    ],
    "tributos": [
      "Verificar se o desfazimento gera nova transmissão, restituição, cancelamento, isenção ou exigência fiscal.",
      "Conferir orientação municipal ou estadual quando houver imposto recolhido no negócio anterior."
    ],
    "atencao": [
      "Não presumir que o distrato cancela automaticamente efeitos reais já registrados, observado o art. 250 da Lei 6.015/1973 sobre cancelamento e o princípio da continuidade registral.",
      "Verificar se será necessário novo ato transmissivo, averbação, cancelamento registral ou ordem judicial.",
      "Conferir quitação ampla e limites da manifestação das partes, observados os arts. 472 a 474 do Código Civil sobre distrato, resilição unilateral e cláusula resolutiva expressa.",
      "Cientificar as partes sobre a possibilidade de obtenção da CNDT em transmissão imobiliária resultante do desfazimento."
    ]
  },
  "dacaoPagamento": {
    "nome": "Dação em pagamento",
    "resumo": "Checklist inicial para escritura de dação em pagamento.",
    "documentos": [
      "Pessoa física, documento de identidade oficial ou documento equivalente e CPF.",
      "Estado civil, solteiro, certidão de nascimento quando necessária à comprovação. Casado, certidão de casamento. Separado ou divorciado, certidão de casamento com averbação da separação ou do divórcio. Viúvo, certidão de casamento e certidão de óbito do cônjuge falecido.",
      "Regime de bens, certidão de casamento com indicação do regime, pacto antenupcial e certidão do registro do pacto no Registro de Imóveis, se for o caso.",
      "Cônjuge, convivente, representante, interveniente ou anuente, documento de identidade oficial, CPF e qualificação completa quando comparecer ou quando o ato exigir anuência.",
      "Representação, instrumento de procuração pública ou substabelecimento, com poderes especiais quando exigidos.",
      "Dívida ou obrigação, contrato, confissão de dívida, título, instrumento originário ou documento que comprove a obrigação a ser satisfeita.",
      "Valor atualizado da dívida, demonstrativo, critérios de atualização, vencimento, encargos, juros, correção, multa e eventual saldo remanescente.",
      "Bem entregue em pagamento, documento de titularidade, descrição, valor atribuído, ônus e declaração sobre quitação total ou parcial.",
      "Anuência expressa do credor à substituição da prestação, conforme art. 356 do Código Civil.",
      "Forma de quitação, declaração expressa do credor sobre quitação, saldo, substituição da obrigação ou outras condições pactuadas. Saldo remanescente, quando o valor do bem for inferior à dívida, com declaração expressa, conforme art. 359 do Código Civil."
    ],
    "imovel": [
      "Certidão atualizada da matrícula ou transcrição do Registro de Imóveis competente, com prazo de validade de 30 dias.",
      "Certidão de ações reais e pessoais reipersecutórias e certidão de ônus reais, com prazo de validade de 30 dias (em alguns estados pode ser solicitada certidão à parte).",
      "Prova de quitação dos tributos municipais, ou dispensa expressa do adquirente com declaração de responsabilidade pelos débitos fiscais existentes.",
      "Imóvel urbano, carnê de IPTU, certidão de dados cadastrais ou documento municipal com o número de contribuinte, logradouro, número, bairro, cidade e Estado.",
      "Guia do ITBI, documento de recolhimento do imposto de transmissão, ou documento que comprove imunidade, isenção, não incidência ou hipótese legal de pagamento posterior à lavratura.",
      "Certidões do INSS, Receita Federal e órgãos públicos, quando exigidas por lei.",
      "Pacto antenupcial que alcance o imóvel, certidão ou informação do registro no Registro de Imóveis. Se não registrado, menção à necessidade de registro antes da alienação ou oneração.",
      "Imóvel rural, CCIR emitido pelo INCRA, número cadastral rural indicado na norma, prova de quitação do ITR dos últimos cinco anos e autorização do INCRA para desmembramento quando exigível.",
      "Bens móveis, quotas, veículos, aplicações, saldos bancários, créditos ou outros direitos, documentos necessários à comprovação da titularidade, identificação, valor e eventual ônus."
    ],
    "tributos": [
      "Verificar a incidência de ITBI quando a dação em pagamento envolver transmissão de imóvel.",
      "Conferir eventual incidência tributária conforme a natureza do bem, da obrigação e da quitação.",
      "Arquivar guias, comprovantes ou documentos de reconhecimento de isenção, quando existentes."
    ],
    "atencao": [
      "Conferir origem, liquidez e exigibilidade da dívida.",
      "Verificar correspondência entre valor da dívida, valor do bem e extensão da quitação, observado o art. 357 do Código Civil sobre valor pelo preço.",
      "Checar necessidade de anuência conjugal, anuência de credor, baixa de garantia ou registro posterior."
    ]
  },
  "nomeacaoInventariante": {
    "nome": "Nomeação de inventariante",
    "resumo": "Checklist inicial para escritura autônoma de nomeação de inventariante extrajudicial.",
    "documentos": [
      "Autor da herança, certidão de óbito, documento de identidade oficial e CPF, se disponível.",
      "Meeiro, herdeiros e interessado indicado para inventariante, documento de identidade oficial e CPF.",
      "Vínculo sucessório, certidão comprobatória do parentesco dos herdeiros.",
      "Estado civil, solteiro, certidão de nascimento quando necessária à comprovação. Casado, certidão de casamento. Separado ou divorciado, certidão de casamento com averbação da separação ou do divórcio. Viúvo, certidão de casamento e certidão de óbito do cônjuge falecido.",
      "Cônjuge ou companheiro sobrevivente e herdeiros casados, certidão de casamento e pacto antenupcial, se houver.",
      "Advogado ou defensor público, nome, número de inscrição e seção da OAB, qualificação completa do profissional.",
      "Declaração de consenso dos interessados sobre a nomeação e a finalidade da representação do espólio.",
      "Finalidade da nomeação, cumprimento de obrigações do falecido, documentos bancários, fiscais, empresariais ou negociais que justifiquem a busca de informações ou o levantamento de quantias para despesas do inventário.",
      "Termo inicial do procedimento, indicação de que a nomeação de inventariante é considerada termo inicial do procedimento de inventário extrajudicial, conforme art. 11, § 3º, da Resolução 35 do CNJ e item 106.3 das NSCGJ-SP.",
      "Garantia, real ou fidejussória, prestada pelo inventariante quando autorizado a alienar bens, conforme art. 11-A, VI, da Resolução 35 do CNJ."
    ],
    "imovel": [
      "Relação preliminar dos bens do espólio, quando necessária à finalidade da nomeação.",
      "Bens imóveis, certidão atualizada da matrícula ou transcrição, se a providência do inventariante depender de identificação imobiliária.",
      "Bens móveis, quotas, veículos, saldos, aplicações, créditos e demais direitos, documentos de titularidade ou identificação, quando disponíveis."
    ],
    "tributos": [
      "A nomeação de inventariante não substitui a declaração, conferência ou recolhimento dos tributos incidentes no inventário.",
      "Verificar prazos fiscais aplicáveis ao inventário e documentos exigidos pela Fazenda competente."
    ],
    "atencao": [
      "A escritura autônoma de nomeação permite viabilizar providências do espólio e não realiza a partilha.",
      "Confirmar consenso dos interessados e poderes atribuídos ao inventariante.",
      "Verificar se há testamento, incapaz, conflito entre interessados ou necessidade de autorização judicial ou do Ministério Público.",
      "Inventariante autorizado por escritura pública a alienar bens do espólio, conforme art. 11-A da Resolução 35 do CNJ, observados os requisitos específicos."
    ]
  },
  "confissaoDivida": {
    "nome": "Confissão de dívida",
    "resumo": "Checklist inicial para escritura de confissão de dívida.",
    "documentos": [
      "Pessoa física, documento de identidade oficial ou documento equivalente e CPF.",
      "Estado civil, solteiro, certidão de nascimento quando necessária à comprovação. Casado, certidão de casamento. Separado ou divorciado, certidão de casamento com averbação da separação ou do divórcio. Viúvo, certidão de casamento e certidão de óbito do cônjuge falecido.",
      "Regime de bens, certidão de casamento com indicação do regime, pacto antenupcial e certidão do registro do pacto no Registro de Imóveis, se for o caso.",
      "Cônjuge, convivente, representante, interveniente ou anuente, documento de identidade oficial, CPF e qualificação completa quando comparecer ou quando o ato exigir anuência.",
      "Representação, instrumento de procuração pública ou substabelecimento, com poderes especiais quando exigidos.",
      "Devedor, credor, intervenientes, garantidores e cônjuges ou conviventes, documento de identidade oficial, CPF ou CNPJ e qualificação completa.",
      "Origem da dívida, contrato, nota, recibo, instrumento particular, demonstrativo, declaração ou outro documento que indique a causa da obrigação.",
      "Valor da dívida, demonstrativo com principal, juros, correção, multa, encargos, vencimento, parcelas, forma de pagamento e prazo.",
      "Garantias pessoais ou reais, documentos dos fiadores, avalistas, garantidores, bens dados em garantia, autorizações e anuências necessárias.",
      "Forma de pagamento, dados bancários, cheques identificados por número e banco sacado, comprovantes ou declaração de forma de pagamento, quando necessário."
    ],
    "imovel": [
      "Certidão atualizada da matrícula ou transcrição do Registro de Imóveis competente, com prazo de validade de 30 dias.",
      "Prova de quitação dos tributos municipais, ou dispensa expressa do adquirente com declaração de responsabilidade pelos débitos fiscais existentes.",
      "Imóvel urbano, carnê de IPTU, certidão de dados cadastrais ou documento municipal com o número de contribuinte, logradouro, número, bairro, cidade e Estado.",
      "Guia do ITBI, documento de recolhimento do imposto de transmissão, ou documento que comprove imunidade, isenção, não incidência ou hipótese legal de pagamento posterior à lavratura.",
      "Certidões do INSS, Receita Federal e órgãos públicos, quando exigidas por lei.",
      "Pacto antenupcial que alcance o imóvel, certidão do registro no Registro de Imóveis. Se não registrado, menção à necessidade de registro antes da alienação ou oneração.",
      "Imóvel rural, CCIR emitido pelo INCRA, número cadastral rural indicado na norma, prova de quitação do ITR dos últimos cinco anos e autorização do INCRA para desmembramento quando exigível.",
      "Garantia real imobiliária, documento da garantia pretendida, valor de avaliação do imóvel e autorização ou anuência de cônjuge, convivente, coproprietário ou credor, quando exigível.",
      "Documentos sobre ônus, indisponibilidade, penhora, hipoteca, alienação fiduciária, usufruto ou outra restrição incidente sobre o imóvel."
    ],
    "tributos": [
      "Verificar eventual incidência tributária conforme natureza da obrigação, garantia e fluxo financeiro.",
      "A confissão de dívida não substitui a análise tributária de eventual garantia, transmissão ou operação financeira associada."
    ],
    "atencao": [
      "Redigir obrigação com valor certo, vencimento, forma de pagamento e critérios objetivos de atualização.",
      "Separar confissão da dívida, novação, garantia, quitação e vencimento antecipado. A confissão de dívida não opera novação salvo declaração expressa nesse sentido, conforme art. 361 do Código Civil.",
      "Conferir anuências necessárias e compatibilidade da garantia com o regime de bens e a titularidade do bem."
    ]
  },
  "testamento": {
    "nome": "Testamento ou revogação de testamento",
    "resumo": "Checklist inicial para testamento público, testamento cerrado ou escritura de revogação testamentária.",
    "documentos": [
      "Testador, documento de identidade oficial ou documento equivalente e CPF.",
      "Estado civil, solteiro, certidão de nascimento quando necessária à comprovação. Casado, certidão de casamento. Separado ou divorciado, certidão de casamento com averbação da separação ou do divórcio. Viúvo, certidão de casamento e certidão de óbito do cônjuge falecido.",
      "Regime de bens, certidão de casamento com indicação do regime, pacto antenupcial e registro imobiliário, se for o caso.",
      "Cônjuge ou convivente, dados do documento de identidade oficial, CPF e qualificação.",
      "Herdeiros necessários e beneficiários, nomes, qualificações e documentos de identificação disponíveis, quando forem individualizados.",
      "Disposições patrimoniais e não patrimoniais, minuta ou relação de disposições pretendidas, indicação de testamenteiro, substitutos, legados, cláusulas e revogações.",
      "Revogação de testamento, dados do testamento anterior, certidão ou traslado disponível, livro, folhas, data e serventia em que foi lavrado, se conhecidos.",
      "Testamento público, requisitos do art. 1.864 do Código Civil, lavratura pelo tabelião (ou substituto), ditado pelo testador ou apresentação por escrito, leitura em voz alta pelo tabelião na presença das duas testemunhas, ou pelo testador na presença do tabelião e das testemunhas, assinatura do testador, das duas testemunhas e do tabelião.",
      "Testador cego, leitura em voz alta duas vezes, uma pelo tabelião e outra por uma das testemunhas, conforme art. 1.867 do Código Civil.",
      "Testador surdo, leitura pelo próprio testador ou por pessoa de sua escolha, com declaração de fidelidade, conforme art. 1.866 do Código Civil.",
      "Testemunhas idôneas, observados os impedimentos do art. 228 e do art. 1.801 do Código Civil quanto a parentesco e interesse de beneficiários.",
      "Testamento cerrado, instrumento escrito e assinado pelo testador, ou por pessoa a seu rogo, apresentado ao tabelião na presença de duas testemunhas para aprovação. Vedado a quem não saiba ou não possa ler, conforme art. 1.872 do Código Civil e item 147 das NSCGJ-SP."
    ],
    "imovel": [
      "Bens imóveis mencionados individualmente.",
      "Bens móveis, quotas, veículos, aplicações, saldos bancários, créditos ou outros direitos mencionados individualmente, documentos de titularidade, identificação e valor.",
      "Bem sujeito a cláusula, legado ou disposição específica, documento que permita individualização suficiente do bem e do beneficiário."
    ],
    "tributos": [
      "A lavratura de testamento ou revogação não substitui a análise tributária da futura sucessão."
    ],
    "atencao": [
      "Conferir capacidade, manifestação livre de vontade e compreensão do testador.",
      "Advertir o testador sobre legítima, herdeiros necessários e limites da parte disponível, sem assumir o cálculo da legítima, que se faz na sucessão.",
      "Verificar parentesco das testemunhas com herdeiros e legatários.",
      "Vedação ao testamento conjuntivo, conforme art. 1.863 do Código Civil.",
      "Comunicação ao Registro Central de Testamentos On-Line e à CENSEC, conforme art. 267 do Provimento CN 149/2023, com remessa quinzenal.",
      "Sigilo da escritura de testamento até comprovação do falecimento do testador, conforme item 153 das NSCGJ-SP.",
      "Em testamento com disposição em favor de pessoa jurídica altruística, científica, artística, beneficente, religiosa, educativa, cultural, política, esportiva ou recreativa, consulta ao testador sobre a conveniência de cientificação por escrito, conforme item 59 das NSCGJ-SP.",
      "Evitar redação ambígua, disposições inexequíveis ou incompatíveis com a natureza do ato."
    ]
  }
};

const extras = {
  "pessoaJuridica": [
    "Contrato social, estatuto ou ato constitutivo atualizado.",
    "Alterações contratuais, ata de eleição ou documento de representação vigente.",
    "CNPJ e documentos dos administradores ou representantes.",
    "Identificação dos sócios, administradores e beneficiário final, quando compatível com o ato.",
    "Certidão do RTD/RCPJ com prazo não superior a 1 ano, ou ficha cadastral da Junta Comercial obtida pela internet, conforme item 35 das NSCGJ-SP.",
    "Verificar poderes societários para alienar, adquirir, doar, garantir, confessar dívida ou assinar o ato pretendido."
  ],
  "procuracao": [
    "Procuração pública para o ato, com poderes específicos quando exigidos.",
    "Documento de identificação do procurador.",
    "Conferir validade, atualidade, revogação, substabelecimento, poderes de autocontratação e poderes para receber ou dar quitação, se houver.",
    "Em São Paulo, certidão expedida nos 90 dias anteriores ao ato."
  ],
  "estrangeiro": [
    "Documento estrangeiro com legalização ou apostila, quando exigível.",
    "Tradução pública juramentada, quando aplicável.",
    "Registro em Registro de Títulos e Documentos, quando exigido para produção de efeitos perante terceiros.",
    "CPF ou CNPJ no Brasil, quando necessário ao ato.",
    "Aquisição de imóvel rural por estrangeiro, observar restrições da Lei 5.709/1971 e do Decreto 74.965/1974, inclusive residência, módulos, autorização do INCRA e limites municipais."
  ],
  "rural": [
    "CCIR, ITR, CAR e documentos cadastrais do imóvel rural, conforme o caso.",
    "Verificar georreferenciamento, fração mínima de parcelamento e restrições legais pertinentes.",
    "Conferir eventual necessidade de anuência, autorização ou documento específico conforme localização e natureza do imóvel."
  ],
  "dominioUniao": [
    "Domínio útil ou terreno da União, certidão da SPU em transferência de domínio útil, benfeitorias ou cessão de direitos sobre terreno da União.",
    "Enfiteuse privada, comprovante dos três últimos foros anuais, quando aplicável."
  ],
  "financiamento": [
    "Contrato de financiamento, saldo devedor, autorização do credor ou minuta bancária, quando aplicável.",
    "Conferir quitação, interveniência do credor, baixa de garantia ou constituição de nova garantia.",
    "Verificar prazos, condições suspensivas, liberação de valores ou exigências do banco."
  ],
  "contaNotarial": [
    "Definir valor a ser depositado, condição objetiva de liberação, beneficiário, prazo e vínculo com o negócio jurídico.",
    "Informar dados das partes e regra objetiva para movimentação dos valores, observada a disciplina nacional da conta notarial vinculada.",
    "Separar preço, sinal, arras, saldo, tributos, emolumentos e despesas externas, sem confundir valores da operação com emolumentos do ato."
  ],
  "tributo": [
    "Identificar tributo aplicável, ente competente, base de cálculo, alíquota, guia e data de vencimento.",
    "Verificar se o caso envolve imunidade, não incidência, isenção ou diferimento.",
    "Guardar comprovante de recolhimento ou documento oficial que reconheça a dispensa."
  ],
  "atoEletronico": [
    "Confirmar competência territorial para ato eletrônico ou híbrido antes do agendamento.",
    "Realizar a videoconferência notarial para captação da vontade e concordância com os termos do ato.",
    "Confirmar assinatura digital pelas partes no e-Notariado e assinatura do tabelião com certificado ICP-Brasil.",
    "Em escrituras eletrônicas com imóvel, verificar circunscrição do imóvel, domicílio do adquirente e regras específicas de escolha do tabelionato."
  ],
  "menorIncapaz": [
    "Verificar representação, assistência, autorização judicial, manifestação do Ministério Público ou regra especial aplicável ao ato.",
    "Em divórcio consensual com filhos comuns menores ou incapazes, conferir prévia resolução judicial de guarda, convivência e alimentos.",
    "Em inventário com interessado menor ou incapaz, verificar partilha em parte ideal, vedação a ato de disposição e manifestação favorável do Ministério Público, quando aplicável.",
    "Em ata notarial que envolva dados pessoais de criança menor de 12 anos, exigir solicitação por um dos pais ou responsável legal e tratar o consentimento de forma específica e destacada."
  ],
  "pld": [
    "Em ato com conteúdo econômico, manter cadastro dos envolvidos, representantes e procuradores, conforme política de PLD/FTP.",
    "Registrar valores declarados, forma e meio de pagamento, datas relevantes e fontes das informações utilizadas na análise.",
    "Identificar beneficiário final quando houver pessoa jurídica ou estrutura de representação, usando documentos disponíveis e bases admitidas.",
    "Verificar pessoa exposta politicamente, familiares, estreitos colaboradores e listas de sanções para fins de monitoramento, sem inserir essa condição no ato notarial.",
    "Havendo operação atípica, incompatível ou de difícil rastreabilidade, submeter à análise interna de PLD/FTP, preservado o sigilo legal."
  ],
  "lgpd": [
    "Coletar apenas os dados necessários à triagem e à prática do ato, separando dados obrigatórios de dados usados só para contato operacional.",
    "Evitar inserir dados sensíveis, imagens ou informações de terceiros sem necessidade concreta para o ato.",
    "Tratar certidões, documentos pessoais, dados de menores e documentos societários conforme finalidade notarial e controles internos de privacidade."
  ]
};

const resolucao35 = {
  "geral": [
    "Para inventário, partilha, divórcio, declaração de separação de fato e extinção consensual de união estável por via administrativa, é livre a escolha do tabelião de notas, sem aplicação das regras de competência do Código de Processo Civil.",
    "As escrituras desses atos não dependem de homologação judicial e são títulos hábeis para registro civil, registro imobiliário, transferência de bens, levantamento de valores e providências perante órgãos e instituições.",
    "A pedido das partes, o tabelião pode emitir certidão ou traslado por quesitos, especificando apenas os bens, direitos e obrigações a que se pretenda dar publicidade.",
    "É necessária a presença de advogado ou defensor público, com indicação de nome e registro na OAB, vedada a indicação de advogado pelo tabelião.",
    "É desnecessário o registro das escrituras abrangidas pela resolução no Livro E do Registro Civil das Pessoas Naturais."
  ],
  "inventario": [
    "É obrigatória a nomeação de interessado para representar o espólio, com poderes de inventariante, sem necessidade de seguir a ordem do art. 617 do Código de Processo Civil.",
    "O meeiro e os herdeiros podem, em escritura pública anterior à partilha ou à adjudicação, nomear inventariante. Essa nomeação é o termo inicial do procedimento de inventário extrajudicial.",
    "O inventariante nomeado pode buscar informações bancárias e fiscais necessárias à conclusão de negócios essenciais ao inventário e levantar quantias para pagamento de despesas.",
    "O recolhimento dos tributos incidentes deve anteceder a lavratura da escritura.",
    "É possível inventário extrajudicial por cessionário de direitos hereditários, mesmo com cessão parcial do acervo, desde que todos os herdeiros estejam presentes e concordes.",
    "Os cônjuges dos herdeiros devem comparecer quando houver renúncia ou partilha que importe transmissão, salvo casamento sob separação absoluta.",
    "O convivente sobrevivente é herdeiro se a união estável for reconhecida pelos demais sucessores ou, sendo único sucessor, se estiver previamente reconhecida por sentença judicial, escritura pública ou termo declaratório devidamente registrado.",
    "A meação do convivente pode ser reconhecida na escritura se houver concordância de todos os herdeiros e interessados capazes, ou se forem observadas as regras aplicáveis a menor ou incapaz.",
    "A escritura deve qualificar as partes e respectivos cônjuges e conter qualificação completa do autor da herança, regime de bens, pacto antenupcial e dados do óbito.",
    "Devem ser apresentados certidão de óbito, documentos de identidade e CPF, certidões de parentesco, certidões de casamento, pacto antenupcial, certidão de propriedade dos imóveis, documentos dos bens móveis, certidão negativa de tributos e CCIR quando houver imóvel rural.",
    "Documentos apresentados devem ser originais ou cópias autenticadas. Documentos de identidade das partes devem ser sempre originais.",
    "É admissível inventário negativo, e a existência de credores do espólio não impede inventário, partilha ou adjudicação por escritura pública.",
    "É vedada escritura pública de inventário e partilha referente a bens localizados no exterior.",
    "A escritura pode ser lavrada a qualquer tempo, cabendo ao tabelião fiscalizar eventual multa tributária prevista na legislação estadual ou distrital.",
    "O inventariante é responsável por declarar o valor dos bens do espólio, e o tabelião pode recusar a lavratura se houver fundados indícios de fraude, simulação ou dúvida sobre a declaração de vontade."
  ],
  "vendaInventariante": [
    "O inventariante pode ser autorizado por escritura pública a alienar bens móveis ou imóveis do espólio, independentemente de autorização judicial, desde que observados os requisitos específicos do art. 11-A.",
    "A alienação pelo inventariante exige discriminação das despesas do inventário, vinculação do preço ao pagamento dessas despesas, inexistência de indisponibilidade dos herdeiros ou do cônjuge ou convivente sobrevivente, menção às guias de impostos, indicação dos emolumentos estimados e prestação de garantia.",
    "O prazo para pagamento das despesas do inventário não pode ser superior a um ano contado da venda, e o bem vendido é relacionado no acervo para emolumentos, quinhões e imposto causa mortis, mas não é objeto de partilha."
  ],
  "menorInventario": [
    "O inventário pode ser feito por escritura pública com interessado menor ou incapaz se o quinhão ou meação for pago em parte ideal em cada bem inventariado e houver manifestação favorável do Ministério Público.",
    "Nessa hipótese, é vedada a prática de atos de disposição relativos aos bens ou direitos do menor ou incapaz.",
    "Havendo nascituro do autor da herança, aguardar o registro de nascimento com indicação da parentalidade ou a comprovação de não nascimento com vida.",
    "A eficácia da escritura depende da manifestação favorável do Ministério Público, e eventual impugnação pelo Ministério Público ou por terceiro interessado leva o procedimento ao juízo competente."
  ],
  "testamentoInventario": [
    "É admitido inventário e partilha consensuais por escritura pública mesmo havendo testamento, desde que haja advogado, autorização expressa do juízo sucessório em ação de abertura e cumprimento de testamento válido e eficaz, sentença transitada em julgado e consenso dos interessados.",
    "Se houver menor ou incapaz, observar as exigências específicas de partilha em parte ideal, ausência de atos de disposição e manifestação favorável do Ministério Público.",
    "Nos casos de testamento invalidado, revogado, rompido ou caduco, a invalidade ou ineficácia deve ter sido reconhecida por sentença judicial transitada em julgado na ação de abertura e cumprimento de testamento.",
    "Se o testamento contiver reconhecimento de filho ou outra declaração irrevogável, a escritura de inventário e partilha fica vedada, e o inventário deve seguir obrigatoriamente pela via judicial.",
    "Havendo dúvida sobre cabimento do inventário e partilha consensual, o tabelião deve suscitá-la ao juízo competente em matéria de registros públicos."
  ],
  "sobrepartilha": [
    "É admissível sobrepartilha por escritura pública, ainda que referente a inventário e partilha judiciais já findos.",
    "A sobrepartilha é admissível mesmo que o herdeiro, hoje maior e capaz, fosse menor ou incapaz ao tempo do óbito ou do processo judicial.",
    "Na sobrepartilha, aplicar as cautelas do ato originário, incluindo advogado, tributos, documentos, consenso e eventual regra sobre menor, incapaz ou testamento."
  ],
  "nomeacaoInventariante": [
    "A nomeação de inventariante pode ser feita por escritura pública anterior à partilha ou à adjudicação.",
    "A nomeação de inventariante é considerada termo inicial do procedimento de inventário extrajudicial.",
    "O inventariante nomeado pode representar o espólio na busca de informações bancárias e fiscais e no levantamento de quantias para pagamento das despesas necessárias.",
    "A nomeação não substitui o inventário e não autoriza, por si só, atos de disposição patrimonial fora das hipóteses e requisitos próprios da resolução."
  ],
  "divorcioExtincao": [
    "Para divórcio consensual, devem ser apresentados certidão de casamento, documento de identidade e CPF, pacto antenupcial, certidão de nascimento ou outro documento oficial dos filhos, certidão de propriedade dos imóveis e documentos dos bens móveis e direitos.",
    "As partes devem declarar que não têm filhos comuns ou, havendo, indicar nomes, datas de nascimento e se existem incapazes.",
    "As partes devem declarar que o cônjuge virago não se encontra em estado gravídico ou que não têm conhecimento dessa condição.",
    "Havendo filhos comuns menores ou incapazes, a escritura é permitida se houver prévia resolução judicial de guarda, visitação e alimentos, com consignação no corpo da escritura.",
    "A escritura deve conter declaração de ciência das consequências do divórcio, firme propósito de dissolução, recusa de reconciliação e concordância com a regulamentação judicial dos interesses dos filhos menores ou incapazes.",
    "A representação por mandatário exige instrumento público, poderes especiais, descrição das cláusulas essenciais e prazo de validade de 30 dias.",
    "Havendo bens, distinguir patrimônio individual e patrimônio comum conforme o regime de bens.",
    "Transmissão de patrimônio individual ou partilha desigual exige comprovação do recolhimento do tributo sobre a fração transferida.",
    "A partilha em divórcio consensual segue, no que couber, as regras da partilha em inventário extrajudicial.",
    "O traslado deve ser apresentado ao Registro Civil para averbação, sem autorização judicial e sem audiência do Ministério Público.",
    "Não há sigilo na escritura pública de divórcio consensual.",
    "É admissível retificação consensual das cláusulas de obrigações alimentares ajustadas no divórcio.",
    "O tabelião pode recusar a lavratura se houver fundados indícios de prejuízo a um dos cônjuges ou dúvida sobre a declaração de vontade.",
    "As disposições sobre divórcio consensual aplicam-se, no que couber, à extinção consensual da união estável."
  ],
  "uniaoEstavel": [
    "A resolução disciplina expressamente a extinção consensual da união estável por via administrativa, aplicando-se, no que couber, as regras do divórcio consensual.",
    "A escritura de reconhecimento ou declaração de união estável não se confunde com a escritura de extinção consensual de união estável e pode exigir cautelas próprias do Código Nacional de Normas e da legislação civil (exemplo: arts. 537 a 546 do Provimento CN 149/2023)."
  ],
  "separacaoFato": [
    "A declaração de separação de fato consensual deve se ater exclusivamente ao fato de que cessou a comunhão plena de vida entre o casal.",
    "Para separação de fato consensual, devem ser apresentados certidão de casamento, documento de identidade e CPF, manifestação de vontade espontânea e isenta de vícios, pacto antenupcial, documentos dos filhos, documentos dos bens e declaração de inexistência de gravidez ou desconhecimento dessa condição.",
    "O restabelecimento da comunhão plena de vida pode ser feito por escritura pública, com anotação ou comunicação ao juízo quando cabível, e não altera os termos da sociedade conjugal."
  ]
};

const spNormas = {
  "geral": [
    "Antes da lavratura, conferir documentos originais de identificação, CPF ou CNPJ e certidão de casamento, quando aplicável.",
    "Em pessoa jurídica, exigir ato constitutivo, alterações ou consolidação, com certidão do RTD/RCPJ com prazo não superior a um ano, ou ficha cadastral da Junta Comercial obtida pela internet.",
    "Procurações usadas no ato devem ser conferidas quanto à forma, poderes, qualificação das partes, sinal público e certidão expedida nos 90 dias anteriores ao ato.",
    "Nos atos que dependam de autorização judicial para dispor ou adquirir bens imóveis ou direitos, exigir o respectivo alvará, inclusive para espólio, massa falida, herança jacente ou vacante, recuperação judicial, incapazes e sub-rogação de gravames.",
    "Se houver curatela ou decisão apoiada em ato patrimonial ou negocial, exigir alvará, termo de curatela ou termo de acordo de decisão apoiada, conforme o caso.",
    "O tabelião é responsável pela redação e pelo conteúdo jurídico do ato, vedada a expressão sob minuta ou equivalente no instrumento, exceto testamento."
  ],
  "imovel": [
    "Em ato sobre imóvel, direito real ou quotas de sociedade simples, consultar previamente a CNIB (o cartório emite) e consignar no ato o resultado e o hash da pesquisa.",
    "Nas escrituras de imóveis, exigir certidão atualizada do Registro de Imóveis, ações reais e pessoais reipersecutórias e ônus reais, com validade de 30 dias.",
    "As certidões dos distribuidores estadual, federal e trabalhista podem ser apresentadas ou expressamente dispensadas pelo adquirente, com declaração do alienante sobre inexistência de ônus e ações.",
    "Prova de quitação de tributos municipais pode ser dispensada expressamente pelo adquirente, com assunção da responsabilidade por débitos fiscais existentes.",
    "A escritura deve indicar o valor do negócio, o valor atribuído pela Fazenda e o recolhimento do imposto de transmissão, ou mencionar imunidade ou isenção.",
    "Quando houver pacto antenupcial relacionado ao imóvel, mencionar o pacto, seus ajustes e o número do registro no Registro de Imóveis. Se não registrado, mencionar a necessidade de registro antes da alienação ou oneração.",
    "Cientificar as partes sobre a possibilidade de obtenção da CNDT em alienação ou oneração de imóvel e em partilha de bens imóveis decorrente de separação, divórcio ou união estável."
  ],
  "rural": [
    "Em imóvel rural, mencionar CCIR, cadastro da Receita Federal, prova de quitação do ITR dos últimos cinco anos e, se cabível, autorização do INCRA para desmembramento.",
    "O tabelião não deve lavrar desmembramento rural se a área desmembrada e a remanescente forem inferiores à fração mínima de parcelamento, salvo hipóteses normativas específicas.",
    "Aquisição de imóvel rural por estrangeiro exige análise própria das restrições da Lei 5.709/1971 e do Decreto 74.965/1974, inclusive residência, módulos, autorização do INCRA e limites municipais."
  ],
  "estrangeiro": [
    "Procuração de origem estrangeira utilizada no ato deve ser apostilada ou consularizada e ter referência ao livro e à folha do Registro de Títulos e Documentos em que foi trasladada, com a respectiva tradução quando necessária.",
    "Documento em língua estrangeira ou comparecente que não saiba a língua nacional exige cautela com tradutor público ou pessoa idônea aceita pelo tabelião, com menção no ato."
  ],
  "procuracao": [
    "Procuração para ato que exige instrumento público também deve revestir forma pública.",
    "Em procurações de pessoas idosas, recomenda-se prazo não superior a 1 ano quando houver risco concreto de comprometimento patrimonial, com poderes específicos e sem cláusula de irrevogabilidade, salvo negócio bilateral ou interesse exclusivo do outorgante.",
    "Quando advogado figurar como outorgado, constar número de inscrição.  Se a outorgada for sociedade de advogados, constar os advogados integrantes.",
    "Substabelecimento, renúncia e revogação de procuração devem observar apresentação dos instrumentos, arquivamento e remissões recíprocas quando não lavrados nas próprias notas."
  ],
  "divorcio": [
    "Exigir certidão de casamento, documentos de identidade e CPF, pacto antenupcial, certidões dos filhos capazes e documentos dos bens e direitos.",
    "As partes devem declarar que não têm filhos comuns ou, havendo, que são absolutamente capazes, com nomes e datas de nascimento.",
    "As partes também devem declarar que o cônjuge virago não se encontra em estado gravídico ou que não têm conhecimento dessa condição.",
    "Havendo filhos menores, a escritura é possível se comprovada a resolução judicial prévia de guarda, convivência e alimentos.",
    "Se houver representação por procuração, o instrumento público deve ter poderes especiais, cláusulas essenciais e validade de 30 dias. Procuração lavrada no exterior, registrada em RTD e traduzida quando necessário, pode ter validade de até 90 dias.",
    "Havendo transmissão patrimonial individual ou partilha desigual, comprovar o recolhimento do tributo sobre a fração transferida."
  ],
  "inventario": [
    "É facultada a nomeação de inventariante extrajudicial na escritura de inventário e partilha, podendo haver escritura autônoma para reunir documentos, recolher tributos e cumprir obrigações do espólio.",
    "O recolhimento dos tributos incidentes deve anteceder a lavratura da escritura, com observância das normas da Fazenda Estadual.",
    "Arquivar certidão ou documento fiscal que comprove a regularidade do imposto e fazer indicação expressa na escritura.",
    "Cônjuges dos herdeiros devem comparecer quando houver renúncia ou partilha que importe transmissão, salvo casamento sob separação absoluta.",
    "Companheiro com direito à sucessão é parte. Se não houver outro sucessor ou se não houver consenso sobre o reconhecimento da união estável, há necessidade de ação judicial.",
    "A meação de companheiro pode ser reconhecida por escritura se todos os herdeiros e interessados forem absolutamente capazes e concordes.",
    "Os documentos devem ser originais ou cópias autenticadas, mas os documentos de identidade das partes devem ser sempre originais.",
    "É vedada escritura de inventário e partilha referente a bens localizados no exterior.",
    "Inventário com testamento exige autorização expressa do juízo sucessório. Também se admite escritura quando o testamento estiver revogado, caduco ou declarado inválido por decisão transitada em julgado, desde que não haja disposição irrevogável, como reconhecimento de filho (divergência entre as Normas Nacionais e de São Paulo, checar)."
  ],
  "ata": [
    "Ata notarial é narração objetiva, fiel e detalhada de fatos jurídicos presenciados ou verificados pessoalmente pelo tabelião.",
    "A ata deve conter local, data e hora da lavratura e, se diversa, a hora em que os fatos foram presenciados ou verificados.",
    "A ata deve conter nome e qualificação do solicitante, narração circunstanciada, declaração de leitura e assinatura e sinal público do tabelião.",
    "Os documentos apresentados para a lavratura da ata devem ser arquivados em classificador próprio.",
    "A ata deve ser assinada pelo solicitante (em São Paulo pode conter. Recomenda-se sempre a coleta da assinatura) e testemunhas, ser redigida em locais, datas e horas diferentes, conter laudos técnicos, imagens e documentos em cores.",
    "O tabelião deve recusar o ato se o solicitante solicitar atuação contra a moral, a ética, os costumes e a lei. É possível lavrar ata quando o objeto narrado constitua fato ilícito."
  ],
  "usucapiao": [
    "Na ata para usucapião, além do tempo de posse, podem constar declaração de inexistência de ação possessória ou reivindicatória, declarações sobre tempo de posse e relação dos documentos apresentados.",
    "A ata de usucapião observa a circunscrição territorial do tabelião. Se houver diligência, respeitar o município da delegação e consignar o local da prática.",
    "A ata de usucapião não confirma propriedade e deve permanecer como instrumento de constatação e instrução do procedimento registral."
  ],
  "pacto": [
    "Quando o pacto antenupcial influenciar ato imobiliário posterior, a escritura deve mencionar o pacto e seu registro no Registro de Imóveis, ou a necessidade de registro antes da alienação ou oneração.",
    "Convém orientar expressamente sobre registro do pacto para eficácia perante terceiros."
  ],
  "testamento": [
    "Em testamento público com disposição em favor de pessoa jurídica altruística, científica, artística, beneficente, religiosa, educativa, cultural, política, esportiva ou recreativa, consultar o testador sobre a conveniência de cientificação por escrito.",
    "A mesma consulta deve ser feita em escritura de revogação de testamento ou de cláusula testamentária favorável a essas pessoas jurídicas."
  ],
  "uniaoEstavel": [
    "Na escritura de união estável, conferir estado civil, qualificação completa, regime patrimonial adotado e declaração de inexistência de impedimento informado pelas partes.",
    "Se houver extinção de união estável, aplicar as cautelas locais de dissolução consensual, partilha, advogado, filhos, gravidez e tributos, conforme o caso."
  ],
  "sobrepartilha": [
    "Na sobrepartilha extrajudicial, observar as cautelas aplicáveis ao inventário, divórcio ou extinção de união estável que originou a partilha anterior.",
    "Verificar recolhimento prévio de tributos, certidões fiscais, documentos originais, consenso dos interessados e eventual necessidade de autorização judicial."
  ],
  "dacaoPagamento": [
    "Se a dação envolver imóvel, aplicar as cautelas locais de escritura imobiliária, incluindo certidão atualizada, CNIB (o cartório emite), tributo de transmissão, valor do negócio e documentos fiscais.",
    "Em dação vinculada à quitação de dívida, separar obrigação, forma de pagamento, quitação e eventual garantia, com atenção à origem dos valores e à política de PLD/FTP."
  ],
  "nomeacaoInventariante": [
    "Admite-se escritura autônoma de nomeação de inventariante para reunir documentos, cumprir obrigações do falecido, recolher tributos e cumprir obrigações do espólio antes da partilha.",
    "A nomeação de inventariante não substitui a escritura de inventário e partilha nem dispensa a observância das regras locais sobre testamento, incapazes, tributos e certidões."
  ],
  "confissaoDivida": [
    "Em confissão de dívida com garantia imobiliária, aplicar as cautelas locais de escritura imobiliária, CNIB (o cartório emite), certidão atualizada, qualificação, anuências e documentos fiscais.",
    "Aplicar as cautelas gerais de qualificação, representação, PLD/FTP e legislação material aplicável."
  ],
  "contaNotarial": [
    "Não há disciplina estadual específica de conta notarial vinculada nas NSCGJ. Aplicar a norma nacional e a rotina local da serventia, sem confundir valores da operação com emolumentos ou despesas externas."
  ],
  "eletronico": [
    "Atos notariais digitais ou eletrônicos devem observar os itens pertinentes do Capítulo XIV, além das regras nacionais do e-Notariado."
  ],
  "adjudicacao": [
    "Checar a regra estadual específica sobre ata notarial para adjudicação compulsória extrajudicial. Mantida a base nacional e as cautelas gerais paulistas sobre ata, imóveis, CNIB (o cartório emite), qualificação e documentos originais."
  ],
  "alienacaoFiduciaria": [
    "A alienação fiduciária pode ser contratada por qualquer pessoa, física ou jurídica, e não é privativa do SFI, conforme item 224 das NSCGJ-SP.",
    "Imóvel enfiteutico pode ser objeto de alienação fiduciária sem necessidade de anuência do senhorio e sem pagamento do laudêmio. O laudêmio será exigível quando houver consolidação do domínio útil em favor do credor fiduciário.",
    "Cessão da posição do fiduciante exige anuência expressa do credor fiduciário. Cessão do crédito independe de anuência do devedor fiduciante."
  ]
};

const spDivergencias = {
  "inventario": [
    "Divergência de redação. A Resolução CNJ 35/2007 exige que, nos casos de testamento invalidado, revogado, rompido ou caduco, a invalidade ou ineficácia seja reconhecida por sentença judicial transitada em julgado na ação de abertura e cumprimento de testamento. As Normas de São Paulo mencionam testamento revogado ou caduco e decisão transitada para invalidade, sem reproduzir a mesma redação nacional sobre testamento rompido e reconhecimento judicial da ineficácia.",
    "Diferença de procedimento. A Resolução CNJ 35/2007 prevê submissão ao juízo competente em caso de impugnação do Ministério Público ou de terceiro no inventário com menor ou incapaz. Em São Paulo, as Normas direcionam o procedimento ao Juiz Corregedor Permanente da unidade extrajudicial.",
    "Diferença de procedimento. A Resolução CNJ 35/2007 admite inventário por cessionário de direitos hereditários, mesmo em cessão parcial, desde que todos os herdeiros estejam presentes e concordes. Em São Paulo, na cessão integral do acervo, as Normas dispensam a presença e concordância dos herdeiros cedentes.",
    "Diferença de procedimento. Na pendência de inventário judicial, São Paulo exige comprovação do deferimento do pedido de desistência ou suspensão do processo com a finalidade específica de lavrar escritura de inventário e partilha.",
    "Diferença de procedimento. No inventário extrajudicial de falecido estrangeiro com bens situados no Brasil, São Paulo exige certidão consular sobre teor e vigência da lei aplicável à época do óbito."
  ],
  "divorcio": [
    "Diferença de procedimento. A Resolução CNJ 35/2007 exige procuração pública com poderes especiais, cláusulas essenciais e prazo de 30 dias para divórcio consensual por mandatário. São Paulo admite prazo de até 90 dias para procuração lavrada no exterior, desde que registrada em Registro de Títulos e Documentos e acompanhada de tradução quando necessária.",
    "Diferença de procedimento. São Paulo exige que o tabelião disponibilize sala ou ambiente reservado e discreto para atendimento das partes em divórcio consensual, cautela operacional não detalhada na Resolução CNJ 35/2007.",
    "Diferença de procedimento. São Paulo admite que, no divórcio consensual, as partes optem por partilhar os bens e resolver pensão alimentícia posteriormente, ponto tratado expressamente nas Normas locais."
  ],
  "separacaoFato": [
    "Diferença de procedimento. A Resolução CNJ 35/2007 disciplina a declaração de separação de fato consensual. São Paulo replica o instituto e acrescenta regras de anotação e comunicação do restabelecimento conforme a serventia de origem ou o juízo que tenha proferido decisão."
  ],
  "geralResolucao35": [],
  "uniaoEstavel": [],
  "sobrepartilha": [],
  "nomeacaoInventariante": []
};


function limparDuplicados(lista) {
  return [...new Set((lista || []).filter(Boolean))];
}

function adicionarGrupo(grupos, titulo, itens) {
  const lista = limparDuplicados(itens || []);
  if (lista.length) grupos.push({ titulo, itens: lista });
}

function itensDosGrupos(grupos) {
  return limparDuplicados((grupos || []).flatMap(grupo => grupo.itens || []));
}

function obterAtos() {
  return Object.entries(dadosAtos).map(([id, ato]) => ({
    id,
    nome: ato.nome,
    resumo: ato.resumo
  }));
}

function montarTriagem(entrada = {}) {
  const s = {
    ato: entrada.ato || '',
    nomeCaso: '',
    temImovel: Boolean(entrada.temImovel),
    imovelRural: Boolean(entrada.imovelRural),
    dominioUniao: Boolean(entrada.dominioUniao),
    temPJ: Boolean(entrada.temPJ),
    temProcuracao: Boolean(entrada.temProcuracao),
    temEstrangeiro: Boolean(entrada.temEstrangeiro),
    temFinanciamento: Boolean(entrada.temFinanciamento),
    temContaNotarial: Boolean(entrada.temContaNotarial),
    temTributo: Boolean(entrada.temTributo),
    conteudoEconomico: Boolean(entrada.conteudoEconomico),
    atoEletronico: Boolean(entrada.atoEletronico),
    haMenorOuIncapaz: Boolean(entrada.haMenorOuIncapaz),
    observacoes: String(entrada.observacoes || '').trim().slice(0, 4000)
  };

  const ato = dadosAtos[s.ato];
  if (!ato) return null;

  let documentos = [...ato.documentos];
  let imovel = s.temImovel ? [...ato.imovel] : [];
  let tributos = [...ato.tributos];
  let atencao = [...ato.atencao];
  let complementaresGrupos = [];
  let conformidadeGrupos = [];
  let saoPauloGrupos = [];

  adicionarGrupo(saoPauloGrupos, 'Cautelas gerais de São Paulo', spNormas.geral);

  if (s.temPJ) {
    adicionarGrupo(complementaresGrupos, 'Há pessoa jurídica', extras.pessoaJuridica);
  }
  if (s.temProcuracao) {
    adicionarGrupo(complementaresGrupos, 'Há procuração ou representante', extras.procuracao);
  }
  if (s.temEstrangeiro) {
    adicionarGrupo(complementaresGrupos, 'Há pessoa estrangeira ou documento estrangeiro', extras.estrangeiro);
    adicionarGrupo(saoPauloGrupos, 'Há pessoa estrangeira ou documento estrangeiro', spNormas.estrangeiro);
  }
  if (s.imovelRural) {
    adicionarGrupo(complementaresGrupos, 'Imóvel rural', extras.rural);
    adicionarGrupo(saoPauloGrupos, 'Imóvel rural', spNormas.rural);
  }
  if (s.dominioUniao) {
    adicionarGrupo(complementaresGrupos, 'Domínio útil ou terreno da União', extras.dominioUniao);
  }
  if (s.temFinanciamento) {
    adicionarGrupo(complementaresGrupos, 'Há financiamento, saldo devedor ou garantia', extras.financiamento);
  }
  if (s.temContaNotarial) {
    adicionarGrupo(complementaresGrupos, 'Pretende usar conta notarial', extras.contaNotarial);
    adicionarGrupo(saoPauloGrupos, 'Pretende usar conta notarial', spNormas.contaNotarial);
  }
  if (s.temTributo) {
    adicionarGrupo(complementaresGrupos, 'Exige análise de imposto, guia ou isenção', extras.tributo);
  }
  if (s.atoEletronico) {
    adicionarGrupo(conformidadeGrupos, 'Ato eletrônico ou híbrido pelo e-Notariado', extras.atoEletronico);
    adicionarGrupo(saoPauloGrupos, 'Ato eletrônico ou híbrido pelo e-Notariado', spNormas.eletronico);
  }
  if (s.haMenorOuIncapaz) {
    adicionarGrupo(conformidadeGrupos, 'Há menor, incapaz ou dados de criança/adolescente', extras.menorIncapaz);
  }

  if (s.conteudoEconomico) {
    adicionarGrupo(conformidadeGrupos, 'Conformidade UIF (COAF)', extras.pld);
  }
  adicionarGrupo(conformidadeGrupos, 'Privacidade e tratamento local de dados', extras.lgpd);

  if (['inventario','sobrepartilha','divorcio','nomeacaoInventariante'].includes(s.ato)) {
    adicionarGrupo(conformidadeGrupos, 'Resolução CNJ 35/2007: disposições gerais', resolucao35.geral);
    adicionarGrupo(saoPauloGrupos, 'Diferenças de procedimento com a Resolução CNJ 35/2007', spDivergencias.geralResolucao35);
  }
  if (s.ato === 'inventario') {
    adicionarGrupo(conformidadeGrupos, 'Resolução CNJ 35/2007: inventário e partilha', resolucao35.inventario);
    adicionarGrupo(conformidadeGrupos, 'Resolução CNJ 35/2007: inventário com testamento', resolucao35.testamentoInventario);
  }
  if (s.ato === 'sobrepartilha') {
    adicionarGrupo(conformidadeGrupos, 'Resolução CNJ 35/2007: sobrepartilha', resolucao35.sobrepartilha);
  }
  if (s.ato === 'nomeacaoInventariante') {
    adicionarGrupo(conformidadeGrupos, 'Resolução CNJ 35/2007: nomeação de inventariante', resolucao35.nomeacaoInventariante);
  }
  if (s.ato === 'divorcio') {
    adicionarGrupo(conformidadeGrupos, 'Resolução CNJ 35/2007: divórcio e extinção consensual de união estável', resolucao35.divorcioExtincao);
    adicionarGrupo(conformidadeGrupos, 'Resolução CNJ 35/2007: declaração de separação de fato e restabelecimento', resolucao35.separacaoFato);
  }
  if (s.ato === 'uniaoEstavel') {
    adicionarGrupo(conformidadeGrupos, 'Resolução CNJ 35/2007: união estável', resolucao35.uniaoEstavel);
  }
  if (s.haMenorOuIncapaz && ['inventario','sobrepartilha','nomeacaoInventariante'].includes(s.ato)) {
    adicionarGrupo(conformidadeGrupos, 'Resolução CNJ 35/2007: menor, incapaz ou nascituro no inventário', resolucao35.menorInventario);
  }
  if (s.temImovel && ['inventario','nomeacaoInventariante'].includes(s.ato)) {
    adicionarGrupo(conformidadeGrupos, 'Resolução CNJ 35/2007: autorização de venda por inventariante', resolucao35.vendaInventariante);
  }

  if (s.temImovel) {
    adicionarGrupo(saoPauloGrupos, 'Envolve imóvel', spNormas.imovel);
  }

  if (s.temProcuracao || s.ato === 'procuracao') {
    adicionarGrupo(
      saoPauloGrupos,
      s.ato === 'procuracao' ? 'Tipo de ato: procuração pública' : 'Há procuração ou representante',
      spNormas.procuracao
    );
  }

  if (s.ato === 'uniaoEstavel') {
    adicionarGrupo(saoPauloGrupos, 'Tipo de ato: união estável', spNormas.uniaoEstavel);
    adicionarGrupo(saoPauloGrupos, 'Diferenças de procedimento: união estável', spDivergencias.uniaoEstavel);
  }
  if (s.ato === 'sobrepartilha') {
    adicionarGrupo(saoPauloGrupos, 'Tipo de ato: sobrepartilha', spNormas.sobrepartilha);
    adicionarGrupo(saoPauloGrupos, 'Diferenças de procedimento: sobrepartilha', spDivergencias.sobrepartilha);
    adicionarGrupo(saoPauloGrupos, 'Diferenças de procedimento: inventário', spDivergencias.inventario);
  }
  if (s.ato === 'divorcio') {
    adicionarGrupo(saoPauloGrupos, 'Tipo de ato: divórcio e extinção de união estável', spNormas.divorcio);
    adicionarGrupo(saoPauloGrupos, 'Diferenças de procedimento: divórcio e extinção de união estável', spDivergencias.divorcio);
    adicionarGrupo(saoPauloGrupos, 'Diferenças de procedimento: separação de fato', spDivergencias.separacaoFato);
    adicionarGrupo(saoPauloGrupos, 'Diferenças de procedimento: união estável', spDivergencias.uniaoEstavel);
  }
  if (s.ato === 'inventario') {
    adicionarGrupo(saoPauloGrupos, 'Tipo de ato: inventário extrajudicial', spNormas.inventario);
    adicionarGrupo(saoPauloGrupos, 'Diferenças de procedimento: inventário', spDivergencias.inventario);
  }
  if (s.ato === 'ata') adicionarGrupo(saoPauloGrupos, 'Tipo de ato: ata notarial', spNormas.ata);
  if (s.ato === 'usucapiao') adicionarGrupo(saoPauloGrupos, 'Tipo de ato: ata para usucapião extrajudicial', [...spNormas.ata, ...spNormas.usucapiao]);
  if (s.ato === 'adjudicacao') adicionarGrupo(saoPauloGrupos, 'Tipo de ato: ata para adjudicação compulsória extrajudicial', [...spNormas.ata, ...spNormas.adjudicacao]);
  if (s.ato === 'pacto') adicionarGrupo(saoPauloGrupos, 'Tipo de ato: pacto antenupcial', spNormas.pacto);
  if (s.ato === 'dacaoPagamento') adicionarGrupo(saoPauloGrupos, 'Tipo de ato: dação em pagamento', spNormas.dacaoPagamento);
  if (s.ato === 'nomeacaoInventariante') {
    adicionarGrupo(saoPauloGrupos, 'Tipo de ato: nomeação de inventariante', spNormas.nomeacaoInventariante);
    adicionarGrupo(saoPauloGrupos, 'Diferenças de procedimento: nomeação de inventariante', spDivergencias.nomeacaoInventariante);
    adicionarGrupo(saoPauloGrupos, 'Diferenças de procedimento: inventário', spDivergencias.inventario);
  }
  if (s.ato === 'confissaoDivida') adicionarGrupo(saoPauloGrupos, 'Tipo de ato: confissão de dívida', spNormas.confissaoDivida);
  if (s.ato === 'testamento') adicionarGrupo(saoPauloGrupos, 'Tipo de ato: testamento ou revogação de testamento', spNormas.testamento);
  if (s.ato === 'alienacaoFiduciaria') adicionarGrupo(saoPauloGrupos, 'Tipo de ato: alienação fiduciária em garantia', spNormas.alienacaoFiduciaria);

  const pendencias = [
    'Confirmar a competência, forma do ato e possibilidade de atendimento presencial, eletrônico ou híbrido.',
    'Conferir documentos originais, validade, autenticidade e coerência entre nomes, CPFs, estado civil, união estável e domicílio.',
    'Submeter o caso à qualificação do escrevente ou tabelião responsável antes da lavratura definitiva.',
    'Não considerar a triagem como aprovação do ato, cálculo final de emolumentos ou validação jurídica completa.'
  ];

  return {
    titulo: ato.nome,
    resumo: ato.resumo,
    nomeCaso: s.nomeCaso,
    documentos: limparDuplicados(documentos),
    imovel: limparDuplicados(imovel),
    complementares: itensDosGrupos(complementaresGrupos),
    complementaresGrupos,
    conformidade: itensDosGrupos(conformidadeGrupos),
    conformidadeGrupos,
    saoPaulo: itensDosGrupos(saoPauloGrupos),
    saoPauloGrupos,
    tributos: limparDuplicados(tributos),
    atencao: limparDuplicados(atencao),
    pendencias,
    observacoes: s.observacoes
  };
}

module.exports = {
  obterAtos,
  montarTriagem
};
