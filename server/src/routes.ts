import Router from 'koa-router';

const router = new Router();

router.get('/user', (ctx) => {
  const userData = {
    username: 'exampleUser',
    password: 'examplePassword',
  };

  ctx.type = 'application/json';

  ctx.status = 200;
  ctx.body = userData;
});

export default router;
