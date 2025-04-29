const pactum = require('pactum');

describe('API Reqres Testes de Integração', () => {

  // Cenário 1: Obter lista de usuários na página 1
  it('Deve obter lista de usuários na página 1', async () => {
    const response = await pactum.spec()
      .get('https://reqres.in/api/users?page=1')
      .expectStatus(200)
      .expectJsonLike({
        page: 1,
        per_page: 6,
        total: 12,
        total_pages: 2,
        data: [{
          id: 1,
          email: 'george.bluth@reqres.in',
          first_name: 'George',
          last_name: 'Bluth',
        }]
      });
  });

  // Cenário 2: Obter lista de usuários na página 2
  it('Deve obter lista de usuários na página 2', async () => {
    const response = await pactum.spec()
      .get('https://reqres.in/api/users?page=2')
      .expectStatus(200)
      .expectJsonLike({
        page: 2,
        per_page: 6,
        total: 12,
        total_pages: 2,
        data: [{
          id: 7,
          email: 'michael.lawson@reqres.in',
          first_name: 'Michael',
          last_name: 'Lawson',
        }]
      });
  });

  // Cenário 3: Criar um novo usuário
  it('Deve criar um novo usuário', async () => {
    const response = await pactum.spec()
      .post('https://reqres.in/api/users')
      .withJson({
        name: 'John Doe',
        job: 'Software Engineer'
      })
      .expectStatus(201)
      .expectJsonLike({
        name: 'John Doe',
        job: 'Software Engineer'
      });
  });

  // Cenário 4: Obter usuário específico por ID
  it('Deve obter detalhes de um usuário específico', async () => {
    const response = await pactum.spec()
      .get('https://reqres.in/api/users/2')
      .expectStatus(200)
      .expectJsonLike({
        data: {
          id: 2,
          email: 'janet.weaver@reqres.in',
          first_name: 'Janet',
          last_name: 'Weaver',
        }
      });
  });

  // Cenário 5: Atualizar usuário específico
  it('Deve atualizar um usuário específico', async () => {
    const response = await pactum.spec()
      .put('https://reqres.in/api/users/2')
      .withJson({
        name: 'John Doe',
        job: 'Product Manager'
      })
      .expectStatus(200)
      .expectJsonLike({
        name: 'John Doe',
        job: 'Product Manager'
      });
  });

  // Cenário 6: Deletar usuário
  it('Deve deletar um usuário', async () => {
    const response = await pactum.spec()
      .delete('https://reqres.in/api/users/2')
      .expectStatus(200)
      .expectJson({
        status: 'success'
      });
  });

  // Cenário 7: Teste de usuário não encontrado (ID inexistente)
  it('Deve retornar erro ao tentar obter usuário com ID inexistente', async () => {
    const response = await pactum.spec()
      .get('https://reqres.in/api/users/999')
      .expectStatus(404);
  });

  // Cenário 8: Teste de criação de usuário sem nome
  it('Deve retornar erro ao criar um usuário sem nome', async () => {
    const response = await pactum.spec()
      .post('https://reqres.in/api/users')
      .withJson({
        job: 'Designer'
      })
      .expectStatus(400);
  });

  // Cenário 9: Teste de atualização com dados inválidos
  it('Deve retornar erro ao atualizar usuário com dados inválidos', async () => {
    const response = await pactum.spec()
      .put('https://reqres.in/api/users/2')
      .withJson({
        name: '',
        job: ''
      })
      .expectStatus(400);
  });

  // Cenário 10: Teste de criação de usuário com dados válidos
  it('Deve criar um novo usuário com dados válidos', async () => {
    const response = await pactum.spec()
      .post('https://reqres.in/api/users')
      .withJson({
        name: 'Alice Doe',
        job: 'QA Engineer'
      })
      .expectStatus(201)
      .expectJsonLike({
        name: 'Alice Doe',
        job: 'QA Engineer'
      });
  });

});
