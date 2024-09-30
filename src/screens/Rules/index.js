import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Accordion from '../../components/accordion/index'; // Substitua com o caminho correto do seu componente Accordion
import Background from '../../components/background';
import Header from '../../components/header';

const reception = [
    "- A recepção e o credenciamento das delegações serão realizadas no dia 15 de novembro na Rua Coberta, localizada na da cidade de São Vicente do Sul - RS.",
    "- No momento da recepção serão entregues os kits aos coordenadores e a apresentação dos padrinhos de cada delegação.",
    "- Será realizada uma integração inicial entre os participantes. Em seguida, acontecerá a abertura oficial do evento, com a presença das autoridades convidadas.",
    "- Na abertura oficial, cada delegação deverá estar representada por alunos devidamente pilchados, representados por uma prenda e um peão, carregando as bandeiras. Uma bandeira será carregada pela prenda, e a outra será pelo peão, podendo ser, para uma melhor identificação do grupo: bandeira do município de origem, bandeira do Campus ou bandeira da entidade ou grupo, CTG, DTG, GTG, GTCN, NTG, GTC, etc. Em seguida, as delegações serão encaminhadas ao Campus São Vicente do Sul.",
    "- O alojamento das delegações será nas dependências do Campus (Salas de Aula), divididos entre peões e prendas.",
    "- Todas as salas possuem climatização. O controle será entregue ao Coordenador da delegação, no momento do credenciamento, que será o responsável pela operação e regulagem do equipamento.",
    "- Cada delegação receberá salas de alojamento devidamente limpas, sendo de sua responsabilidade a entrega nas mesmas condições que recebeu, ao final do evento.",
    "- Os participantes deverão trazer: colchão, cobertor, lençol, travesseiro, toalha, malas (com cadeado) e material de higiene pessoal, régua e extensão (tudo identificado).",
    "- Cada participante é responsável por seus pertences pessoais, por isso, torna-se necessária a identificação dos mesmos com os dados do proprietário e telefone para contato. A perda destes não será de responsabilidade da Comissão Organizadora e nem do campus.",
    "- Todos os participantes deverão estar munidos de documentos pessoais como CPF, RG e Cartão do SUS e/ou Plano de Saúde",
];

const meal = [
    "- Todas as refeições serão realizadas no refeitório do Campus São vicente do Sul, seguindo as normas mínimas estabelecidas pelo Setor de Alimentação e Nutrição, tais como:",
    "I – Manter os cabelos amarrados presos;",
    "II – Evitar conversar ao servir-se no buffet;",
    "III – Depositar as mochilas e ou bolsas nos locais indicados na entrada;",
    "IV – Não portar e ou consumir refrigerantes e ou bebidas alcoólicas;",
    "V – Trazer seu copo ou caneca se deseja consumir água e ou café, pois não é disponibilizado pelo refeitório",
    "- Não será permitido o acesso ao ambiente para os usuários que estiverem com roupas inadequadas (saia curta, camisa regata, calção de uso para práticas esportivas e/ou demais roupas que forem julgadas inadequadas pela Comissão Organizadora do evento).",
    "- É expressamente proibido qualquer barulho excessivo (gritar, bater bandejas, talheres ou qualquer outro instrumento) que possa perturbar os demais frequentadores do ambiente.",
    "- Os participantes deverão respeitar os horários das refeições estabelecidas na programação.",
];

