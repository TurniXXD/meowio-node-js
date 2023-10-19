import * as Cookies from 'cookies';
import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
import { importSchema } from 'graphql-import';
import { ApolloServer } from 'apollo-server-koa';
import { AppContext } from './types/app';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { PrismaClient } from '@prisma/client';
import { User } from './generated/graphql';
import { Request, Response } from 'koa';

export interface GqlContext {
  user: User;
  cookies: Cookies;
  httpRequest: Request;
  httpResponse: Response;
  database: PrismaClient;
}

export async function context({
  ctx,
}: {
  ctx: AppContext;
}): Promise<GqlContext> {
  const { user, cookies, request, response } = ctx;

  const prisma = new PrismaClient();

  return {
    user,
    cookies,
    httpRequest: request,
    httpResponse: response,
    database: prisma,
  };
}

const typeDefs = importSchema('./src/schema/root.graphql');

const apolloServer = new ApolloServer({
  schema: makeExecutableSchema({
    typeDefs,
    resolvers,
  }),
  debug: true,
  context,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

export default apolloServer;
