const produtoHandler = require('./produto-handler');
const { produtoSchema, produtoSchemaAtualizacao } = require('./produto-schema');

module.exports = [
  {
    method: 'POST',
    path: '/produtos',
    handler: produtoHandler.criarProduto,
    options: {
      validate: {
        payload: produtoSchema,
      },
    },
  },
  {
    method: 'PUT',
    path: '/produtos/{id}',
    handler: produtoHandler.atualizarProduto,
    options: {
      validate: {
        payload: produtoSchemaAtualizacao,
      },
    },
  },
  {
    method: 'DELETE',
    path: '/produtos/{id}',
    handler: produtoHandler.removerProduto,
  },
  {
    method: 'GET',
    path: '/produtos/{id}',
    handler: produtoHandler.obterProdutoPorId,
  },
  {
    method: 'GET',
    path: '/produtos',
    handler: produtoHandler.filtrarProdutos,
  },
];
