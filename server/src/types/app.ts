import { RouterContext } from 'koa-router';
import { User } from '@/generated/graphql';

export type AppState = {
  user: User;
};

export type AppContext = RouterContext & AppState;
