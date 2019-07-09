# Api Node com Express

Api conceito com Node e Express

Essa aplicação será utilizada para armazenar projetos e suas tarefas.

## Rotas

- `POST /projects`: A rota recebe `id` e `title` dentro corpo e cadastra um novo projeto dentro de um array no seguinte formato: `{ id: "1", title: 'Novo projeto', tasks: [] }`;

- `GET /projects`: Rota que lista todos projetos e suas tarefas;

- `PUT /projects/:id`: Essa rota altera apenas o título do projeto com o `id` passado por parâmetro na rota;

- `DELETE /projects/:id`: A rota deleta o projeto com o `id` passado por parâmetro na rota;

- `POST /projects/:id/tasks`: A rota deve receber um campo `title` e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do `id` presente nos parâmetros da rota;

## Middlewares

- Um middleware local é utilizado em todas rotas que recebem o ID do projeto nos parâmetros da URL que verifica se o projeto com aquele ID existe. Se não existir retorna erro, caso contrário a requisição continuar normalmente;

- Um middleware global utilizado em todas requisições que imprime (`console.log`) uma contagem de quantas requisições foram feitas na aplicação;
