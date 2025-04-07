const objeto = [
    {
       nome: "fulano",
       email: "fulano@gmai.com",
       hobbies: [
              "Ler",
              "Assistir",
              "Esporte"
         ]  
    }
]
let json = JSON.stringify(objeto) // converte o objeto para json.
console.log("isso e json ou JSON")
console.log(json)

let objetoJson = JSON.parse(objeto) // converte o json para objeto.
console.log("isso e objeto json ou JSON")
console.log(objetoJson)