/* Todo o conteúdo didático é local: o site funciona sem conexão. */
const lessons = [
  {
    title:'Aprenda a ler uma fórmula', subtitle:'Carbono, hidrogênio e as linhas entre eles.', map:'A base para não se perder nas próximas aulas.',
    body:`<p>Uma fórmula estrutural é um <strong>mapa de átomos</strong>. As letras são os átomos: C é carbono, H é hidrogênio, O é oxigênio. O número pequeno indica quantos existem naquele grupo: <span class="formula">CH₃</span> significa 1 carbono ligado a 3 hidrogênios.</p><p>Os traços indicam ligações: <strong>–</strong> é simples, <strong>=</strong> é dupla, <strong>≡</strong> é tripla. Em <span class="formula">CH₃–CH₂–OH</span>, leia da esquerda para a direita: carbono, carbono, oxigênio ligado a hidrogênio.</p><div class="rule"><strong>Primeiro passo em qualquer questão:</strong> conte os C, procure O ou outra letra diferente e observe se algum C está ligado a outro C por = ou ≡.</div><p><strong>Por que existe CH₃ e CH₂?</strong> O carbono costuma formar 4 ligações; o hidrogênio, 1; o oxigênio, 2. Em CH₃–CH₂–OH, o primeiro C tem 3 ligações com H + 1 com C; o segundo tem 2 com H + 1 com C + 1 com O. O oxigênio se liga ao C e ao H.</p><p><strong>–OH</strong> é um oxigênio ligado a um hidrogênio. <span class="formula">C–O–C</span> é oxigênio <em>entre</em> dois grupos de carbono. Essas duas situações serão decisivas.</p><p><strong>Fórmula molecular ≠ desenho da estrutura:</strong> etanol (CH₃–CH₂–OH) e dimetil éter (CH₃–O–CH₃) têm a mesma fórmula molecular C₂H₆O. Os átomos estão conectados de outra forma; por isso são substâncias de funções diferentes. Se a questão pede a função, olhe as ligações, não apenas a contagem de letras.</p>`,
    worked:{q:'O que você consegue ler em CH₃–CH₂–OH?', steps:['CH₃ e CH₂: são dois grupos que contêm carbono. Portanto, há 2 carbonos.','O traço entre os carbonos é simples: C–C.','Na ponta aparece –OH: oxigênio ligado a hidrogênio.','O –OH está ligado a um carbono comum (CH₂): essa estrutura é um álcool.'],answer:'2 carbonos, ligação C–C simples, grupo –OH e função álcool.'},
    mistake:'O número ₃ em CH₃ conta hidrogênios daquele grupo; não significa três carbonos.'
  },
  {
    title:'Classifique a cadeia', subtitle:'Aberta ou fechada, saturada ou insaturada, homogênea ou heterogênea.', map:'Três perguntas fixas resolvem quase toda a primeira metade da lista.',
    body:`<p><strong>1. Aberta ou fechada?</strong> Siga os átomos: se eles formam um anel, é <strong>fechada</strong>; se não, é <strong>aberta</strong>. Pense em colar fechado versus corda com duas pontas.</p><p><strong>2. Saturada ou insaturada?</strong> Examine <em>as ligações entre carbonos</em>. Só C–C simples: <strong>saturada</strong>. Existe C=C ou C≡C: <strong>insaturada</strong>.</p><p><strong>3. Homogênea ou heterogênea?</strong> Um átomo diferente de C entre dois carbonos na cadeia, como <span class="formula">C–O–C</span>, torna a cadeia <strong>heterogênea</strong>. Se não há heteroátomo intercalado, é <strong>homogênea</strong>.</p><div class="rule"><strong>Cuidado com a ponta:</strong> em CH₃–CH₂–OH, o O fica no fim; a cadeia é homogênea. Em CH₃–O–CH₃, O separa dois C; a cadeia é heterogênea. A ligação C–O não torna a cadeia insaturada.</div>`,
    worked:{q:'Classifique CH₃–O–CH₂–CH₃.',steps:['Não existe anel: cadeia aberta.','Não existe C=C nem C≡C: cadeia saturada.','O oxigênio está entre grupos de carbono: cadeia heterogênea.'],answer:'Aberta, saturada e heterogênea.'},
    mistake:'“Tem oxigênio” não basta para chamar a cadeia de heterogênea: ele precisa estar inserido entre carbonos.'
  },
  {
    title:'Famílias de hidrocarbonetos', subtitle:'Alcano, alceno, alcino e aromático.', map:'Olhe apenas C e H, depois veja as ligações ou o anel.',
    body:`<p><strong>Hidrocarboneto</strong> é uma substância formada <strong>somente por carbono e hidrogênio</strong>. Se aparecer O, como em CH₃–OH, já não é hidrocarboneto.</p><ul><li><strong>Alcano:</strong> ligações C–C simples em cadeia aberta. Ex.: CH₃–CH₃ (etano).</li><li><strong>Alceno:</strong> contém pelo menos uma C=C em cadeia aberta. Ex.: CH₂=CH₂ (eteno).</li><li><strong>Alcino:</strong> contém pelo menos uma C≡C em cadeia aberta. Ex.: HC≡CH (etino).</li><li><strong>Aromático:</strong> contém anel aromático, como o benzeno C₆H₆. Ter ligações duplas desenhadas no anel não o transforma em “alceno” na classificação desta lista.</li></ul><div class="rule"><strong>Ordem de decisão:</strong> só C e H? Veja se há anel aromático; em cadeia aberta, procure tripla, dupla ou apenas simples.</div>`,
    worked:{q:'Classifique CH₂=CH–CH₃.',steps:['Só aparecem C e H: é hidrocarboneto.','A cadeia não forma anel.','Existe C=C: é um alceno; a cadeia também é insaturada.'],answer:'Hidrocarboneto da família dos alcenos.'},
    mistake:'Nem todo hidrocarboneto é alcano. “Hidrocarboneto” descreve a composição; alcano/alceno/alcino/aromático especificam o tipo.'
  },
  {
    title:'Monte os nomes básicos', subtitle:'Prefixo + infixo + sufixo.', map:'A lógica de propano, eteno e nomes parecidos.',
    body:`<p>Na nomenclatura introdutória das listas, o nome tem três pedaços. <strong>Prefixo</strong> indica a quantidade de carbonos; <strong>infixo</strong>, o tipo de ligação C–C; <strong>sufixo</strong>, a função.</p><div class="rule"><strong>Carbonos:</strong> 1 met · 2 et · 3 prop · 4 but · 5 pent · 6 hex.<br><strong>Ligações:</strong> simples an · dupla en · tripla in.<br><strong>Final:</strong> o para hidrocarboneto; ol para álcool simples.</div><p>Exemplos: <span class="formula">CH₃–CH₂–CH₃</span> tem 3 C + simples + hidrocarboneto = <strong>prop + an + o = propano</strong>. <span class="formula">CH₂=CH₂</span> tem 2 C + dupla + hidrocarboneto = <strong>eteno</strong>.</p><p>Quando uma dupla pode ocupar mais de um lugar, indique a posição e numere a partir da ponta mais próxima dela: CH₂=CH–CH₂–CH₃ é <strong>but-1-eno</strong>. Compare com CH₃–CH=CH–CH₃, <strong>but-2-eno</strong>. O número indica onde a dupla começa. Nas questões originais, o foco é reconhecer as partes do nome.</p><p><strong>Limite deste atalho:</strong> moléculas ramificadas ou com vários grupos exigem regras adicionais. Para a revisão das suas listas, trabalhe primeiro com as cadeias simples mostradas aqui.</p>`,
    worked:{q:'Por que CH₃–CH₃ é etano e CH₂=CH₂ é eteno?',steps:['Os dois têm 2 C: prefixo et.','O primeiro tem ligação simples C–C: infixo an.','O segundo tem ligação dupla C=C: infixo en.','Os dois são hidrocarbonetos: sufixo o.'],answer:'et + an + o = etano; et + en + o = eteno.'},
    mistake:'A diferença entre etano e eteno está no infixo, não no prefixo: ambos têm dois carbonos.'
  },
  {
    title:'Reconheça um álcool', subtitle:'–OH ligado a carbono saturado.', map:'O etanol é o exemplo principal da segunda lista.',
    body:`<p>Procure o grupo <strong>–OH</strong>. Se ele estiver ligado a um <strong>carbono saturado</strong> (um carbono com ligações simples), a função é <strong>álcool</strong>. Ex.: <span class="formula">CH₃–CH₂–OH</span> é etanol.</p><p>O –OH pode estar na ponta ou no meio: <span class="formula">CH₃–OH</span> (metanol), <span class="formula">CH₃–CH₂–OH</span> (etanol) e <span class="formula">CH₃–CH(OH)–CH₃</span> (propan-2-ol) são álcoois.</p><div class="rule"><strong>Faça a pergunta certa:</strong> o O está ligado a H (–OH)? Se sim, em qual carbono o –OH se prende? Num carbono saturado: álcool; diretamente no anel aromático: fenol.</div>`,
    worked:{q:'CH₃–CH(OH)–CH₃ é álcool mesmo com –OH no meio?',steps:['Há um grupo –OH: O ligado a H.','O carbono que recebe –OH é o CH central, com ligações simples.','A posição no meio da cadeia não muda a função.'],answer:'Sim. É um álcool (propan-2-ol).'},
    mistake:'Ter oxigênio não significa ser álcool. No éter C–O–C, o oxigênio não está ligado a H.'
  },
  {
    title:'Reconheça um fenol', subtitle:'–OH diretamente no anel aromático.', map:'O detalhe “diretamente” decide a classificação.',
    body:`<p>Um <strong>anel aromático</strong> é um tipo especial de anel de carbonos. A escrita <span class="formula">C₆H₅–</span> representa o anel benzênico ligado a alguma coisa. Se <strong>–OH estiver preso diretamente</strong> a um carbono desse anel, a função é <strong>fenol</strong>: <span class="formula">C₆H₅–OH</span>.</p><p>Compare <span class="formula">C₆H₅–OH</span> com <span class="formula">C₆H₅–CH₂–CH₂–OH</span>. Na segunda estrutura, existem dois carbonos <em>entre</em> o anel e o –OH. O –OH se liga ao CH₂, então a função observada é <strong>álcool</strong>.</p><div class="rule"><strong>Teste visual:</strong> anel–OH → fenol. Anel–CH₂–OH → álcool. O anel sozinho não torna qualquer –OH um fenol.</div>`,
    worked:{q:'Qual é a função de C₆H₅–OH? E de C₆H₅–CH₂–OH?',steps:['Em C₆H₅–OH, o –OH toca diretamente o anel: fenol.','Em C₆H₅–CH₂–OH, o –OH toca o CH₂ de fora do anel: álcool.','O que importa é a ligação imediata do grupo –OH.'],answer:'Primeiro: fenol. Segundo: álcool.'},
    mistake:'A presença simultânea de anel e –OH não basta; procure exatamente onde o –OH está ligado.'
  },
  {
    title:'Reconheça um éter', subtitle:'Oxigênio entre dois grupos de carbono.', map:'C–O–C é a pista que não falha nesta lista.',
    body:`<p>Um <strong>éter</strong> tem a forma geral <span class="formula">R–O–R′</span>: o oxigênio é uma ponte entre <strong>dois grupos carbônicos</strong>. Em <span class="formula">CH₃–O–CH₃</span>, existe C–O–C: éter. Em <span class="formula">CH₃–CH₂–O–CH₂–CH₃</span>, também.</p><p>Um dos lados pode ser aromático: <span class="formula">C₆H₅–O–CH₃</span> continua sendo éter. O oxigênio se liga ao anel de um lado e a CH₃ do outro; <strong>não</strong> há –OH.</p><div class="rule"><strong>Compare:</strong> CH₃–CH₂–OH → O ligado a H = álcool. CH₃–O–CH₃ → O ligado a dois carbonos = éter. A cadeia deste último também é heterogênea.</div>`,
    worked:{q:'Classifique C₆H₅–O–CH₃.',steps:['Encontre o oxigênio. Ele está ligado ao anel aromático de um lado.','Do outro lado está ligado ao carbono de CH₃.','Ele forma C–O–C, sem ligação O–H: éter.'],answer:'Éter, mesmo com um anel aromático na estrutura.'},
    mistake:'Não chame C₆H₅–O–CH₃ de fenol: no fenol a estrutura é C₆H₅–OH, com H ligado ao O.'
  },
  {
    title:'Junte todas as pistas', subtitle:'Uma sequência para classificar qualquer estrutura das listas.', map:'Seu método de prova para as questões que misturam funções.',
    body:`<p>Faça sempre nesta ordem:</p><ol><li><strong>Veja as letras:</strong> só C e H? É hidrocarboneto. Se houver O, analise o grupo.</li><li><strong>Procure O–H:</strong> se existir –OH ligado a carbono saturado, é álcool; diretamente ao anel aromático, é fenol.</li><li><strong>Procure C–O–C:</strong> se o oxigênio está entre dois grupos carbônicos, é éter.</li><li><strong>Se for hidrocarboneto:</strong> anel aromático? Aromático. Na cadeia aberta, C≡C? Alcino; C=C? Alceno; só C–C? Alcano.</li><li><strong>Se pedirem cadeia:</strong> confira anel, ligações entre C e heteroátomo entre C, independentemente da função.</li></ol><div class="rule"><strong>Não confunda duas perguntas:</strong> “qual é a função?” e “a cadeia é homogênea?”. CH₃–CH₂–OH é álcool e tem cadeia homogênea; CH₃–O–CH₃ é éter e tem cadeia heterogênea.</div>`,
    worked:{q:'Classifique A = CH₃–CH₂–CH₃, B = C₆H₅–OH e C = CH₃–O–CH₃.',steps:['A só tem C e H, com ligações simples: hidrocarboneto alcano.','B tem –OH diretamente no anel: fenol.','C tem O entre dois carbonos (C–O–C): éter.'],answer:'A = alcano; B = fenol; C = éter.'},
    mistake:'Evite decorar apenas “tem O”. A posição do O e o H ligado a ele é que identificam a função.'
  }
];

