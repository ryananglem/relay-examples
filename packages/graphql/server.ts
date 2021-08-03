import { ApolloServer } from 'apollo-server-express';
import * as Express from 'express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';

import SportResolver from './sport/resolver';

async function startServer() {
  const schema = await buildSchema({
    resolvers: [SportResolver],
    emitSchemaFile: true
  });

  const app = Express();

  const server = new ApolloServer({
    schema
  });

  await server.start()
  server.applyMiddleware({ app });

  app.listen(4000, () =>
    console.log('Server is running on http://localhost:4000/graphql')
  );
}

startServer();