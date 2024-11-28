const produtos = [];

const criarProduto = (request, h) => {
  const produto = request.payload;
  produtos.push(produto);
  return h.response({ mensagem: 'Produto criado com sucesso', produto }).code(201);
};

const atualizarProduto = (request, h) => {
  const { id } = request.params;
  const dadosAtualizados = request.payload;
  const index = produtos.findIndex((p) => p.id === id);

  if (index === -1) {
    return h.response({ erro: 'Produto não encontrado' }).code(404);
  }

  produtos[index] = { ...produtos[index], ...dadosAtualizados };
  return { mensagem: 'Produto atualizado com sucesso', produto: produtos[index] };
};

const removerProduto = (request, h) => {
  const { id } = request.params;
  const index = produtos.findIndex((p) => p.id === id);

  if (index === -1) {
    return h.response({ erro: 'Produto não encontrado' }).code(404);
  }

  produtos[index].status = 'inativo';
  return { mensagem: 'Produto removido com sucesso' };
};

const obterProdutoPorId = (request, h) => {
  const { id } = request.params;
  const produto = produtos.find((p) => p.id === id);

  if (!produto) {
    return h.response({ erro: 'Produto não encontrado' }).code(404);
  }

  return produto;
};

const filtrarProdutos = (request, h) => {
  const { categoria, nome } = request.query;
  const filtrados = produtos.filter((p) =>
    (categoria ? p.categoria === categoria : true) &&
    (nome ? p.nome.includes(nome) : true)
  );

  return filtrados;
};

module.exports = {
  criarProduto,
  atualizarProduto,
  removerProduto,
  obterProdutoPorId,
  filtrarProdutos,
};
