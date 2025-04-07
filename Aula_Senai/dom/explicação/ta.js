// Criamos um array [ ], em seguida abrimos {} para referenciar que também vamos criar um objeto

let Pessoa = [
    // Criamos o primeiro objeto da lista, isso torna ele o primeiro indice da LISTA que é 0
    {
        nome: "Fulano",
        idade: 33,
        email: "contato@gmail.com"
    },

    // Criamos o segundo objeto da lista,  isso torna ele o segundo indice da LISTA que é 1
    {
        nome: "JotaJota",
        idade: 60,
        email: "jota@contato.outlook.com"
    }
]


// Agora vamos acessar os indices dessa lista: 

console.log(Pessoa[0]) // Acessamos o primeiro Objeto. Indice 0 da lista que é o "Fulano".

console.log(Pessoa[0].nome) // Agora podemos acessar as informações do "Fulano" colocando as propriedades dele após o ponto.

// Acessando o "JotaJota" 

console.log(Pessoa[1]) // Acessamos o primeiro Objeto. Indice 0 da lista que é o "JotaJota".
console.log(Pessoa[1].nome) // Agora podemos acessar as informações do "Fulano" colocando as propriedades dele após o ponto.`

let lista = [

    {
        filme: "genero",

        listaFilmes: [
            {
                filme1: 'sei la'
            }
        ]
    },
]

alert(lista[0].listaFilmes[0].filme1)