/* Cada questão de prática tem resposta e explicação independente. */
const practice = [
  [
    ['Em CH₃–CH₂–CH₃, quantos carbonos existem?',['2','3','6','8'],1,'Cada grupo CH₃ ou CH₂ contém um carbono: são três grupos, portanto 3 C.'],
    ['O que significa CH₂?',['Dois carbonos e um H','Um carbono e dois H','Um C e nenhuma ligação','Dois grupos –OH'],1,'O número ₂ vale para o H: 1 C com 2 H.'],
    ['Qual símbolo indica ligação tripla entre carbonos?',['–','=','≡','–OH'],2,'C≡C é tripla; C=C é dupla e C–C é simples.'],
    ['Qual trecho contém oxigênio ligado a hidrogênio?',['CH₃–O–CH₃','CH₃–CH₂–OH','CH₂=CH₂','CH₃–CH₃'],1,'–OH contém O ligado diretamente a H.']
  ],
  [
    ['CH₂=CH–CH₃ é uma cadeia...',['fechada e saturada','aberta e insaturada','fechada e heterogênea','aberta e heterogênea'],1,'Não há anel; a dupla C=C torna a cadeia insaturada.'],
    ['CH₃–O–CH₃ é heterogênea por quê?',['Porque tem H','Porque tem duas pontas','Porque O está entre dois carbonos','Porque toda ligação simples é heterogênea'],2,'O heteroátomo precisa estar inserido na sequência C–O–C.'],
    ['CH₃–CH₂–OH tem cadeia homogênea porque...',['não possui O','O está na ponta, não entre dois C','tem ligação dupla','é fechada'],1,'O oxigênio aparece na extremidade como –OH; não interrompe a sequência de carbonos.'],
    ['Um anel só de carbonos, com C–C simples, é...',['aberto, insaturado e homogêneo','fechado, saturado e homogêneo','fechado, insaturado e heterogêneo','aberto, saturado e heterogêneo'],1,'Anel = fechado; só C–C simples = saturado; sem heteroátomo no caminho = homogêneo.']
  ],
  [
    ['HC≡CH pertence a qual família?',['alcano','alceno','alcino','álcool'],2,'Só C e H e ligação C≡C: alcino.'],
    ['CH₂=CH₂ é...',['alcano','alceno','éter','fenol'],1,'Só C e H com ligação dupla C=C: alceno.'],
    ['O benzeno C₆H₆ é classificado como...',['alcano','éter','hidrocarboneto aromático','álcool'],2,'Contém só C e H e possui anel aromático.'],
    ['Qual estrutura NÃO é hidrocarboneto?',['CH₃–CH₃','HC≡CH','CH₃–OH','C₆H₆'],2,'CH₃–OH inclui oxigênio; hidrocarbonetos contêm somente C e H.']
  ],
  [
    ['CH₃–CH₂–CH₃ recebe qual nome?',['etano','propeno','propano','butano'],2,'São 3 C (prop), ligação simples (an), hidrocarboneto (o): propano.'],
    ['Em “eteno”, qual parte indica a dupla?',['et','en','o','eno inteiro'],1,'O infixo en indica ligação dupla C=C.'],
    ['CH₂=CH₂ recebe o nome...',['etano','eteno','etino','metano'],1,'2 C = et; dupla = en; hidrocarboneto = o.'],
    ['Um hidrocarboneto de 4 C com apenas ligações simples chama-se...',['butano','buteno','propano','pentano'],0,'4 C = but; ligações simples = an; final de hidrocarboneto = o.']
  ],
  [
    ['Qual das estruturas é álcool?',['CH₃–O–CH₃','C₆H₅–OH','CH₃–CH₂–OH','CH₃–CH₃'],2,'Em CH₃–CH₂–OH, –OH está ligado a carbono saturado.'],
    ['CH₃–CH(OH)–CH₃ é álcool?',['Não, –OH está no meio','Sim, –OH liga-se a carbono saturado','Não, possui 3 carbonos','Sim, porque tem C–O–C'],1,'A posição do –OH na cadeia pode variar; o CH central é saturado.'],
    ['Qual característica define o álcool destas listas?',['Anel aromático qualquer','Qualquer oxigênio','–OH ligado a carbono saturado','Ligação C≡C'],2,'O grupo –OH precisa estar ligado ao carbono saturado; apenas conter O não basta.'],
    ['CH₃–OH é...',['fenol','éter','alcano','álcool'],3,'O –OH se liga ao único carbono, saturado: metanol, um álcool.']
  ],
  [
    ['C₆H₅–OH é...',['álcool','fenol','éter','alceno'],1,'O –OH toca diretamente um carbono do anel aromático.'],
    ['C₆H₅–CH₂–OH é...',['fenol, pois tem anel','álcool, pois –OH se liga ao CH₂','éter, pois tem oxigênio','hidrocarboneto'],1,'O CH₂ separa o anel do –OH. O grupo se liga ao carbono saturado CH₂.'],
    ['Para ser fenol, o grupo –OH deve estar...',['na ponta de qualquer cadeia','entre dois carbonos','diretamente no anel aromático','ligado somente a H'],2,'A ligação direta anel–OH é o critério da função fenol.'],
    ['Qual par mostra primeiro fenol, depois álcool?',['C₆H₅–OH / C₆H₅–CH₂–OH','CH₃–OH / C₆H₅–OH','CH₃–O–CH₃ / CH₃–OH','C₆H₆ / CH₃–OH'],0,'No primeiro o –OH está no anel; no segundo está no CH₂ fora do anel.']
  ],
  [
    ['Qual fórmula representa um éter?',['CH₃–CH₂–OH','C₆H₅–OH','CH₃–O–CH₃','CH₃–CH₃'],2,'O oxigênio está entre dois grupos de carbono, em C–O–C.'],
    ['C₆H₅–O–CH₃ é...',['fenol','éter','álcool','hidrocarboneto'],1,'O oxigênio conecta o anel aromático ao CH₃; não há O–H.'],
    ['No éter, o oxigênio está ligado...',['a dois grupos carbônicos','somente a H','a dois H','a uma ligação tripla'],0,'A forma geral do éter é R–O–R′, com O entre grupos carbônicos.'],
    ['Qual par é composto só por éteres?',['CH₃–O–CH₃ e C₆H₅–O–CH₃','CH₃–OH e C₆H₅–OH','CH₃–O–CH₃ e CH₃–OH','CH₃–CH₃ e CH₃–O–CH₃'],0,'Ambos têm C–O–C; CH₃–OH é álcool e C₆H₅–OH é fenol.']
  ],
  [
    ['A = CH₃–CH₃; B = CH₃–CH₂–OH. A e B são...',['dois álcoois','alcano e álcool','éter e fenol','dois hidrocarbonetos'],1,'A contém só C/H e ligações simples: alcano. B tem –OH em carbono saturado: álcool.'],
    ['I = CH₃–OH; II = C₆H₅–OH; III = CH₃–O–CH₃. A ordem é...',['álcool, fenol, éter','fenol, álcool, éter','éter, fenol, álcool','álcool, éter, fenol'],0,'–OH em C saturado; –OH direto no anel; e C–O–C, respectivamente.'],
    ['Qual conjunto de pistas identifica CH₂=CH–CH₂–CH₃?',['4 C, aberta, insaturada, alceno','4 C, fechada, saturada, alcano','3 C, aberta, heterogênea, éter','4 C, aberta, saturada, alcino'],0,'Há quatro C, sem anel, uma dupla C=C e somente C/H.'],
    ['“Tem oxigênio, logo é álcool.” Por que essa regra falha?',['Oxigênio nunca aparece em álcool','Fenóis e éteres também têm oxigênio','Álcoois só têm C/H','Éteres sempre têm –OH'],1,'O mesmo elemento O aparece em funções diferentes; observe como ele está ligado.']
  ]
];

