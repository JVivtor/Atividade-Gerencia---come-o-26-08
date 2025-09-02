function adicionarCarrinho(produto) {
    alert(`"${produto}" foi adicionado ao carrinho!`);
}

let carrinho = [];

function adicionarCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  atualizarCarrinho();
}

function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  const totalEl = document.getElementById("total");
  lista.innerHTML = "";

  let total = 0;

  carrinho.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.nome} - R$ ${item.preco.toFixed(2)}
      <button onclick="removerDoCarrinho(${index})">x</button>
    `;
    lista.appendChild(li);
    total += item.preco;
  });

  totalEl.innerText = total.toFixed(2);
}

