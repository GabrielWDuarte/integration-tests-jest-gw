const pactum = require('pactum');

describe('Testes de Integração para Activities', () => {

  // Teste para listar todas as atividades (GET /api/v1/Activities)
  it('Deve listar todas as atividades', async () => {
    const response = await pactum.spec()
      .get('https://fakerestapi.azurewebsites.net/api/v1/Activities')  // URL do endpoint de Activities
      .expectStatus(200);  // Espera o status 200 OK
    expect(response.body).toBeInstanceOf(Array);  // Espera que a resposta seja um array
  });
 
  // Teste para criar uma nova atividade (POST /api/v1/Activities)
  it('Deve criar uma nova atividade', async () => {
    const newActivity = {
      title: 'Nova Atividade',
      dueDate: '2025-04-29T17:30:27.028Z',
      completed: true
    };

    const response = await pactum.spec()
      .post('https://fakerestapi.azurewebsites.net/api/v1/Activities')  // URL do endpoint de Activities
      .withJson(newActivity)
      .expectStatus(200);  // Ou 201 se for um "created"
    
    expect(response.body.title).toBe(newActivity.title);  // Verifica se o título foi corretamente adicionado
  });

  // Teste para retornar uma atividade específica (GET /api/v1/Activities/{id})
  it('Deve retornar uma atividade específica', async () => {
    const activityId = 1;  // Substitua pelo ID da atividade que você quer testar

    const response = await pactum.spec()
      .get(`https://fakerestapi.azurewebsites.net/api/v1/Activities/${activityId}`)  // URL do endpoint de Activities
      .expectStatus(200);  // Espera o status 200 OK

    expect(response.body.id).toBe(activityId);  // Verifica se o ID retornado é o correto
  });

  // Teste para atualizar uma atividade existente (PUT /api/v1/Activities/{id})
  it('Deve atualizar uma atividade', async () => {
    const updatedActivity = {
      title: 'Atividade Atualizada',
      dueDate: '2025-04-29T17:30:46.864Z',
      completed: false
    };

    const activityId = 1;  // Substitua pelo ID da atividade que você quer atualizar

    const response = await pactum.spec()
      .put(`https://fakerestapi.azurewebsites.net/api/v1/Activities/${activityId}`)  // URL do endpoint de Activities
      .withJson(updatedActivity)
      .expectStatus(200);  // Espera o status 200 OK

    expect(response.body.title).toBe(updatedActivity.title);  // Verifica se o título foi atualizado corretamente
  });

  // Teste para excluir uma atividade (DELETE /api/v1/Activities/{id})
  it('Deve excluir uma atividade', async () => {
    const activityId = 1;  // Substitua pelo ID da atividade a ser excluída

    const response = await pactum.spec()
      .delete(`https://fakerestapi.azurewebsites.net/api/v1/Activities/${activityId}`)  // URL do endpoint de Activities
      .expectStatus(200);  // Espera o status 200 OK
  });
});
