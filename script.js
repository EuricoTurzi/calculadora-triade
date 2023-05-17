function updateModalValues(
  valorFabricado,
  valorCliente,
  lucro,
  porcentagemLucro
) {
  document.getElementById("dinheiro-sujo-resultado").innerText =
    valorFabricado.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    }); // busca elemento pelo id e altera o texto interno pela proprieadade innerText

  document.getElementById("limpo-cliente-resultado").innerText =
    valorCliente.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    }); // busca elemento pelo id e altera o texto interno pela proprieadade innerText

  document.getElementById("limpo-lucro-resultado").innerText =
    lucro.toLocaleString("pt-br", { style: "currency", currency: "BRL" }); // busca elemento pelo id e altera o texto interno pela proprieadade innerText

  document.getElementById(
    "porcentagem-resultado"
  ).innerText = `${porcentagemLucro.toFixed(0)}%`;
  // busca elemento pelo id e altera o texto interno pela proprieadade innerText, usa toFixed para limitar a quantidade de casas decimais em 2
}

function calcular() {
  var valorFabricado = parseFloat(document.getElementById("valor").value);
  var porcentagemLucro = parseFloat(
    document.getElementById("porcentagem").value
  );
  var qtdSolventes = Math.ceil((valorFabricado / 100000) * 20);
  var qtdPapelMoeda = Math.ceil(valorFabricado / 100000) * 2;
  var valorPapelMoeda = qtdPapelMoeda * 2000;
  var lucro = (valorFabricado * porcentagemLucro) / 100 - valorPapelMoeda;
  var valorCliente = (valorFabricado * (100 - porcentagemLucro)) / 100;
  document.getElementById("solventes").value = qtdSolventes;
  document.getElementById("qtdPapelMoeda").textContent = qtdPapelMoeda;
  document.getElementById("valorPapelMoeda").textContent =
    " (Total de: " +
    valorPapelMoeda.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    }) +
    ")";
  document.getElementById("lucro").value = lucro.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  document.getElementById("cliente").value = valorCliente.toLocaleString(
    "pt-br",
    { style: "currency", currency: "BRL" }
  );

  updateModalValues(valorFabricado, valorCliente, lucro, porcentagemLucro);

  /* var reportText =
    "Copie e cole no BC Ilegal - #registro-lavagem \n" +
    "\n" +
    "Nome: \n" +
    "Dinheiro sujo: " +
    valorFabricado.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    }) +
    "\n" +
    "Dinheiro limpo para o cliente: " +
    valorCliente.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    }) +
    "\n" +
    "Dinheiro limpo para nós: " +
    lucro.toLocaleString("pt-br", { style: "currency", currency: "BRL" }) +
    "\n" +
    "Porcentagem: " +
    porcentagemLucro +
    "%\n"; */

  // chama o método que vai atualizar os valores do modal, pq mesmo o modal estando escondido ele
  // continua existindo na página e pode ser acessado pelo js, aí quando clicar no botão ele
  // vai atualizar os valores do modal e depois exibir ele (que já estava ok)
  // coloquei pra passar os valores por parametro pra esse método só pra nao precisar colocar todo
  // codigo aqui
}
