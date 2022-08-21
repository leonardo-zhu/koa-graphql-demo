import Koa from 'koa';
import mount from 'koa-mount';
import { createKoaGraphQLServer } from './app';
import { mockSchema1, mockSchema2 } from './graphql';

const main = async () => {
  const app = new Koa();

  const server = createKoaGraphQLServer(mockSchema1);
  const server2 = createKoaGraphQLServer(mockSchema2);

  app.use(mount('/graphql1', server));
  app.use(mount('/graphql2', server2));

  app.listen(3000, () => {
    console.log('listening on port 3000');
  });
};

main();
