let pessoa = {
    idade: 17,
    cidadeAtual:"rio branco",
    pesoaatual:'85 kilos',
    sexo:'man',
    profissão:'desempregado',

    //metodos
    ele:'metodos',
    andar:'normal',
    falar:'muitas girias',
    pular:'pula alto',

    quemé:'suzuki',

idadade: function() {
    document.writeln(`Vc tem ${this.idade} de idade,<br> `)
},

cidade: function() {
    document.write(`Vc esta no ${this.cidadeAtual},<br> `)
},

caracteristica: function() {
    document.write(`Vc está com ${this.pesoaatual},<br>  Seu genero é ${this.sexo}, <br> Vc é ${this.profissão}<br>`)
},

lesma: function() {
    document.write(`Vc anda ${this.andar},<br>Vc fala ${this.falar},<br>Vc pula ${this.pular},<br> `)
}
,
dengi: function() {
    document.write(`Vc é ${this.quemé} <br> <br>`)
}

 }
 pessoa.dengi()
pessoa.lesma()
pessoa.cidade()
pessoa.idadade()
pessoa.caracteristica()