/* Correção da lista original: tema, letra e raciocínio específico da questão. */
const reviewA = [
 ['Butano CH₃–CH₂–CH₂–CH₃: três critérios','C','Sem anel = aberta; só C–C simples = saturada; sem heteroátomo entre C = homogênea.'],
 ['Propano versus propeno: saturação','B','II possui C=C, por isso é insaturado. I apresenta somente C–C simples.'],
 ['CH₃–CH₂–O–CH₂–CH₃: oxigênio na cadeia','D','Sem anel; nenhuma ligação múltipla C–C; O inserido entre grupos carbônicos.'],
 ['Definições de aberta, saturada e heterogênea','E','As três afirmações descrevem corretamente ausência de ciclo, C–C simples e heteroátomo inserido.'],
 ['Anel apenas com C–C simples','B','O anel torna a cadeia fechada; as ligações simples a tornam saturada; sem heteroátomo, homogênea.'],
 ['Etano, eteno e etino','D','CH₃–CH₃: alcano; CH₂=CH₂: alceno; HC≡CH: alcino.'],
 ['Só C/H e pelo menos uma C=C','C','Em cadeia aberta, hidrocarboneto com dupla C=C é alceno.'],
 ['Benzeno C₆H₆','C','Formado só por C e H e com anel aromático: hidrocarboneto aromático.'],
 ['Definição de hidrocarboneto','A','Somente carbono e hidrogênio é exatamente a definição de hidrocarboneto.'],
 ['Prefixo + infixo + sufixo','E','Prefixo conta C; infixo indica ligação entre C; sufixo pode indicar a função.'],
 ['Nome de CH₃–CH₂–CH₃','B','Três C = PROP, ligações simples = AN, hidrocarboneto = O: propano.'],
 ['Por que etano e eteno diferem?','C','Mesmo prefixo ET, pois ambos têm dois C. AN vira EN porque a ligação passa de simples a dupla.'],
 ['Por que CH₃–CH₂–OH difere dos hidrocarbonetos?','D','O terceiro composto contém –OH, grupo característico do álcool; os dois primeiros só têm C/H.'],
 ['CH₂=CH–CH₂–CH₃: análise completa','Discursiva','a) Aberta, não há ciclo. b) Insaturada, há C=C. c) Homogênea, não há heteroátomo entre carbonos. d) Sim, é alceno: só C/H e ligação dupla C=C.'],
 ['Amostras A = propano e B = etanol','Discursiva','A tem apenas C/H e ligações simples: hidrocarboneto alcano. B contém oxigênio no –OH ligado a carbono saturado: álcool. A presença de –OH distingue B.']
];
const reviewB = [
 ['Etanol CH₃–CH₂–OH','C','O –OH está ligado ao carbono saturado da cadeia: função álcool.'],
 ['Etanol versus C₆H₅–OH','B','Etanol é álcool; C₆H₅–OH é fenol porque o –OH se liga diretamente ao anel aromático.'],
 ['CH₃–O–CH₃','C','O oxigênio faz a ponte C–O–C entre dois grupos carbônicos: éter.'],
 ['Etanol, dimetil éter e propano','A','I tem –OH em C saturado: álcool. II tem C–O–C: éter. III só tem C/H: hidrocarboneto.'],
 ['–OH diretamente no anel aromático','A','O critério específico para fenol é a ligação direta do –OH a um carbono do anel.'],
 ['Encontre o erro nas três amostras','B','Amostra II = C₆H₅–OH: deve ser fenol, e não álcool. I e III estão corretas.'],
 ['Três regras estruturais','E','I, II e III estão certas: álcool (–OH em C saturado), fenol (–OH no anel), éter (C–O–C).'],
 ['–OH em posições diferentes','E','CH₃–OH, CH₃–CH₂–OH e CH₃–CH(OH)–CH₃ são álcoois: todos têm –OH em C saturado.'],
 ['Anel aromático com –OH direto ou distante','D','A = C₆H₅–OH é fenol. B = C₆H₅–CH₂–CH₂–OH é álcool: o –OH se liga ao CH₂, não ao anel.'],
 ['Quais das quatro estruturas são éteres?','D','I e II possuem C–O–C; III = C₆H₅–O–CH₃ também tem O entre grupos carbônicos. IV é álcool.'],
 ['Contém O, não tem –OH e apresenta C–O–C','C','Oxigênio ligado por ligações simples a dois grupos carbônicos, sem O–H: éter.'],
 ['Critérios de identificação das três funções','E','As três correspondências estão corretas: –OH em C saturado, –OH no anel e O entre carbonos.'],
 ['Etanol e fenol são funções diferentes','A','As duas afirmações são verdadeiras. A posição de –OH, explicada na segunda, justifica a diferença da primeira.'],
 ['Sequência hidrocarboneto, álcool, fenol, éter','A','I = propano (só C/H); II = etanol (álcool); III = C₆H₅–OH (fenol); IV = CH₃–O–CH₃ (éter).'],
 ['Três frascos A, B e C','Discursiva','a) A = álcool; B = fenol; C = éter. b) A: –OH em C saturado; B: –OH diretamente no anel; C: O entre dois grupos carbônicos. c) O aparece nas três; é a posição e a ligação do O que determinam a função.']
];

