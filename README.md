<h1 align="center">VANN: Frontend</h1>

<p align="center">
  <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS"><img src="https://img.shields.io/badge/CSS3-1572B6.svg?style=flat&labelColor=555&logo=CSS3&logoColor=white"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML"><img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&labelColor=555&logo=HTML5&logoColor=white"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&labelColor=555&logo=JavaScript&logoColor=white"></a>
  <a href="https://nodejs.org/en"><img src="https://img.shields.io/badge/Node.js-5FA04E.svg?style=flat&labelColor=555&logo=nodedotjs&logoColor=white"></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&labelColor=555&logo=React&logoColor=white"></a>
</p>

This is a project to develop a frontend for integration with an e-commerce site backend server.

The initial implementation is a simplified model &mdash; further features such as richer product models and user authentication will be introduced in subsequent versions.

The backend server is built with Java Spring Boot on a PostgreSQL database and is located [here](https://github.com/essteer/vann). An overview of the model is introduced in the README of that repo.

## Setup and installation

This program was developed with Node 22.2.0 and React 18.3.1.

### Codebase

<a href="https://github.com/essteer/vann-app"><img src="https://img.shields.io/badge/GitHub-181717.svg?style=flat&labelColor=555&logo=GitHub&logoColor=white"></a>

To clone this repo, open the terminal on your machine and run the following command from within the desired workspace:

```console
$ git clone git@github.com:essteer/vann-app
```

The required dependencies are included in `package.json`. To install them run:

```console
$ npm install
```

To build the project for production use this command:

```console
$ npm run build
```

## Operation

In the project root directory, use this command to run the app in development mode:

```console
$ npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload in response to changes and lint errors may be displayed in the console.
