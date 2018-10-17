# Fantastec Demo

To run:

- clone from repo
- nvm use 10.0.0
- cd into project and yarn install
- create two terminals

* First Terminal: yarn run mocks (3000)
* Second Terminal: yarn start (terminal will ask you if you wish to use a different terminal instead, move to 3001)

Project is split into two sections:

Containers (stateful, logic included)
Components (mostly dumb, reuseable - though the updates container has evolved to require some state/logic)

The project is built using React (CRA)
Redux (for state management)
Redux Sagas (for managing async data)
Jest/Enzyme for unit tests
Json-server as a mock api serving an array of objects similar to those you'd find on a regular API