const discipline = [
    "- Os participantes devem atentar para as normas de conduta discente, observando o disposto na Resolução CONSUP IFFAR nº 066/2018, devendo ser orientado pelos coordenadores de delegação.",
    "- Será entregue aos coordenadores das delegações uma cópia deste regulamento.",
    "- É obrigatória a participação de, pelo menos, um coordenador e ou responsável pelos peões e uma coordenadora e ou responsável pelas prendas.",
    "- Eventuais danos causados ao patrimônio deverão ser reparados por quem o causar, considerando o estabelecido na Resolução mencionada acima, sem prejuízos de aplicações das sanções disciplinares previstas.",
    "- Será mantida a proibição do “batizado/trote”, conforme acordado em edições anteriores.",
    "- Não será permitido o uso de roupas (bermudas, shorts, calção, saia etc) acima do joelho, regatas, miniblusa e decotes, durante a realização do Encontrão. No caso de desrespeito a essa norma, o aluno será encaminhado ao alojamento para a troca da roupa e o(a) coordenador(a) da equipe será avisado(a). No caso de reincidência, a delegação será convidada a se retirar do evento",
    "- Todos deverão respeitar os horários estabelecidos pela Comissão Organizadora, observando os das provas campeiras, das apresentações artístico-culturais, das refeições e dos tempos de banho, evitando assim possíveis prejuízos na programação, assim como respeitar o horário de silêncio.",
    "- Caberá aos responsáveis de cada delegação orientar seus participantes quanto ao relacionamento entre os casais de namorados, observando a Resolução mencionada anteriormente.",
    "- É proibido portar e usar armas de qualquer tipo (somente a comissão organizadora poderá portar ou autorizar faca para uso, se necessário, nas provas e apresentações), portar ou ingerir bebidas alcoólicas, cigarros e ou entorpecentes nas dependências do evento, em todos os ambientes, sem prejuízos de apurações e aplicações de sanções disciplinares, em caso de descumprimento.",
    "- Os veículos das delegações poderão ser vistoriados na chegada ou em qualquer outro momento durante a realização do evento, se julgado necessário, pela Comissão Organizadora, junto com os coordenadores e\ou responsáveis.",
    "- No primeiro dia do evento, será criada uma Comissão Especial, composta pelos coordenadores, coordenadoras e/ou responsáveis de cada delegação, com o poder de deliberar sobre assuntos/problemas que venham ocorrer durante o evento.",
];

const competitions = [
    "- Para a realização das provas, as equipes deverão ser formadas por delegação, com a indicação dos participantes feita no momento da inscrição do grupo, ou seja, até dia 15 de setembro de 2024.",
    "- Todos os participantes deverão estar devidamente pilchados para participar das provas campeiras e culturais. A pilcha mínima aceita para participação nas provas, definida em reunião pelos coordenadores em edições anteriores:",
    "I - Bombacha (sendo aceita a bombacha argentina ou campeira);",
    "II - Camisa (sendo aceita camiseta do grupo ou do evento);",
    "III - Bota ou Alpargatas (Não sendo aceitos coturnos, ou sapatos em geral);",
    "IV – Lenço;",
    "V - Chapéu (opcional).",
    "Parágrafo único - Para a prova de tiro de laço é obrigatório o uso de botas, tanto para os peões como para as prendas.",
    "- Será de responsabilidade dos fiscais de prova, com a ajuda de todos os coordenadores, orientar os participantes, bem como fiscalizar, antes do início de cada prova, sobre a indumentária a ser utilizada.",
    "– Constituem as provas campeiras e culturais:",
    "I – Melhor acampamento;",
    "II – Truco gaudério;",
    "III – Revezamento do mate;",
    "IV – Triatlo campeiro;",
    "V – Tiro de laço vaca parada;",
    "VI – Pescaria gaúcha;",
    "VII – Artilharia gaúcha;",
    "VIII – Cabo de guerra;",
    "IX – Dança gaúcha de salão;",
    "X – Tetarfe;",
    "XI – Bocha campeira;",
    "XII – Arroz carreteiro;",
    "XIII – Prova dos coordenadores.",
];

const bestCamp = [
    "- Durante a realização do evento, será avaliada a organização e o adornamento dos espaços destinados para alojamento. Serão premiados o melhor acampamento masculino e o melhor acampamento feminino. Os quesitos a serem avaliados são:",
    "I – Organização;",
    "II – Autenticidade;",
    "III– Formatação do cenário, com temática campeira;",
    "IV – Disciplina."
];

