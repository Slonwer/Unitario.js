const chai = require('chai');
const assert = chai.assert;

const Produto = require('./produto'); // Importe a classe Produto a partir do arquivo 'produto.js'
const Cliente = require('./cliente'); // Importe a classe Cliente a partir do arquivo 'cliente.js'
const Funcionario = require('./funcionario'); // Importe a classe Funcionario a partir do arquivo 'funcionario.js'

describe('Testes para a classe Produto', function () {
    it('Deve criar um produto com nome e quantidade corretos', function () {
        const produto = new Produto("Produto A", 10);
        assert.equal(produto.getNome(), "Produto A");
        assert.equal(produto.getQuantidade(), 10);
    });
});

describe('Testes para a classe Cliente', function () {
    it('Deve criar um cliente com nome e email corretos', function () {
        const cliente = new Cliente("Cliente 1", "cliente1@example.com");
        assert.equal(cliente.getNome(), "Cliente 1");
        assert.equal(cliente.getEmail(), "cliente1@example.com");
    });
});

describe('Testes para a classe Funcionario', function () {
    it('Deve criar um funcionário com nome e cargo corretos', function () {
        const funcionario = new Funcionario("Funcionário 1", "Vendedor");
        assert.equal(funcionario.getNome(), "Funcionário 1");
        assert.equal(funcionario.getCargo(), "Vendedor");
    });
});
