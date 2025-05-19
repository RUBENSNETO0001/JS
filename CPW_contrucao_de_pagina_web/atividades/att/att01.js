// onde vai ficar os 100 numeros
const numeros = [];
// onde vai fica a resultados repetidos
let conta = {};

// gerar 100 numeros aleatorios
for(let i = 0; i < 100;i++){numeros[i] = Math.floor(Math.random()* 101);}

// aqui vai ser a verificação
for(let k = 0; k < numeros.length; k++){
    // aqui vamos verificar 1 por 1
    let numero = numeros[k];
    // aqui vamos verificar ser o conta ja vai ter 1 numero igual caso ter ele vai entrar e conta mais 1
    if(conta[numero]){
        conta[numero] ++;
    }
    // caso seje o contato 1
    else{
        conta[numero] = 1;
    }   
}
//aqui vamos mostrar o resultado por por causa que  conta e um objetoe ob nao e igual a veriavel
for(num in conta){
    if(conta[num] > 1){
        console.log(`${num} - ${conta[num]}`);
    }
    
}
