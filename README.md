# Desafio Backend - API Shippify

Este repositório contém a aplicação desenvolvida como parte do desafio para a vaga de backend na Shippify. A aplicação é construída com **Express**, **Node.js** e **TypeScript**.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- [npm](https://www.npmjs.com/) (geralmente já vem com o Node.js)
- [TypeScript](https://www.typescriptlang.org/) (se não estiver globalmente instalado, será instalado nas dependências)

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando na raiz do diretório:

```bash
npm install
```

## Scripts

A aplicação possui alguns scripts úteis definidos no `package.json`. Aqui está a descrição de cada um deles:

- **`start`**: Inicia a aplicação em modo de desenvolvimento utilizando `ts-node-dev`. Isso permite que as alterações no código sejam refletidas imediatamente sem a necessidade de reiniciar o servidor.

  ```bash
  npm start
  ```

- **`production`**: Compila o código TypeScript e inicia a aplicação no modo de produção.

  ```bash
  npm run production
  ```

- **`build`**: Compila o código TypeScript para JavaScript. Os arquivos compilados serão gerados na pasta `build`.

  ```bash
  npm run build
  ```

- **`knex:rollback-all`**: Desfaz todas as migrações aplicadas no banco de dados utilizando o Knex.

  ```bash
  npm run knex:rollback-all
  ```

- **`knex:rollback`**: Desfaz a última migração aplicada no banco de dados.

  ```bash
  npm run knex:rollback
  ```

- **`knex:migrate`**: Executa todas as migrações pendentes no banco de dados, atualizando a estrutura conforme definido nas migrações.

  ```bash
  npm run knex:migrate
  ```

- **`knex:seed`**: Executa os seeds para popular o banco de dados com dados iniciais.

  ```bash
  npm run knex:seed
  ```

- **`test`**: Executa os testes da aplicação utilizando o Jest.

  ```bash
  npm test
  ```

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
/src
  ├── /index.ts          # Ponto de entrada da aplicação
  ├── /server            # Lógica do servidor e configuração do Knex
  ├── /controllers       # Controladores da API
  ├── /models            # Modelos e definição do banco de dados
  ├── /routes            # Definição das rotas da API
  ├── /middlewares       # Middlewares da aplicação
  └── /tests             # Testes unitários e de integração
```

## Documentação da API

Documentação: https://documenter.getpostman.com/view/20609755/2sAXxMhDtN

## Considerações

- Utilizado Banco de dados sqlite3
- Acesso ao banco no .env não realizado. (Conflitos com Autoincrement e Conexão para banco já existente)

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou pull request.

## Licença

Este projeto é de código aberto e pode ser utilizado e modificado conforme desejado.