const truco = [
    "– Esta prova será dividida nas modalidades masculina e feminina.",
    "– Cada equipe será composta por três participantes",
    "– A prova será disputada no formato “melhor de três partidas”.",
    "– Será seguido o Regulamento de Esportes Campeiros do MTG.",
    "– A forma de disputa será eliminatória.",
    "– Será declarada campeã a equipe que vencer a partida da final. O segundo colocado será o perdedor da final e o terceiro colocado será o que vencer a disputa de terceiro lugar.",
];

const mate = [
    "– O revezamento do mate será disputado por equipes.",
    "– Cada equipe será composta por quatro participantes, sendo dois peões e duas prendas.",
    "– A prova será realizada no formato de circuito, ou seja, cada participante fará uma parte da prova. O cronômetro será disparado quando o primeiro participante tocar na cuia.",
    "– O primeiro participante deverá cevar e tomar o primeiro mate. Depois de “roncar o mate”, deverá entregá-lo ao segundo participante, que estará a uma distância do primeiro participante.",
    "– O segundo participante terá a sua disposição uma térmica com água quente para enche-lo e tomar novamente o mate. Após “roncar o mate”, entregará o mate para o terceiro participante que estará a uma distância do segundo participante.",
    "– O terceiro participante fará o mesmo processo feito pelo segundo participante",
    "– O quarto participante, ao terminar o mate, deverá limpar a cuia e deixá-la pronta para a próxima equipe a competir.",
    "– O cronômetro será parado assim que o último participante largar a cuia no local indicado.",
    "– Em cada ponto de entrega da cuia haverá um fiscal de prova para conferir se o participante terminou de tomar o mate.",
    "– A equipe vencedora será a que realizar a prova em menos tempo.",
];

const Triathlon = [
    "– Cada equipe será composta por seis participantes, sendo três peões e três prendas.",
    "– A prova será dividida em três etapas: nó de lenço, corrida do saco e debulhar o milho.",
    "– Cada etapa será disputada por um peão e uma prenda.",
    "– O nó de lenço (1ª etapa) consistirá no peão percorrer uma distância em direção a prenda (que estará em espaço preestabelecido e demarcado). O peão coloca o lenço na prenda e faz o nó e em seguida a prenda coloca o lenço no peão e faz o nó.",
    "– Os participantes devem escolher um dos modelos de nó conforme MTG.",
    "– Após a conclusão dos nós, a prenda percorrerá o caminho contrário percorrido pelo peão. A etapa será considerada concluída quando a prenda ultrapassar a linha demarcatória.",
    "– A corrida do saco (2ª etapa) somente poderá ser iniciada quando os dois integrantes da equipe concluírem a etapa anterior. A etapa consistirá nos participantes percorrerem uma distância dentro de um saco de ráfia. A etapa será considerada concluída quando os dois integrantes ultrapassarem a linha demarcatória.",
    "– O debulhar milho (3ª etapa) somente poderá ser iniciado quando os dois integrantes da equipe concluírem a etapa anterior. A etapa consistirá em debulhar três espigas de milho, por completo, cada um. Os participantes não podem se ajudar.",
    "– Será declarada campeã a equipe que concluir o debulhamento.",
    "– Em caso de não cumprimento de algumas das etapas, será declarada a desistência da equipe.",
];

const shooting = [
    "– A prova será dividida em três modalidades:",
    "I - Masculino;",
    "II - Feminino;",
    "III - Patrão/Patroa.",
    "– Cada equipe será composta por dois participantes.",
    "– Cada integrante terá direito de arremessar três armadas.",
    "– As armadas masculinas deverão respeitar a distância mínima de oito metros da vaca parada. Para o tiro de laço feminino a distância mínima será de dois metros.",
    "– Para que o arremesso seja válido, deverão ser laçadas somente as aspas da vaca parada. Se for laçado o pescoço, rabo ou qualquer outra parte da vaca, a armada será considerada branca.",
    "– Perderá a armada o laçador que não respeitar a distância para lançar o laço.",
    "– A armada terá a confirmação de um jurado, que poderá ter ao seu lado um auxiliar que servirá de “gancheiro”.",
    "– No caso da necessidade de limpar a anca ou “pescar” a 2ª aspa, o laçador terá até dez segundos para isso.",
    "– A prova será realizada somente com laço de couro, não sendo permitido o uso de corda. Cada equipe deverá trazer o seu laço.",
    "– Será declarada campeã a equipe que colocar mais armadas. Em caso de empate, cada participante das equipes terá direito a mais uma armada, até que se tenha um vencedor.",
];

