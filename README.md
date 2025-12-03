Backend:

# 1 - Descrição da API e endpoints:

O backend foi desenvolvido em Node.js com Express, funcionando como uma API REST para manipulação de criaturas de RPG. Integra-se ao MongoDB via Mongoose.

Endpoints disponíveis:

- GET	/creatures - Retorna todas as criaturas
- GET	/creatures/:id - Retorna uma criatura pelo ID
- POST	/creatures - Cria uma nova criatura
- PUT	/creatures/:id - Atualiza uma criatura existente
- DELETE	/creatures/:id - Remove uma criatura

A API aceita imagem via URL ou Base64.

# 2 - Instruções de instalação e execução

Instalar dependências:

cd bestiario-rpg-backend
npm install

<img width="393" height="37" alt="image" src="https://github.com/user-attachments/assets/828a0ce6-c68a-4a56-806c-8a68b4be9ad4" />

Verificar se o MongoDB está em execução:

net start MongoDB

Iniciar o servidor:

node src/server.js

<img width="636" height="161" alt="image" src="https://github.com/user-attachments/assets/1899134a-69e4-470c-a959-173f5d3f80d1" />

A API ficará disponível em:

http://localhost:3001

# 3 - Exemplos de uso:

Exemplo de criação (POST /creatures):
{
  "name": "Ragnarok",
  "type": "Humano",
  "level": 85,
  "habitat": "Montanhas Nevadas",
  "imageUrl": null,
  "imageBase64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUg"
}

<img width="1154" height="482" alt="image" src="https://github.com/user-attachments/assets/6493b198-8c07-4bb3-b6ac-45722f6a406a" />

Exemplo de edição (PUT /creatures/:id):

{
  "name": "Ragnarok",
  "type": "Humano",
  "level": 88,
  "habitat": "Alpes Brancos",
  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPn7N6AWlpIWSuYqY4XjrS90SNrsZKf1ROVg&s"
}

<img width="633" height="526" alt="image" src="https://github.com/user-attachments/assets/50dc0c9a-cfc5-491d-81a0-c00f489545fc" />

Resposta de listagem (GET /creatures):

{
  "_id": {
    "$oid": "6919fb61aeec25e23ffeeaea"
  },
  "name": "Ragnarok",
  "type": "Humano",
  "level": 85,
  "habitat": "Montanhas Nevadas",
  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPn7N6AWlpIWSuYqY4XjrS90SNrsZKf1ROVg&s",
  "createdAt": {
    "$date": "2025-11-16T16:27:13.961Z"
  },
  "__v": 0
}

<img width="1260" height="227" alt="image" src="https://github.com/user-attachments/assets/81d8bd42-a04d-431a-9d25-503cd68f31fd" />

# 4 - Commits:

- configuração inicial do backend
- criação do servidor Express
- criação do modelo Creature
- implementação dos controllers
- criação das rotas REST
- integração com Mongoose
- tratamento de erros e ajustes finais

# 5 - Organização

Estrutura do backend:

<img width="314" height="331" alt="image" src="https://github.com/user-attachments/assets/0b0c7dba-8450-4857-a4c7-8319b315f646" />

# 6 - Arquitetura da API:

A API segue a arquitetura MVC:
- Model: define o schema e estrutura das criaturas.
- Controller: contém a lógica das operações do CRUD.
- Routes: direciona cada endpoint para seu respectivo controller.
- Server: inicializa o Express, configura middlewares e conecta ao MongoDB.

# 7 - Servidor Online

A Hospedagem do Backend para acesso se encontra em:

[![Backend Online](https://img.shields.io/badge/Backend-Online-brightgreen)](https://backend-hrb3.onrender.com)
