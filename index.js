// Desafio: Classificador de nível de Herói
// Conceitos usados: variáveis, operadores, laço de repetição e estrutura de decisão

// Lista de heróis (o laço percorre cada um)
let herois = [
  { nome: "Arthas", xp: 850 },
  { nome: "Jaina", xp: 1500 },
  { nome: "Thrall", xp: 4200 },
  { nome: "Sylvanas", xp: 6800 },
  { nome: "Uther", xp: 7500 },
  { nome: "Illidan", xp: 8900 },
  { nome: "Kael", xp: 9999 },
  { nome: "Medivh", xp: 12000 },
];

for (let i = 0; i < herois.length; i++) {
  let nome = herois[i].nome;
  let xp = herois[i].xp;
  let nivel;

  if (xp <= 1000) {
    nivel = "Ferro";
  } else if (xp <= 2000) {
    nivel = "Bronze";
  } else if (xp <= 5000) {
    nivel = "Prata";
  } else if (xp <= 7000) {
    nivel = "Ouro";
  } else if (xp <= 8000) {
    nivel = "Platina";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}