const fishing = [
    "– Cada equipe será composta por dois participantes, sendo um peão e uma prenda.",
    "– No início da prova será disponibilizado aos participantes os acessórios para montagem dos instrumentos necessários para pescaria.",
    "– Ao sinal do coordenador da prova, a dupla dará início à montagem da sua vara de pescar e, assim que concluída a montagem, deve avisar o coordenador da prova para que este libere a corrida em busca da sua isca (espaços livres pelo campus).",
    "– Assim que desejar, poderá iniciar a pescaria nos espaços indicados pela organização.",
    "– Será declarada campeã a dupla que pescar o peixe mais pesado, até a conclusão do tempo da prova.",
    "– Os peixes pescados não poderão ser devolvidos ao açude.",
];

const artillery = [
    "– Cada equipe terá quatro participantes, sendo dois peões e duas prendas.",
    "– A prova consistirá em arremessar pedras, com o uso de um “bodoque”, com o objetivo de atingir os alvos colocados a uma distância estabelecida pela organização dos atiradores.",
    "– Os alvos não terão distinção de pontuação, ou seja, cada acerto em algum alvo contará um ponto.",
    "– Cada participante terá direito de arremessar três pedras.",
    "– A instituição organizadora disponibilizará as pedras que serão utilizadas na prova.",
    "– Cada participante deverá trazer o seu bodoque, sendo permitido somente bodoques tradicionais, confeccionados com madeira e borracha.",
    "– Será considerada campeã a equipe que obtiver mais pontos. Em caso de empate, cada participante terá direito a mais um disparo, até que se obtenha um vencedor.",
];

const tug = [
    "– Cada equipe será composta por sete participantes, sendo no mínimo duas prendas.",
    "– A prova será disputada com uma corda de quatorze metros. O meio da corda será marcado com uma fita e alinhado a uma marca feita no chão. Haverá, também, outras duas marcas na corda, sendo uma para cada lado, distantes 1 metro do centro da corda, delimitando, assim, o início do posicionamento dos participantes.",
    "– Cada equipe deverá puxar a corda para o seu lado, fazendo com que ao menos um integrante da equipe adversária ultrapasse a marcação do chão.",
    "– A forma de disputa será eliminatória.",
    "– Para as disputas finais será dado um intervalo de cinco minutos para o descanso dos competidores.",
    "– Será declarada campeã a equipe que vencer a partida da final. O segundo colocado será o perdedor da final e o terceiro colocado será o que vencer a disputa de terceiro lugar.",
];

const dance = [
    "– Cada equipe terá dois participantes, sendo um peão e uma prenda.",
    "– As danças gaúchas que farão parte da prova são: Chote, Milonga, Chamamé, Rancheira, Valsa, Marzuca e Bugio.",
    "– A prova consistirá de duas etapas.",
    "– Na primeira etapa será sorteada uma dança. Após o sorteio, as equipes terão no máximo dois minutos para executar a dança.",
    "– Na segunda etapa será sorteada uma dança, excluindo a sorteada na primeira etapa. Após o sorteio, as equipes terão no máximo dois minutos para executar a dança.",
    "– A ordem de apresentação será sorteada.",
    "– As apresentações serão avaliadas por uma comissão julgadora apontada pela organização. Na avaliação serão observados os quesitos de correção coreográfica, interpretação artística, ritmo e harmonia do par e criatividade.",
    "– Será declarada campeã a equipe que obtiver a maior pontuação.",
    "– As decisões da comissão julgadora serão soberanas, não cabendo nenhum tipo de recurso.",
];

