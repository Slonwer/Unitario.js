const chai = require('chai');
const assert = chai.assert;
const Produto = require('../produto'); // Importe a classe Produto a partir do arquivo 'produto.js'

describe('Testes para a classe Produto', function () {
    it('Deve criar um produto com nome e quantidade corretos', function () {
        const produto = new Produto("Produto A", 10);
        assert.equal(produto.nome, "Produto A");
        assert.equal(produto.quantidade, 10);
    });

    // Adicione mais testes conforme necessário
});
const chai = require('chai');
const assert = chai.assert;
const {
    somarEstoque,
    somarClientes,
    somarFuncionarios
} = require('../funcoes'); // Importe as funções a partir do arquivo 'funcoes.js'

describe('Testes para as funções', function () {
    it('Deve somar o estoque corretamente', function () {
        const estoque = {
            produtoA: 10,
            produtoB: 15,
            produtoC: 5
        };
        const totalEstoque = somarEstoque(estoque);
        assert.equal(totalEstoque, 30);
    });

    // Adicione mais testes para as outras funções conforme necessário
});
