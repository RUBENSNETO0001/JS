let votos = {};
let nomes = prompt("Me de um nome:");
let totalVotacoes = 20; // Número de votos que o sistema vai simular

for (let i = 0; i < totalVotacoes; i++) {
  let voto = nomes[Math.floor(Math.random() * nomes.length)];

  if (votos[voto]) {
    votos[voto]++;
  } else {
    votos[voto] = 1;
  }
}

console.log("Resultado da votação:");
for (let nome in votos) {
  console.log(`${nome} - ${votos[nome]} votos`);
}
