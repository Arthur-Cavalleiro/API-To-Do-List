
# API To-Do List

Este é um projeto de API para uma lista de tarefas.

## Configuração

Antes de iniciar a API, é necessário criar um arquivo `.env` na raiz do projeto com as seguintes configurações:

```env
port=3000   # Porta onde deseja que a API seja executada
MONGODB_URL=link-do-seu-cluster-MongoDB   # Link do seu cluster MongoDB
```

Certifique-se de substituir `link-do-seu-cluster-MongoDB` pelo link correto do seu cluster MongoDB.

## Instalação e Execução

Siga as etapas abaixo para instalar e executar a API:

1. No terminal, navegue até o diretório raiz do projeto.
2. Execute o seguinte comando para instalar as dependências necessárias:

   ```shell
   npm install
   ```

3. Após a conclusão da instalação, inicie a API executando o seguinte comando:

   ```shell
   npm start
   ```

   Isso iniciará a API na porta configurada e você verá a mensagem `Server running on http://localhost:3000/` no terminal.

## Endpoints

A API oferece os seguintes endpoints para manipulação de tarefas:

- **GET**: `/list`
  - Retorna todas as tarefas cadastradas.

- **POST**: `/newTask`
  - Cria uma nova tarefa. Envie os dados da tarefa no corpo da requisição.

- **PATCH**: `/update/:id`
  - Atualiza uma tarefa existente com base no ID fornecido. Envie os dados da tarefa no corpo da requisição.

- **DELETE**: `/task/:id`
  - Exclui uma tarefa existente com base no ID fornecido.

Certifique-se de substituir `localhost:3000` pelo host e porta corretos onde sua API está sendo executada.