const comparisons = [
  {name:'Álcool × éter',left:'CH₃–CH₂–OH',leftLabel:'ÁLCOOL · ETANOL',right:'CH₃–O–CH₃',rightLabel:'ÉTER · DIMETIL ÉTER',why:'Ambos têm a fórmula molecular C₂H₆O. No primeiro há O–H; no segundo, o O fica entre dois carbonos. A posição das ligações muda a função.'},
  {name:'Fenol × álcool',left:'C₆H₅–OH',leftLabel:'FENOL',right:'C₆H₅–CH₂–OH',rightLabel:'ÁLCOOL',why:'O –OH toca diretamente o anel apenas à esquerda. À direita, ele está ligado ao CH₂, fora do anel.'},
  {name:'Alcano × alceno',left:'CH₃–CH₃',leftLabel:'ALCANO · ETANO',right:'CH₂=CH₂',rightLabel:'ALCENO · ETENO',why:'Ambos têm dois carbonos e só C/H. A dupla C=C à direita torna a cadeia insaturada e muda o infixo de an para en.'}
];

/* Questões inéditas do simulado, diferentes das atividades por aula. */
const examQuestions = [
  ['A cadeia CH₃–CH₂–O–CH₃ é:', ['aberta, insaturada e homogênea','aberta, saturada e heterogênea','fechada, saturada e homogênea','aberta, saturada e homogênea'],1,'Não há anel nem C=C/C≡C; O está entre dois grupos de carbono.'],
  ['O nome de CH₂=CH–CH₂–CH₃ é:', ['butano','but-2-eno','but-1-eno','prop-1-eno'],2,'Há 4 C (but), dupla (en) iniciando no carbono 1 e sufixo de hidrocarboneto (o).'],
  ['Uma ficha informa apenas a fórmula C₂H₆O. Você consegue afirmar que é álcool?', ['Sim, toda molécula com O é álcool','Sim, pois possui dois C','Não: pode ser etanol ou dimetil éter','Não: é obrigatoriamente fenol'],2,'C₂H₆O pode ter a estrutura CH₃–CH₂–OH (álcool) ou CH₃–O–CH₃ (éter).'],
  ['CH₃–CH₂–CH₂–OH é álcool e sua cadeia é:', ['heterogênea, pois há O','homogênea, pois O está na ponta','insaturada, pois há O','fechada, pois há –OH'],1,'O –OH está ligado ao carbono da extremidade; O não fica entre carbonos.'],
  ['A função de C₆H₅–CH₂–OH é:', ['fenol, por ter anel e –OH','álcool, pois –OH se liga ao CH₂','éter, pois O está entre carbonos','hidrocarboneto aromático'],1,'O CH₂ separa o –OH do anel. O –OH está ligado a carbono saturado.'],
  ['C₆H₅–O–CH₃ pertence à função:', ['éter','álcool','fenol','alcano'],0,'O oxigênio faz uma ponte entre carbono do anel e carbono de CH₃: C–O–C.'],
  ['CH₃–CH₂–CH₃ se chama:', ['propeno','butano','propano','propino'],2,'Três carbonos + apenas ligações C–C simples + hidrocarboneto = propano.'],
  ['No benzeno C₆H₆, a classificação mais específica é:', ['alcano','alceno de cadeia aberta','hidrocarboneto aromático','éter'],2,'O benzeno apresenta anel aromático e só contém C/H.'],
  ['Em CH₃–O–CH₃, qual observação explica duas classificações ao mesmo tempo?', ['O na ponta: álcool e cadeia homogênea','O entre C: éter e cadeia heterogênea','C=C: alceno e cadeia insaturada','Anel: fenol e cadeia fechada'],1,'O mesmo arranjo C–O–C caracteriza o éter e insere heteroátomo na cadeia.'],
  ['A cadeia CH₂=CH–CH₃ é:', ['aberta, insaturada e homogênea','fechada, saturada e homogênea','aberta, saturada e heterogênea','fechada, insaturada e heterogênea'],0,'Sem anel, com C=C e sem heteroátomo entre carbonos.'],
  ['O grupo –OH no carbono central de CH₃–CH(OH)–CH₃:', ['transforma a molécula em fenol','impede a função álcool','mantém a função álcool','forma a ligação C–O–C típica de éter'],2,'O carbono central é saturado; –OH ligado a ele caracteriza álcool.'],
  ['Qual regra está INCORRETA?', ['C–O–C pode caracterizar éter','Toda substância com oxigênio é álcool','–OH diretamente no anel caracteriza fenol','C=C entre carbonos torna a cadeia insaturada'],1,'Fenóis e éteres também têm oxigênio. A função depende das ligações, não apenas dos elementos.']
];
