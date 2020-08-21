<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ThayPedroso/proffy?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/ThayPedroso/proffy">
  
  <a href="https://github.com/ThayPedroso/proffy/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/ThayPedroso/proffy">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/ThayPedroso/proffy/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/ThayPedroso/proffy?style=social">
  </a> 
</p>

<h4 align="center"> 
	🚧  proffy - Concluído 🚀 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-contribuidores">Contribuidores</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

Proffy - é uma forma de conectar alunos e professores de maneira prática.


Projeto desenvolvido durante a **NLW - Next Level Week** oferecida pela [Rocketseat](https://blog.rocketseat.com.br/segunda-next-level-week/).
O NLW é uma experiência online com muito conteúdo prático, desafios e hacks onde o conteúdo fica disponível durante uma semana.

---

## ⚙️ Funcionalidades

- [x] O professores podem se cadastrar na plataforma web enviando:
  - [x] nome, email, biografia e whatsapp
  - [x] matéria que ensina e agenda de horários disponíveis
  - [x] mostrar número de conexões realizadas
  - [x] buscar professores de acordo com filtros de matéria, horário e dias da semana

- [x] Os alunos tem acesso ao aplicativo móvel, onde podem:
  - [x] mostrar número de conexões realizadas
  - [x] buscar professores de acordo com filtros de matéria, horário e dias da semana
  - [x] favoritar professores
  
---

## :cinema: Vídeo

Fiz um vídeo explicando o funcionamento da aplicação. Logo no começo do vídeo é possível visualizar o layout e o funcionamento:

<a href="https://www.youtube.com/watch?v=ry3vGJ17TCo&t=1s">
  Assita aqui!
</a>

---

## 🚀 Como executar o projeto

Este projeto é divido em três partes:
1. Backend (pasta server) 
2. Frontend (pasta web)
3. Mobile (pasta mobile)

💡Tanto o Frontend quanto o Mobile precisam que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone git@github.com:ThayPedroso/proffy.git

# Acesse a pasta do projeto no terminal/cmd
$ cd proffy

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3333 - acesse http://localhost:3333 

```

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone git@github.com:ThayPedroso/proffy.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd proffy

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[Axios](https://github.com/axios/axios)**

> Veja o arquivo  [package.json](https://github.com/ThayPedroso/proffy/blob/master/web/package.json)

#### [](https://github.com/ThayPedroso/proffy#server-nodejs--typescript)**Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[KnexJS](http://knexjs.org/)**
-   **[SQLite](https://github.com/mapbox/node-sqlite3)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**

> Veja o arquivo  [package.json](https://github.com/ThayPedroso/proffy/blob/master/server/package.json)

#### [](https://github.com/ThayPedroso/proffy#mobile-react-native--typescript)**Mobile**  ([React Native](http://www.reactnative.com/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Expo](https://expo.io/)**
-   **[Expo Google Fonts](https://github.com/expo/google-fonts)**
-   **[React Navigation](https://reactnavigation.org/)**
-   **[Expo Constants](https://docs.expo.io/versions/latest/sdk/constants/)**
-   **[React Native SVG](https://github.com/react-native-community/react-native-svg)**
-   **[Axios](https://github.com/axios/axios)**

> Veja o arquivo  [package.json](https://github.com/ThayPedroso/proffy/blob/master/mobile/package.json)

#### [](https://github.com/ThayPedroso/proffy#utilit%C3%A1rios)**Utilitários**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**  → Extensions:  **[SQLite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)**
-   Markdown:  **[StackEdit](https://stackedit.io/)**,  **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**
-   Commit Conventional:  **[Commitlint](https://github.com/conventional-changelog/commitlint)**

---

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

## :woman: Autora

<a href="https://www.linkedin.com/in/thaylapedroso/">
 <img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/44008476?s=460&u=7dbb833a401c575edc98f696cb5823d3b5e78e72&v=4" width="100px;" alt="Thayla"/>
 <br />
</a>

 [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thaylapedroso/)](https://www.linkedin.com/in/thaylapedroso/) [![Gmail Badge](https://img.shields.io/badge/-GMail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:thayla.pedroso88@gmail.com)](mailto:thayla.pedroso88@gmail.com) [![Blog Badge](https://img.shields.io/badge/-Blog-green?style=flat-square&logo=Blog&logoColor=white&link=http://pensaengenheira.blogspot.com/)](http://pensaengenheira.blogspot.com/)

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

---
