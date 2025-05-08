function btn() {

    let escolha = document.getElementsByName('email');

    for (let i = 0; i < escolha.length; i++) {
        if (escolha[i].checked) {
            console.log('selecionou' + escolha[i].value)
            if (escolha[i].value == 'sim') {
                alert("Deu bom patrao")
            }
            else {
                alert('Deu ruim patrao')
            }
        }
    }
}