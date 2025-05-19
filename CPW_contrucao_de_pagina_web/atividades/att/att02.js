const numeros = [];
let num_c = {};
let numero_unicos = [];

// aqui e so para gerar o 100 numeros aleatorios
for(let i = 0; i < 100; i++){numeros[i] = Math.floor(Math.random()*101);}

for(let n = 0; n < numeros.length; n++){
    let num= numeros[n]
    if(num_c[num]){num_c[num]++;}
    else{num_c[num]=1;}
}

for(let i = 0; i <numeros. length; i++){
    if(num_c[numeros[i]]===1){numero_unicos.push(numeros[i]);}
}

document.getElementById("numeros").innerHTML = `${numero_unicos}`;