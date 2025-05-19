const nome = {};
let resposta = '';

while (true) {
    resposta = prompt("Me informe um nome:");
    
    if (resposta == "n") { break; }

    for (let i = 0; i < 1; i++) {
        if (nome[resposta]) {nome[resposta]++;}
        else {nome[resposta] = 1;}
    }
}

for (const nomes in nome){
    console.log(`Nome: ${nomes} - Votos: ${nome[nomes]}`);
}
