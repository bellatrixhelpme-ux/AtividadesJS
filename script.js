let pontuacao = 1000;
var ponto = 10;
const nome = "João";

console.log(`A pontuação de ${nome} é: ${pontuacao} e ele marcou ${ponto} pontos.`);

const perguntas = [
  {
    texto: "Qual é a capital da França?",
    opcoes: ["Paris", "Londres", "Berlim", "Madrid"],
    respostaCorreta: 0,
    categoria: "Geografia"
  },
  {
    texto: "Qual é o maior planeta do Sistema Solar?",
    opcoes: ["Terra", "Marte", "Júpiter", "Vênus"],
    respostaCorreta: 2,
    categoria: "Astronomia"
  },
  {
    texto: "Em que ano o Brasil ganhou sua primeira Copa do Mundo?",
    opcoes: ["1958", "1962", "1970", "1994"],
    respostaCorreta: 0,
    categoria: "Esportes"
  }
];

console.log(perguntas[1].texto); 
console.log(perguntas[1].opcoes[2]);

console.log("\nTodas as perguntas:");
for (let i = 0; i < perguntas.length; i++) {
  console.log(`${i + 1}. ${perguntas[i].texto}`);
} 
          
