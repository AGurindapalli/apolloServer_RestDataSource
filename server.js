import express from 'express';
import { ApolloServer} from 'apollo-server-express';
import typeDefs from './schema';
import resolvers from './resolvers'
import {RandomUserDataSource} from './REST_API/RandomUser';
import {makeExecutableSchema} from 'graphql-tools';


const app = express();

const schema = makeExecutableSchema({typeDefs,resolvers});
const server = new ApolloServer({
    schema,
    dataSources: () => ({
        randomUserAPI: new RandomUserDataSource()
    })
});
const path = '/graphql';

server.applyMiddleware({ app, path });

app.listen({ port: 4000 },()=>console.log(`Express Server is running on port 4000${server.graphqlPath}`));