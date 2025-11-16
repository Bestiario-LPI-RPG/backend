Backend:

1 - Descrição da API e endpoints:

O backend foi desenvolvido em Node.js com Express, funcionando como uma API REST para manipulação de criaturas de RPG. Integra-se ao MongoDB via Mongoose.

Endpoints disponíveis:

- GET	/creatures - Retorna todas as criaturas
- GET	/creatures/:id - Retorna uma criatura pelo ID
- POST	/creatures - Cria uma nova criatura
- PUT	/creatures/:id - Atualiza uma criatura existente
- DELETE	/creatures/:id - Remove uma criatura

A API aceita imagem via URL ou Base64.

2 - Instruções de instalação e execução

Instalar dependências:

cd bestiario-rpg-backend
npm install

Verificar se o MongoDB está em execução:

net start MongoDB

Iniciar o servidor:

node src/server.js

A API ficará disponível em:

http://localhost:3001

3 - Exemplos de uso:

Exemplo de criação (POST /creatures):
{
  "name": "Ragnarok",
  "type": "Humano",
  "level": 85,
  "habitat": "Montanhas Nevadas",
  "imageUrl": null,
  "imageBase64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUg..."
}

Exemplo de edição (PUT /creatures/:id):

{
  "name": "Ragnarok",
  "type": "Humano",
  "level": 88,
  "habitat": "Alpes Brancos",
  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPn7N6AWlpIWSuYqY4XjrS90SNrsZKf1ROVg&s"
}

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

4 - Commits:

- configuração inicial do backend
- criação do servidor Express
- criação do modelo Creature
- implementação dos controllers
- criação das rotas REST
- integração com Mongoose
- tratamento de erros e ajustes finais

5 - Organização

Estrutura do backend:

<img width="314" height="331" alt="image" src="https://github.com/user-attachments/assets/0b0c7dba-8450-4857-a4c7-8319b315f646" />

6 - Arquitetura da API:

A API segue a arquitetura MVC:
- Model: define o schema e estrutura das criaturas.
- Controller: contém a lógica das operações do CRUD.
- Routes: direciona cada endpoint para seu respectivo controller.
- Server: inicializa o Express, configura middlewares e conecta ao MongoDB.