const tetarfe = [
    "– Cada equipe terá dois participantes, sendo um peão e uma prenda.",
    "– Será seguido o Regulamento de Esportes Campeiros do MTG.",
    "– Será declarada campeã a equipe que somar mais pontos na somatória de todos os lançamentos feitos pelos participantes.",
    "– No caso de empate entre duas ou mais equipes será utilizado o seguinte critério para o desempate: a maior pontuação das modalidades na ordem: argola, ferradura e tava.",
];

const bocce = [
    "– Cada equipe terá três participantes, sendo dois peões e uma prenda.",
    "– Será seguido o Regulamento de Esportes Campeiros do MTG.",
    "– As partidas serão disputadas em duas passadas.",
    "– Será declarada vencedora da partida a equipe que obtiver mais pontos ao final das duas passadas.",
    "– Em caso de empate na partida, será disputada uma passada extra.",
    "– A forma de disputa será eliminatória.",
    "– Será declarada campeã a equipe que vencer a partida da final. O segundo colocado será o perdedor da final e o terceiro colocado será o que vencer a disputa de terceiro lugar.",
];

const rice = [
    "– Cada equipe terá dois participantes, sendo um peão e uma prenda.",
    "– A prova consistirá no preparo de arroz carreteiro para quarenta pessoas, sendo as quantidades de insumos definidas pelos participantes da prova, no momento do preparo.",
    "– Os insumos (ingredientes) a serem utilizados no preparo serão fornecidos pela comissão organizadora, que serão os mesmos em quantitativo e qualitativo para cada equipe, incluindo sal de cozinha, porém os temperos deverão ser de responsabilidade de cada equipe, para destacar a identidade regional do prato.",
    "– A comissão organizadora fornecerá a lenha necessária para o preparo.",
    "– Todos os utensílios necessários para a preparação serão de responsabilidade das equipes.",
    "– As equipes terão duas horas para concluir o preparo.",
    "– Cada equipe deverá servir três porções para os avaliadores. A porção será acondicionada em embalagem fornecida pela comissão organizadora.",
    "– As porções serão avaliadas por uma comissão julgadora apontada pela organização. Na avaliação serão observados os quesitos de apresentação, execução, fidelidade e paladar, assim como o número de porções.",
    "– Será declarada campeã a equipe que obtiver a maior pontuação.",
    "– As decisões da comissão julgadora serão soberanas, não cabendo nenhum tipo de recurso.",
];

const coord = [
    "– Terão direito a participar da prova os coordenadores e/ou responsáveis indicados por cada instituição, sendo dois participantes de cada instituição.",
    "– A prova será surpresa. Seu funcionamento será divulgado no dia do evento.",
];

const presentations = [
    "– A ordem das apresentações acontecerá conforme sorteio a ser realizado após o término das inscrições.",
    "– Os grupos de danças disporão do tempo máximo de vinte minutos (incluindo entrada e retirada), para realizarem as suas apresentações. Não é obrigatório aos grupos de danças executarem temas de entrada e retirada coreografadas. Os grupos poderão usar levantes ou introduções musicais para sua entrada e retirada do palco, ficando de livre escolha dos grupos a montagem de sua apresentação e a quantidade de músicas a serem apresentadas, desde que utilizem apenas vinte minutos entre a sua entrada no palco e o final de sua retirada, incluindo preparação de som.",
    "– Cada grupo deverá optar pelos acompanhamentos musicais, os quais serão de sua responsabilidade: mídia digital (pen drive, CD, etc...) ou conjunto instrumental e vocal, informando com antecedência. Caso opte por mídia digital, antes da abertura das apresentações deverá apresentá-la à comissão organizadora.",
    "– As danças deverão ser previamente escolhidas no momento da inscrição, procurando evitar muita repetição.",
    "– São consideradas danças tradicionais: Anú, Balaio, Cana Verde, Caranguejo, Chico Sapateado, Chimarrita, Chimarrita Balão, Chote Carreirinho, Chote de Duas Damas, Chote de Quatri Passi, Chote de Sete Voltas, Chote Inglês, Havaneira Marcada, Maçanico, Mazurca, Meia Canha, Pau de Fitas, Pezinho, Quero Mana, Rancheira de Carreirinha, Rilo, Roseira, Sarrabalho, Tatu com Volta no Meio, Tatu de Castanholas, Tirana do Lenço, Tirana do Ombro, Valsa de Mão Trocada, Vanerão Sapateado.",
    "– As Danças Birivas do Tradicionalismo Gaúcho compreenderão as seguintes: Chico do Porrete, Fandango Primitivo, Danças dos Facões, Boleadeiras e Chula.",
];

