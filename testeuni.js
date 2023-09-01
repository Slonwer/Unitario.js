const { cadastrarUsuario, buscarUsuarioPorEmail } = require('./testeuni.js'); // Substitua './seuarquivo' pelo caminho real do seu arquivo com as funções

describe('Teste das funções de cadastro e busca de usuário', () => {
  beforeAll(() => {
    // Limpa o array de usuários antes de cada teste
    usuariosCadastrados.length = 0;
  });

  it('Deve cadastrar um usuário corretamente', () => {
    cadastrarUsuario('João', 'joao@example.com', 'senha123', 'administrativo');
    const usuario = buscarUsuarioPorEmail('joao@example.com');
    expect(usuario).toBeDefined();
    expect(usuario.nome).toBe('João');
    expect(usuario.email).toBe('joao@example.com');
    expect(usuario.senha).toBe('senha123');
    expect(usuario.nivelAcesso).toBe('administrativo');
  });

  it('Deve retornar undefined para um usuário não cadastrado', () => {
    const usuario = buscarUsuarioPorEmail('usuarioinexistente@example.com');
    expect(usuario).toBeUndefined();
  });

  it('Deve cadastrar e encontrar um usuário corretamente', () => {
    cadastrarUsuario('Maria', 'maria@example.com', 'senha456', 'funcionario');
    const usuario = buscarUsuarioPorEmail('maria@example.com');
    expect(usuario).toBeDefined();
    expect(usuario.nome).toBe('Maria');
    expect(usuario.email).toBe('maria@example.com');
    expect(usuario.senha).toBe('senha456');
    expect(usuario.nivelAcesso).toBe('funcionario');
  });
});
