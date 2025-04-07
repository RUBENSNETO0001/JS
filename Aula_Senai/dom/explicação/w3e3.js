// Criamos uma lista chamado times. 
// Dentro dessa lista criamos 2 elementos para ela, ou seja 2 objetos. Então temos 2 posições nessa lista (indices)

let times = [
    {
      // Criamos uma propriedade e uma outra lista dentro do indice 0 da lista.
      equipe: "A", jogadores: [
          {nome: "João", idade: 23},
          {nome: "Francisco", idade: 29},
      ]
    },

    {
      // Criamos uma propriedade e uma outra lista dentro do indice 1 da lista.
      equipe: "B", jogadores: [
          {nome: "Pedro", idade: 30},
          {nome: "Junior", idade: 22},
      ]
    }
  ];
  
  console.log(times[0]) // Acessamos o objeto da Equipe A 

  console.log(times[0].jogadores) // Acessamos a lista de jogadores do objeto da Equipe A
  
  console.log(times[0].jogadores[0]) // Acessamos o objeto João, da lista de jogadores, por ser o indice 0
  console.log(times[0].jogadores[0].nome) // Com isso, pegamos o nome dele "João"!