const fecult = [
    "– O XI Festival da Canção Cultural Tradicionalista FECULT será realizado durante o XXX Encontro Cultural e Tradicionalista das Instituições Federais da Região Sul do Brasil, promovido pelo Instituto Federal Farroupilha – Campus São Vicente do Sul, através de uma comissão nomeada pela coordenação do encontro e em parceria com segmentos da sociedade.",
    "– O XI FECULT será realizado no dia 15 de novembro de 2024, nas dependências do CTG Cancela da Fronteira, na cidade de São Vicente do Sul/RS.",
    "– São objetivos do FECULT:",
    "  I - Valorizar a música gaúcha do Rio Grande do Sul nas linhas campeira e nativista, através de autores, músicos, poetas e intérpretes de todo o território nacional;",
    "  II - Integrar os participantes do FECULT aos valores culturais da música regional e tradicionalista do Rio Grande do Sul;",
    "  III - Divulgar o nome do encontro no cenário da região sul, proporcionando a integração de alunos, poetas, músicos, intérpretes e imprensa em geral.",
    "– Poderão participar do XI FECULT os alunos regularmente matriculados na rede das Instituições Federais participantes desse evento, cabendo no ato da inscrição remeter, na forma de anexo, documento que comprove o vínculo do participante junto à instituição que o mesmo representará.",
    "– O FECULT terá as seguintes categorias:",
    "  I – Música Inédita;",
    "  II – Música Conhecida;",
    "  III – Declamação.",
    "– As inscrições devem ser realizadas via formulário online e estarão abertas até o dia 15 de setembro de 2024. É necessário o envio da letra da música ou do poema juntamente com a inscrição. Uma vez procedida a inscrição não poderão ser feitas quaisquer tipos de alterações no que diz respeito ao intérprete ou declamador e a música ou poema inscrito.",
    "– Poderão ser inscritos três trabalhos por Instituição Federal participante, sendo um para cada categoria, não podendo repetir o(a) intérprete.",
    "– Em cada categoria será premiado o primeiro lugar, segundo e terceiro lugar.",
    "– O concorrente ao proceder a sua inscrição acatará os artigos constantes nesse regulamento, bem como as decisões da comissão organizadora e da comissão que avaliará os trabalhos apresentados no palco. As decisões serão soberanas, não cabendo nenhum tipo de recurso.",
];

