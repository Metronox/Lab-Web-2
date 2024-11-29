const Sequelize = require('sequelize');
const database = require('../../../config/db');

const Produto = database.sequelize.define('Produto', {
   id: {
       type: Sequelize.STRING,
       allowNull: false,
       primaryKey: true,
   },
   nome: {
       type: Sequelize.STRING,
       allowNull: false,
   },
   descricao: {
       type: Sequelize.STRING,
       allowNull: true,
   },
   categoria: {
       type: Sequelize.STRING,
       allowNull: true,
   },
   marca: {
       type: Sequelize.STRING,
       allowNull: true,
   },
   preco: {
       type: Sequelize.FLOAT,
       allowNull: true,
   },
   quantidadeEstoque: {
       type: Sequelize.INTEGER,
       allowNull: true,
   },
   codigoBarras: {
       type: Sequelize.STRING,
       allowNull: true,
   },
   largura: {
       type: Sequelize.FLOAT,
       allowNull: true,
   },
   altura: {
       type: Sequelize.FLOAT,
       allowNull: true,
   },
   profundidade: {
       type: Sequelize.FLOAT,
       allowNull: true,
   },
   unidadeMedida: {
       type: Sequelize.STRING,
       allowNull: true,
   },
   peso: {
       type: Sequelize.FLOAT,
       allowNull: true,
   },
   status: {
       type: Sequelize.STRING,
       allowNull: false,
       defaultValue: 'ativo',
   },
   dataCadastro: {
       type: Sequelize.DATE,
       allowNull: false,
       defaultValue: Sequelize.NOW,
   },
}, {
   tableName: 'produto',
   timestamps: false,
});

module.exports = { Produto };
