import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';

import { init_db } from './database/init_db';
import { Resolvers } from './schema/Resolvers';

const port = 4000;

const main = async() => {
  await init_db();
  console.log('Database created.');

  const schema = await buildSchema({
    resolvers: [ Resolvers ],
  });

  const apolloServer = new ApolloServer({ schema });
  const app = express();
  apolloServer.applyMiddleware({ app });
  app.listen(
    port,
    () => console.log(`Server started on http://localhost:${port}${apolloServer.graphqlPath}`),
  );
};

main();