const music = [
    "– O XI Festival da Canção Cultural Tradicionalista FECULT será realizado durante o XXX Encontro Cultural e Tradicionalista das Instituições Federais da Região Sul do Brasil, promovido pelo Instituto Federal Farroupilha – Campus São Vicente do Sul, através de uma comissão nomeada pela coordenação do encontro e em parceria com segmentos da sociedade.",
    "– O XI FECULT será realizado no dia 15 de novembro de 2024, nas dependências do CTG Cancela da Fronteira, na cidade de São Vicente do Sul/RS.",
    "– São objetivos do FECULT:",
    "  I - Valorizar a música gaúcha do Rio Grande do Sul nas linhas campeira e nativista, através de autores, músicos, poetas e intérpretes de todo o território nacional;",
    "  II - Integrar os participantes do FECULT aos valores culturais da música regional e tradicionalista do Rio Grande do Sul;",
    "  III - Divulgar o nome do encontro no cenário da região sul, proporcionando a integração de alunos, poetas, músicos, intérpretes e imprensa em geral.",
    "– Poderão participar do XI FECULT os alunos regularmente matriculados na rede das Instituições Federais participantes desse evento, cabendo no ato da inscrição remeter, na forma de anexo, documento que comprove o vínculo do participante junto à instituição que o mesmo representará.",
    "– O FECULT terá as seguintes categorias:",
    "  I – Música Inédita;",
    "  II – Música Conhecida;",
    "  III – Declamação.",
    "– As inscrições devem ser realizadas via formulário online e estarão abertas até o dia 15 de setembro de 2024. É necessário o envio da letra da música ou do poema juntamente com a inscrição. Uma vez procedida a inscrição não poderão ser feitas quaisquer tipos de alterações no que diz respeito ao intérprete ou declamador e a música ou poema inscrito.",
    "– Poderão ser inscritos três trabalhos por Instituição Federal participante, sendo um para cada categoria, não podendo repetir o(a) intérprete.",
    "– Em cada categoria será premiado o primeiro lugar, segundo e terceiro lugar.",
    "– O concorrente ao proceder a sua inscrição acatará os artigos constantes nesse regulamento, bem como as decisões da comissão organizadora e da comissão que avaliará os trabalhos apresentados no palco. As decisões serão soberanas, não cabendo nenhum tipo de recurso.",
    "– Serão aceitas composições inéditas, reservando o direito autoral e a não publicação da música, continuando ela inédita.",
    "– As letras das músicas que concorrerão no XI FECULT deverão ser escritas na língua portuguesa (Brasil), podendo apresentar apenas palavras e expressões em língua espanhola, porém, seguindo a temática da cultura gaúcha.",
    "– As músicas inéditas passarão por uma triagem para comprovação de autenticidade, principalmente no que concerne o plágio. Aquelas composições que incorrerem nesta infração automaticamente estarão desclassificadas.",
    "– A apresentação completa, desde a passagem do som, não poderá exceder dez minutos de duração.",
    "– Em relação aos músicos que acompanharão os(as) intérpretes, obrigatoriamente terão que ter algum vínculo com a instituição que estão representando. Portanto, abre-se a possibilidade de participação de docentes e técnicos administrativos, na condição de acompanhantes. Todavia, valerá o mesmo que foi disposto anteriormente no que concerne à comprovação do vínculo: no caso de servidores, informar o número do SIAPE e no caso dos educandos, o número de matrícula.",
    "– A comissão julgadora será composta por pessoas que tenham algum tipo de envolvimento com música e os jurados atribuirão notas de um a dez, sendo que serão avaliados os seguintes itens:",
    "  I - Indumentária (observando as normas do Movimento Tradicionalista Gaúcho);",
    "  II - Interpretação (postura cênica e presença de palco);",
    "  III - Fidelidade à letra da música;",
    "  IV - Ritmo e afinação."
];

const declamation = [
    "– Na categoria declamação o participante deverá apresentar um poema de sua escolha.",
    "– O poema deverá ser de inspiração gauchesca, tendo como base a língua portuguesa, podendo conter termos ou pequenos trechos em espanhol ou outros idiomas de povos formadores da cultura gauchesca.",
    "– A declamação pode ser acompanhada por um(a) amadrinhador(a). Em relação ao(a) amadrinhador(a) que acompanhará os(as) intérpretes, obrigatoriamente terão que ter algum vínculo com a instituição que estão representando. Portanto, abre-se a possibilidade de participação de docentes e técnicos administrativos, na condição de acompanhantes. Todavia, valerá o mesmo que foi disposto anteriormente no que concerne à comprovação do vínculo: no caso de servidores, informar o número do SIAPE e no caso dos educandos, o número de matrícula.",
    "– A comissão julgadora avaliará a declamação seguindo os seguintes itens:",
    "  I - Indumentária (observando as normas do Movimento Tradicionalista Gaúcho);",
    "  II - Fundamentos da voz (impostação, dicção e inflexão);",
    "  III - Expressão corporal (facial e gestual e postura cênica);",
    "  IV - Interpretação da mensagem;",
    "  V - Fidelidade ao texto.",
    "– O participante terá o tempo máximo de nove minutos, contados a partir da liberação do microfone."
];

