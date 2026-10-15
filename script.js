const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:
            "Você tem um futuro inteiro pela frente, mas para seguir a carreira dos seus sonhos, precisa decidir qual caminho acadêmico trilhar. Qual sua visão sobre isso?",
        alternativas: [

            {
                texto: "Ainda não sei o que fazer e vou deixar a vida me levar.",
                afirmacao: [
                    "Sou herdeiro(a)",
                    "Não acredito que estudos pagam as contas",
                ],
            },
            {
                texto: "Quero pesquisar bem as opções e escolher a faculdade certa para mim!",
                afirmacao: [
                    "Quero construir minha própria independência financeira",
                    "Acredito que o conhecimento abre as melhores portas no mercado",
                ],
            },
        ],
    },
    {
        "enunciado": "Primeiramente, você deve estar disposto a reservar um pouco do seu tempo diário para se dedicar aos estudos. É necessário pensar no seu futuro profissional. Quantas horas por dia você pretende separar para focar na faculdade?",
        "alternativas": [
            {
                "texto": "Consigo reservar 3 horas ou mais do meu dia para os estudos da faculdade.",
                "afirmacao": [
                    "Sou focado(a) e priorizo meu crescimento rápido",
                    "Entendo que o esforço diário é o que traz o resultado"
                ]
            },
            {
                "texto": "Consigo reservar no máximo 1 hora por dia. Mas me comprometo a estudar mais nos finais de semana se precisar.",
                "afirmacao": [
                    "Minha rotina é corrida e preciso conciliar com outras obrigações",
                    "Prefiro qualidade de estudo concentrada do que quantidade de tempo",
             ],
            },
        ],
    },
    {
        "enunciado": "Para escolhermos uma faculdade, temos a opção de seguir caminhos mais tradicionais e estáveis ou buscar áreas mais dinâmicas e incertas. Os perfis conservadores preferem cursos com alta previsibilidade de carreira e os arrojados preferem focar em inovação ou novos mercados. Qual você prefere?",
        "alternativas": [
            {
                "texto": "Prefiro escolher um curso tradicional com alta estabilidade, pois gosto de ter mais segurança e previsibilidade no meu futuro profissional.",
                "afirmacao": [
                    "Valorizo a tranquilidade de um plano de carreira seguro",
                    "Prefiro o garantido do que arriscar meu futuro no incerto",
                ],
            },
            {
                "texto": "Meu perfil é mais arrojado, e não me importo em assumir os riscos de um mercado dinâmico ou inovador em prol de uma maior realização e flexibilidade.",
                "afirmacao": [
                    "Detesto a ideia de uma rotina presa e monótona",
                    "Quero criar minhas próprias oportunidades e inovar",
             ],
            },
        ],
    },
    {
        "enunciado": "De acordo com o seu perfil profissional, escolha os tipos de cursos ou carreiras universitárias que você prefere seguir.",
        "alternativas": [
            {
                "texto": "Quero focar em cursos ligados a tecnologia, novos mercados e inovação. Aceito a volatilidade do mercado de trabalho e o risco para acelerar meus resultados e ter maior autonomia.",
                "afirmacao": [
                    "Quero estar na vanguarda da transformação digital",
                    "Acredito que o maior risco traz a maior recompensa"
                ]
            },
            {
                "texto": "Prefiro ingressar em cursos tradicionais e concursos públicos. Priorizo carreiras consolidadas que oferecem maior estabilidade, segurança e previsibilidade financeira a longo prazo.",
                "afirmacao": [
                    "A estabilidade financeira é a base para o meu sucesso",
                    "Prefiro caminhos testados e aprovados pelo tempo",
      ],
            },
        ],
    },
    {
        "enunciado": "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        "alternativas": [
            {
                "texto": "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                "afirmacao": [
                    "Prezo pela autenticidade e qualidade do que entrego",
                    "Uso a tecnologia como ferramenta, não como substituta do meu cérebro",
                ],
            },
            {
                "texto": "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                "afirmacao": [
                    "Foco em eficiência e otimização de tempo acima de tudo",
                    "Se a ferramenta resolve o problema rapidamente, deve ser aproveitada",
             ],
            },
        ],
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();