# Researcher App

## Getting Started

### Stack pre-requisite

- [Node v16.0.0](https://nodejs.org/en/)
- Npm v7.10.0
- [Git](https://git-scm.com/downloads)

### Tools that I'm using:

- React 17.0.2
- Redux 4.1.2
- React router 6.2.2
- Ant Design 4.19.2

### Artchitecture:

- The architecture is following a flexible approach.
- Used redux for state management.
- initial state holding actual list of researchers and filtered records list to perform filters
- actions, reducers are placed under one package name store.
- Used ant design react components for UI which are responsive and speeds up development.
- Components I wrote are self contained and accepting controlled props to pass on to the Ant Design component.
- Search works as you hit enter or clear the text you have wrote.
- To simulate the request behaviour setTimeout has been used with 2000ms to disptach actions


## Coding style followed:

- Prettier
- Eslint React recommended

### Steps to install:

- Inside project folder
- cmd > npm install
- cmd > npm start
