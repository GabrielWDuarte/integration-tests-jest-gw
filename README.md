# API Integration Tests - Fakerestapi (Activities)

Este projeto realiza testes de integração automatizados para a **API Fakerestapi**, focando nos endpoints relacionados a **Activities**. Utiliza as ferramentas **Jest**, **PactumJS**, **Prettier**, **ESLint** e integração com **SonarQube** para garantir qualidade, padronização e cobertura dos testes.

## Tecnologias Utilizadas

- **Jest** - Test runner para execução dos testes.
- **PactumJS** - Framework para testes de API, utilizado para realizar chamadas HTTP e validar as respostas.
- **Prettier** - Ferramenta para formatação automática de código, garantindo consistência.
- **ESLint** - Linter para detectar e corrigir problemas no código JavaScript.
- **SonarQube** - Ferramenta de análise de qualidade de código, usada para garantir que o código esteja livre de problemas.

## Endpoints Testados

Os principais endpoints testados deste projeto são:

- **GET /api/v1/Activities** - Lista todas as atividades.
- **POST /api/v1/Activities** - Cria uma nova atividade.
- **GET /api/v1/Activities/{id}** - Busca uma atividade específica pelo ID.
- **PUT /api/v1/Activities/{id}** - Atualiza uma atividade existente pelo ID.
- **DELETE /api/v1/Activities/{id}** - Remove uma atividade pelo ID.

### Exemplos de testes realizados:

1. **GET /api/v1/Activities**:
   - Este teste verifica se a API retorna corretamente uma lista de todas as atividades.

2. **POST /api/v1/Activities**:
   - Este teste cria uma nova atividade e verifica se a resposta contém os dados da nova atividade.

3. **GET /api/v1/Activities/{id}**:
   - Este teste verifica se uma atividade específica pode ser recuperada corretamente pelo seu ID.

4. **PUT /api/v1/Activities/{id}**:
   - Este teste realiza a atualização de uma atividade existente e valida se a alteração foi feita corretamente.

5. **DELETE /api/v1/Activities/{id}**:
   - Este teste exclui uma atividade pelo seu ID e verifica se o processo foi concluído com sucesso.

## Pré-requisitos

Antes de executar os testes, você precisa ter o seguinte instalado:

- **Node.js** versão v20 ou superior
- **npm** (ou **yarn**)

## Instalação

Clone o repositório e instale as dependências com os seguintes comandos:

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
npm install



