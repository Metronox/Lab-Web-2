const Joi = require('joi');

const produtoSchema = Joi.object({
  id: Joi.string().required(),
  nome: Joi.string().required(),
  descricao: Joi.string().optional(),
  categoria: Joi.string().optional(),
  marca: Joi.string().optional(),
  preco: Joi.number().optional(),
  quantidadeEstoque: Joi.number().optional(),
  codigoBarras: Joi.string().optional(),
  largura: Joi.number().optional(),
  altura: Joi.number().optional(),
  profundidade: Joi.number().optional(),
  unidadeMedida: Joi.string().optional(),
  peso: Joi.number().optional(),
  status: Joi.string().valid('ativo', 'inativo').optional(),
  dataCadastro: Joi.date().optional(),
});

module.exports = produtoSchema;
