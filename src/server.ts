import * as Koa from 'koa';
import * as Router from 'koa-router';
import { schemas } from 'graphql/schema';
import { databaseInitializer } from 'initializers/database';
// const Router = require('koa-router'); // koa-router@7.x

const graphqlHTTP = require('koa-graphql');

const router = new Router();

const bootstrap = async () => {
    await databaseInitializer();
    const app = new Koa();
    router.all('/graphql', graphqlHTTP({
        schema: schemas,
        graphiql: true,
        formatError: (error, ctx) => ({
            message: error.message,
            locations: error.locations,
            stack: error.stack,
            path: error.path
          })
      }));
      
      app.use(router.routes()).use(router.allowedMethods());
      app.listen(4000)
};

bootstrap();