const aluno = require('../api/v1/alunos/aluno-routes');
const produtos = require('../api/v1/produtos/produto-routes');

const routes = [
    ...aluno,
    ...produtos
]

module.exports = routes;