const awards = [
    "– Receberão medalhas os classificados em primeiro, segundo e terceiro lugares das provas campeiras e culturais.",
    "– A entrega das premiações de cada prova campeira e cultural acontecerá logo após o encerramento da mesma.",
    "– Todos os grupos das apresentações de dança receberão troféu de participação.",
    "– A entrega do troféu de participação será realizada após o último baile de integração no último dia do evento.",
    "– Haverá uma troca de mimos que acontecerá no momento da entrega dos troféus de participação."
];

const penalties = [
    "– As Instituições participantes são responsáveis pelos atos praticados pelos membros de suas delegações, estando sujeitas às penalidades previstas neste regulamento.",
    "– São penas disciplinares previstas:",
    "  I - Advertência ao infrator;",
    "  II - Advertência ao coordenador;",
    "  III - Afastamento do infrator das atividades;",
    "  IV - Afastamento da delegação do evento.",
    "– As penas disciplinares serão aplicadas de forma verbal ou por escrito à instituição participante que:",
    "  I - Desrespeitar seus colegas e os princípios morais e éticos do tradicionalismo;",
    "  II - Dirigir-se de modo desrespeitoso a quaisquer participantes, promotores e/ou membros da Comissão;",
    "  III - Praticar, em conjunto ou individualmente, atos considerados atentatórios ao bom desenvolvimento do evento;",
    "  IV - Não seguir as regras e normas deste regulamento.",
    "– São competentes para apurar as infrações e propor as penalidades previstas os membros da Comissão Organizadora em reunião com os Coordenadores. As penas aplicadas pela Comissão, mencionadas acima, são irrecorríveis."
];



const RulesView = () => {
    return (
        <Background>

            <ScrollView contentContainerStyle={styles.container}>
                <Header></Header>
                <Text style={styles.header}>Regras!</Text>
                <Accordion title="da Recepção, Credenciamento e Alojamento" items={reception} pad={117} />
                <Accordion title="das Refeições" items={meal} pad={85} />
                <Accordion title="da Disciplina" items={discipline} pad={130} />
                <Accordion title="Provas Campeiras e Culturais" items={competitions} pad={58} />
                <Text style={styles.header}>Provas!</Text>
                <Accordion title="Melhor Acampamento" items={bestCamp} pad={65} />
                <Accordion title="Truco Gaudério" items={truco} pad={65} />
                <Accordion title="Revezamento do Mate" items={mate} pad={85} />
                <Accordion title="Triatlo Campeiro" items={Triathlon} pad={90} />
                <Accordion title="Tiro de Laço Vaca Parada" items={shooting} pad={71} />
                <Accordion title="Pescaria Gaúcha" items={fishing} pad={80} />
                <Accordion title="Artilharia Gaúcha" items={artillery} pad={80} />
                <Accordion title="Cabo de Guerra" items={tug} pad={96} />
                <Accordion title="Dança Gaúcha de Salão" items={dance} pad={76} />
                <Accordion title="Tetarfe" items={tetarfe} pad={80} />
                <Accordion title="Bocha Campeira" items={bocce} pad={68} />
                <Accordion title="Arroz Carreteiro" items={rice} pad={94} />
                <Accordion title="Prova dos Coordenadores" items={coord} pad={80} />
                <Text style={styles.header}>FECULT!</Text>
                <Accordion title="do Festival da Canção Cultural Tradicionalista" items={fecult} pad={97} />
                <Accordion title="Categorias Música Inédita e Música Conhecida" items={music} pad={100} />
                <Accordion title="Categoria Declamação" items={declamation} pad={90} />
                <Text style={styles.header}>Adicionais!</Text>
                <Accordion title="das Apresentações de Danças" items={presentations} pad={165} />
                <Accordion title="das Premiações" items={awards} pad={80} />
                <Accordion title="das Penalidades" items={penalties} pad={70} />
            </ScrollView>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontFamily: 'Lobster', // Certifique-se de que a fonte está carregada e nome correta
        textAlign: 'center',
        marginVertical: 10,
    },
    accordion: {
        marginTop: 20,
    },
});

export default RulesView;
