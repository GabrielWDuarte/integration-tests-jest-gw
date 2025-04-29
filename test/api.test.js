const pactum = require('pactum');

describe('API Reqres Testes de Integração', () => {

  const apiKey = 'reqres-free-v1';  // Chave de API obtida

  // Cenário 1: Obter lista de usuários na página 1
  it('Deve obter lista de usuários na página 1', async () => {
    const response = await pactum.spec()
      .withHeaders('x-api-key', apiKey)  // Corrigido para 'withHeaders'
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
      .withHeaders('x-api-key', apiKey)  // Corrigido para 'withHeaders'
      .get('https://reqres.in/api/users?page=2')
      .expectStatus(200);
  });

  // Cenário 3: Criar um novo usuário
  it('Deve criar um novo usuário', async () => {
    const response = await pactum.spec()
      .withHeaders('x-api-key', apiKey)  // Corrigido para 'withHeaders'
      .post('https://reqres.in/api/users')
      .withJson({
        name: "John Doe",
        job: "Software Engineer"
      })
      .expectStatus(201);
  });

  // Cenário 4: Obter detalhes de um usuário específico
  it('Deve obter detalhes de um usuário específico', async () => {
    const response = await pactum.spec()
      .withHeaders('x-api-key', apiKey)  // Corrigido para 'withHeaders'
      .get('https://reqres.in/api/users/2')
      .expectStatus(200);
  });

  // Cenário 5: Atualizar um usuário específico
  it('Deve atualizar um usuário específico', async () => {
    const response = await pactum.spec()
      .withHeaders('x-api-key', apiKey)  // Corrigido para 'withHeaders'
      .put('https://reqres.in/api/users/2')
      .withJson({
        name: "John Doe",
        job: "Product Manager"
      })
      .expectStatus(200);
  });

  // Cenário 6: Deletar um usuário
  it('Deve deletar um usuário', async () => {
    const response = await pactum.spec()
      .withHeaders('x-api-key', apiKey)  // Corrigido para 'withHeaders'
      .delete('https://reqres.in/api/users/2')
      .expectStatus(204);
  });

  // Cenário 7: Retornar erro ao tentar obter usuário com ID inexistente
  it('Deve retornar erro ao tentar obter usuário com ID inexistente', async () => {
    const response = await pactum.spec()
      .withHeaders('x-api-key', apiKey)  // Corrigido para 'withHeaders'
      .get('https://reqres.in/api/users/999')
      .expectStatus(404);
  });

  // Cenário 8: Retornar erro ao criar um usuário sem nome
  it('Deve retornar erro ao criar um usuário sem nome', async () => {
    const response = await pactum.spec()
      .withHeaders('x-api-key', apiKey)  // Corrigido para 'withHeaders'
      .post('https://reqres.in/api/users')
      .withJson({
        job: "Software Engineer"
      })
      .expectStatus(400);
  });

  // Cenário 9: Retornar erro ao atualizar usuário com dados inválidos
  it('Deve retornar erro ao atualizar usuário com dados inválidos', async () => {
    const response = await pactum.spec()
      .withHeaders('x-api-key', apiKey)  // Corrigido para 'withHeaders'
      .put('https://reqres.in/api/users/2')
      .withJson({
        name: "",
        job: ""
      })
      .expectStatus(400);
  });

  // Cenário 10: Criar um novo usuário com dados válidos
  it('Deve criar um novo usuário com dados válidos', async () => {
    const response = await pactum.spec()
      .withHeaders('x-api-key', apiKey)  // Corrigido para 'withHeaders'
      .post('https://reqres.in/api/users')
      .withJson({
        name: "Alice Doe",
        job: "QA Engineer"
      })
      .expectStatus(201);
  });

});
