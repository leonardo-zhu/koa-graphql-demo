// create apollo server
import { ApolloServer } from 'apollo-server-koa';
import { graphqlHTTP } from 'koa-graphql';
import { GraphQLSchema } from 'graphql/type';

const createApolloServer = (schema: GraphQLSchema) => {
  return new ApolloServer({
    schema,
  });
};

const createKoaGraphQLServer = (schema: GraphQLSchema) => {
  return graphqlHTTP({
    schema,
    rootValue: {
      hello: () => 'hello',
    },
    graphiql: true,
  });
};

export { createApolloServer, createKoaGraphQLServer };
