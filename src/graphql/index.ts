import { buildSchema } from 'graphql/utilities';
import { makeExecutableSchema } from 'graphql-tools';

const mockSchema1 = buildSchema(`
  type Query {
    hello: String!
    world: String!
  }
`);

const mockSchema2 = makeExecutableSchema({
  typeDefs: `
    type Query {
      hello: String!
      world: String!
    }
  `,
  resolvers: {
    Query: {
      world: () => 'world',
    },
  },
});

export { mockSchema1, mockSchema2 };
