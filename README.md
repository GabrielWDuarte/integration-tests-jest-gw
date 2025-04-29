# API Integration Tests - Fakerestapi (Activities)

Este projeto realiza testes de integração automatizados para a API Fakerestapi, focando nos endpoints relacionados a Activities. Utiliza as ferramentas Jest, PactumJS, Prettier, ESLint e integração com SonarQube para garantir qualidade, padronização e cobertura dos testes.

## Tecnologias Utilizadas

- [**PactumJS**] - Framework para testes de API
- [**ESLint**] - Linter para JavaScript
- **[SonarQube]** - Análise de qualidade de código

## Endpoints Testados

Os principais endpoints testados deste projeto são:

- **GET /api/v1/Activities** - Lista todas as atividades
- **POST /api/v1/Activities** - Cria uma nova atividade
- **GET /api/v1/Activities/{id}** - Busca uma atividade pelo ID
- **PUT /api/v1/Activities/{id}** - Atualiza uma atividade pelo ID
- **DELETE /api/v1/Activities/{id}** - Remove uma atividade pelo ID

A documentação completa da API pode ser encontrada [aqui](https://fakerestapi.azurewebsites.net/index.html).

## Pré-requisitos

- Node.js v20 ou superior
- npm

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
npm install
```

## Como executar os testes

Execute os testes com o comando:

```bash
npm test
```
Ou, para rodar o pipeline completo (incluindo lint e prettier):
```bash
npm run ci
```
Após a execução, os relatórios de testes podem ser encontrados na pasta ./output.

## Padronização de Código

Para formatar o código:
```bash
npm run format
```
Para checar problemas de lint:
```bash
npm run lint
```

## Análise de Qualidade

A análise de qualidade do código é feita via SonarQube. Consulte o pipeline CI para detalhes.


## Referências

- [**Fakerestapi Swagger**] 
- [**PactumJS Docs**]
- [**Jest Docs**] 