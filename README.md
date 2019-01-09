# Sample Project use RestDataSource in Apollo Server

In this Project i'm getting Random person from the `https://api.randomuser.me/` and displaying gender and email as sample. You can use update the schema to use other properties too.

### Dependies

```js

"dependencies": {
    "apollo-datasource-rest": "^0.2.1",
    "apollo-server-express": "^2.3.1",
    "express": "^4.16.4",
    "graphql": "^14.0.2",
    "graphql-tools": "^4.0.3"
  }
```  

### 1. Clone the Repository
### 2. Install the node Modules
  Run `npm install` or `yarn install`and you're good to go!
### 3. Run the project
  `npm start` or `yarn start`
### 4. open below url in the Browser
`http://localhost:4000/graphql`
### 5. Run this command in the Graphql Playground
```js
{
  randomPerson {
    gender
  }
}
```
### You have successfully Ran a RESTAPI using Apollo Server 
