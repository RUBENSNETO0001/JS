var produtos = [
    {
        id: 1,
        nome: 'Água do Goulate',
        preco: 150 ,
        descricao: 'Água de consumo com um sabor único.',
        imagem: 'images01.jpg'
    },
    {
        id: 2,
        nome: 'olho da sorte',
        preco:  40,
        descricao: 'Café gourmet com aroma e sabor excepcionais.',
        imagem: 'download (1).jpg'
    },
    {
        id: 3,
        nome: 'boneca doll',
        preco:  1200,
        descricao: 'boneca para se divertir.',
        imagem: 'download.jpg'
    },
]


function exibirProdutos() {
    var listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = '';

    produtos.forEach(function(produto) {
        var itemProduto = document.createElement('div');
        itemProduto.className = 'produto';
        itemProduto.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <button  class="btn" onclick="compra(${produto.id})">Adicionar ao Carrinho</button>
        `;
        listaProdutos.appendChild(itemProduto);
    });
}


exibirProdutos();
