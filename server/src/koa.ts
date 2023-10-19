import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { AppContext, AppState } from './types/app';
import router from './routes';

const createApp = () => {
  const app = new Koa<AppState, AppContext>();

  app.use(
    bodyParser({
      enableTypes: ['json', 'form', 'text', 'xml'],
    })
  );

  app.use(router.routes()).use(router.allowedMethods());

  return app;
};

export default createApp;
