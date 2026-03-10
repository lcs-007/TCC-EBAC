# ebac-performance-tests

Testes de performance (k6) para a API do projeto ebac-demo-store-server.

## Pré-requisitos

- Node.js e npm
- Docker Desktop
- k6 instalado
- API rodando em http://localhost:3000

## Subir a API local (resumo)

Repositório da API:
https://github.com/EBAC-QE/ebac-demo-store-server

Comandos usados:

- Subir banco:
docker compose -f docker-compose.db.yml up -d

- Instalar dependências:
npm install --legacy-peer-deps

- Inicializar banco (migrations + seed):
npm run db:init

- Iniciar API:
npm run start

## Endpoints testados

- Produtos: GET /api/products
- Clientes: GET /api/customers

Observação: os endpoints exigem autenticação (JWT). Para rodar os testes, é necessário fornecer um TOKEN válido.

## Gerar token (PowerShell)

curl -Method POST http://localhost:3000/api/login `
-Headers @{"Content-Type"="application/json"} `
-Body '{"username":"admin","password":"admin"}' `
-UseBasicParsing

O campo retornado "accessToken" deve ser usado no parâmetro TOKEN do k6.

## Rodar os testes

Produtos:
k6 run -e TOKEN=SEU_TOKEN scripts\produtos.js

Clientes:
k6 run -e TOKEN=SEU_TOKEN scripts\clientes.js

## Configuração do teste

- 10 VUs
- 30s de duração
- Thresholds:
  - http_req_failed < 1%
  - p(95) http_req_duration < 800ms
