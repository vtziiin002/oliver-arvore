
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está andando na rua e vê alguém jogando lixo no chão perto de uma lixeira. Qual a sua reação?",
        alternativas: [
            {
                texto: "Fico indignado e falo com a pessoa",
                afirmacao: "Você se incomoda com o desVocê ainda está desenvolvendo uma consciência ambiental mais forte. Você ainda não conectou totalmente o consumo com as consequências ambientais. Você enxerga oportunidades de cuidar do meio ambiente mesmo em momentos de lazer. Você reconhece o problema, mas ainda duvida do poder das ações individuais. Você ainda valoriza mais a praticidade do que o impacto ambiental das suas escolhas.respeito ao meio ambiente e prefere agir."
            },
            {
                texto: "Passo reto e penso que não é problema meu",
                afirmacao: "Você ainda está desenvolvendo uma consciência ambiental mais forte."
            }
        ]
    },
    {
        enunciado: "Chegou a conta de energia e o valor veio bem alto. O que você faz primeiro?",
        alternativas: [
            {
                texto: "Começo a economizar e procurar hábitos mais sustentáveis",
                afirmacao: "Você busca soluções práticas para reduzir seu impacto no planeta."
            },
            {
                texto: "Reclamo do preço e continuo usando tudo normalmente",
                afirmacao: "Você ainda não conectou totalmente o consumo com as consequências ambientais."
            }
        ]
    },
    {
        enunciado: "Um amigo te convida pra um rolê em um parque que está bem sujo e abandonado. O que você pensa?",
        alternativas: [
            {
                texto: "Vamos aproveitar e ainda ajudar a limpar um pouco",
                afirmacao: "Você enxerga oportunidades de cuidar do meio ambiente mesmo em momentos de lazer."
            },
            {
                texto: "Prefiro ir em outro lugar mais limpo e cuidado",
                afirmacao: "Você valoriza espaços bem preservados, mas ainda não se sente responsável por recuperá-los."
            }
        ]
    },
    {
        enunciado: "Você descobriu que a empresa onde trabalha (ou estuda) joga bastante resíduo sem separar. Qual seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Vou sugerir uma campanha de reciclagem e separação de lixo",
                afirmacao: "Você gosta de transformar problemas ambientais em ações concretas."
            },
            {
                texto: "É triste, mas não acho que uma pessoa sozinha consiga mudar isso",
                afirmacao: "Você reconhece o problema, mas ainda duvida do poder das ações individuais."
            }
        ]
    },
  
    {
        enunciado: "Você está no mercado e tem a opção de levar a sacola plástica de graça ou comprar uma ecobag reutilizável. O que você faz?",
        alternativas: [
            {
                texto: "Levo a ecobag, mesmo pagando um pouco mais",
                afirmacao: "Você prioriza escolhas sustentáveis no dia a dia, mesmo que exijam um esforço extra."
            },
            {
                texto: "Pego a sacola plástica mesmo, é mais prático",
                afirmacao: "Você ainda valoriza mais a praticidade do que o impacto ambiental das suas escolhas."
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2032...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();