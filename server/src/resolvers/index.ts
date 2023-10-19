import { GqlContext } from '@/apolloServer';
import { Resolvers } from '@/generated/graphql';
import { Login } from './../services/auth';
import { ResolverResponse, withErrorResolver } from './utils';

export const resolvers: Resolvers<GqlContext> = {
  Query: {
    // article: () => 'hello',
  },
  Mutation: {
    login: withErrorResolver(
      async (_, { input }, { database }) =>
        await Login({ deps: { database }, input })
    ),
  },
  UserResponse: ResolverResponse('User'),
  ArticleResponse: ResolverResponse('Article'),
  ArticlesResponse: ResolverResponse('Articles'),
};
