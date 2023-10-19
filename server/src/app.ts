import apolloServer from './apolloServer';
import createApp from '@/koa';

const PORT = process.env.PORT || 8080;
const app = createApp();

apolloServer.start().then(() => {
  apolloServer.applyMiddleware({ app });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});
