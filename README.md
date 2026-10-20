# API de Professores

API em Node.js com Express para gerenciar os professores de uma escola, com seus dados pessoais e as turmas que cada um ministra. Os dados ficam em memória, sem banco de dados.

## Como executar

```
npm install
npm start
```

O servidor sobe em `http://localhost:3000`.

## Endpoints

| Método | Endpoint | Descrição |
|---|---|---|
| GET | /professores | Lista todos os professores |
| GET | /professores/:id | Busca um professor pelo ID |
| GET | /professores/:id/turmas | Lista as turmas de um professor |
| PUT | /professores/:id | Atualiza os dados de um professor |
| POST | /professores/:id/turmas | Adiciona uma turma a um professor |
| GET | /professores/departamento/:departamento | Lista os professores de um departamento |
| DELETE | /professores/:id | Remove um professor |

Exemplo de corpo para o PUT:

```json
{
  "nome": "Vinicius Paes Lima",
  "idade": 31,
  "departamento": "Computação"
}
```

Exemplo de corpo para o POST de turma:

```json
{
  "codigo": "5E",
  "disciplina": "APIs REST",
  "alunos": ["Lucas", "Mariana"]
}
```

Se o ID não existir, o PUT e o DELETE retornam `{"mensagem": "Id não existente"}`.

## Estrutura

```
api-professores/
├── app.js
├── package.json
├── controllers/
│   └── professoresController.js
├── routes/
│   └── professoresRoutes.js
└── prints/
```
