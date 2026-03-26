// Seleciona todos os botões de adicionar
const botoesAdicionar = document.querySelectorAll('.adicionar');

// Seleciona a lista onde os itens do pedido serão exibidos
const listaPedido = document.getElementById('lista-pedido');

// Seleciona o elemento que exibirá o valor total do pedido
const totalElemento = document.getElementById('total');

// Cria a variável que armazena o valor total dos pedidos
let total = 0;

// Percorre todos os botões e adiciona evento de clique
botoesAdicionar.forEach((botao) => {
    botao.addEventListener("click", () => {
        // Obtém o card do produto
        const produto = botao.parentElement;

        // Obtém o nome do produto
        const nome = produto.querySelector("h3").textContent;

        // Obtém o preço do produto
        const precoTexto = produto.querySelector(".preco").textContent;
        const preco = parseFloat(
            precoTexto.replace("R$", "").replace(",", ".").trim()
        );

        // Cria um item da lista
        const itemPedido = document.createElement("li");
        itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

        // Adiciona o item à lista
        listaPedido.appendChild(itemPedido);

        // Soma ao total
        total += preco;

        // Atualiza o total na tela
        totalElemento.textContent = `Total: R$ ${total.toFixed(2).replace(".", ",")}`;
    });
});