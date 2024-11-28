const { Produto } = require('./produto-model');

const criarProduto = async (request, h) => {
    try {
        const produto = await Produto.create(request.payload);
        return h.response(produto).code(201);
    } catch (error) {
        return h.response({ erro: 'Erro ao criar produto', detalhes: error.message }).code(500);
    }
};

const atualizarProduto = async (request, h) => {
    const { id } = request.params;

    try {
        const [rowsAtualizadas] = await Produto.update(request.payload, {
            where: { id },
        });

        if (rowsAtualizadas === 0) {
            return h.response({ erro: 'Produto não encontrado' }).code(404);
        }

        const produtoAtualizado = await Produto.findByPk(id);
        return produtoAtualizado;
    } catch (error) {
        return h.response({ erro: 'Erro ao atualizar produto', detalhes: error.message }).code(500);
    }
};

const removerProduto = async (request, h) => {
    const { id } = request.params;

    try {
        const [rowsAtualizadas] = await Produto.update(
            { status: 'inativo' },
            { where: { id } }
        );

        if (rowsAtualizadas === 0) {
            return h.response({ erro: 'Produto não encontrado' }).code(404);
        }

        return { mensagem: 'Produto removido com sucesso' };
    } catch (error) {
        return h.response({ erro: 'Erro ao remover produto', detalhes: error.message }).code(500);
    }
};

const obterProdutoPorId = async (request, h) => {
    const { id } = request.params;

    try {
        const produto = await Produto.findByPk(id);

        if (!produto) {
            return h.response({ erro: 'Produto não encontrado' }).code(404);
        }

        return produto;
    } catch (error) {
        return h.response({ erro: 'Erro ao buscar produto', detalhes: error.message }).code(500);
    }
};

const filtrarProdutos = async (request, h) => {
    const { categoria, nome } = request.query;

    try {
        const where = {};
        if (categoria) where.categoria = categoria;
        if (nome) where.nome = { [Sequelize.Op.like]: `%${nome}%` };

        const produtos = await Produto.findAll({ where });
        return produtos;
    } catch (error) {
        return h.response({ erro: 'Erro ao filtrar produtos', detalhes: error.message }).code(500);
    }
};

module.exports = {
  criarProduto,
  atualizarProduto,
  removerProduto,
  obterProdutoPorId,
  filtrarProdutos,
};
