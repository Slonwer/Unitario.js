class Produto {
    constructor(nome, quantidade) {
        this.nome = nome;
        this.quantidade = quantidade;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getQuantidade() {
        return this.quantidade;
    }

    setQuantidade(quantidade) {
        this.quantidade = quantidade;
    }
}

class Cliente {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }
}

class Funcionario {
    constructor(nome, cargo) {
        this.nome = nome;
        this.cargo = cargo;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getCargo() {
        return this.cargo;
    }

    setCargo(cargo) {
        this.cargo = cargo;
    }
}

const produto1 = new Produto("Produto A", 10);
const produto2 = new Produto("Produto B", 15);
const produto3 = new Produto("Produto C", 5);

const cliente1 = new Cliente("Cliente 1", "cliente1@example.com");
const cliente2 = new Cliente("Cliente 2", "cliente2@example.com");

const funcionario1 = new Funcionario("Funcionário 1", "Vendedor");
const funcionario2 = new Funcionario("Funcionário 2", "Gerente");
