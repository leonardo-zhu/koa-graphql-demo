import { ApolloClient, gql, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'cross-fetch';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:3000/graphql',
    fetch,
  }),
});

const query = async (query: string) => {
  return await client.query({
    query: gql(query),
    variables: {},
  });
};

const mutation = async (mutation: string) => {
  return await client.mutate({
    mutation: gql(mutation),
    variables: {},
  });
};

export { query, mutation };
