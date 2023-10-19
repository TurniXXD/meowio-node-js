import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Article = {
  __typename?: 'Article';
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imageUrl: Scalars['String']['output'];
  perex: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ArticleInput = {
  articleId: Scalars['ID']['input'];
};

export type ArticleResponse = Article | ErrorResponse;

export type Articles = {
  __typename?: 'Articles';
  articles: Array<Maybe<Article>>;
};

export type ArticlesResponse = Articles | ErrorResponse;

export type ErrorBody = {
  __typename?: 'ErrorBody';
  message?: Maybe<Scalars['String']['output']>;
  translatable?: Maybe<TranslatableErrors>;
};

export type ErrorResponse = {
  __typename?: 'ErrorResponse';
  error: ErrorBody;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: UserResponse;
  logout: UserResponse;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type Query = {
  __typename?: 'Query';
  article: ArticleResponse;
  articles: ArticlesResponse;
};

export type QueryArticleArgs = {
  input: ArticleInput;
};

export enum Role {
  Admin = 'admin',
  User = 'user',
}

export enum TranslatableErrors {
  UserDoesNotExist = 'user_does_not_exist',
  WrongPassword = 'wrong_password',
}

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  role: Role;
};

export type UserResponse = ErrorResponse | User;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = {
  ArticleResponse: Article | ErrorResponse;
  ArticlesResponse: Articles | ErrorResponse;
  UserResponse: ErrorResponse | User;
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Article: ResolverTypeWrapper<Article>;
  ArticleInput: ArticleInput;
  ArticleResponse: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['ArticleResponse']
  >;
  Articles: ResolverTypeWrapper<Articles>;
  ArticlesResponse: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['ArticlesResponse']
  >;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ErrorBody: ResolverTypeWrapper<ErrorBody>;
  ErrorResponse: ResolverTypeWrapper<ErrorResponse>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  LoginInput: LoginInput;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Role: Role;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  TranslatableErrors: TranslatableErrors;
  User: ResolverTypeWrapper<User>;
  UserResponse: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['UserResponse']
  >;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Article: Article;
  ArticleInput: ArticleInput;
  ArticleResponse: ResolversUnionTypes<ResolversParentTypes>['ArticleResponse'];
  Articles: Articles;
  ArticlesResponse: ResolversUnionTypes<ResolversParentTypes>['ArticlesResponse'];
  Boolean: Scalars['Boolean']['output'];
  ErrorBody: ErrorBody;
  ErrorResponse: ErrorResponse;
  ID: Scalars['ID']['output'];
  LoginInput: LoginInput;
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  User: User;
  UserResponse: ResolversUnionTypes<ResolversParentTypes>['UserResponse'];
};

export type ArticleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']
> = {
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  perex?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ArticleResponse'] = ResolversParentTypes['ArticleResponse']
> = {
  __resolveType: TypeResolveFn<
    'Article' | 'ErrorResponse',
    ParentType,
    ContextType
  >;
};

export type ArticlesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Articles'] = ResolversParentTypes['Articles']
> = {
  articles?: Resolver<
    Array<Maybe<ResolversTypes['Article']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticlesResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ArticlesResponse'] = ResolversParentTypes['ArticlesResponse']
> = {
  __resolveType: TypeResolveFn<
    'Articles' | 'ErrorResponse',
    ParentType,
    ContextType
  >;
};

export type ErrorBodyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ErrorBody'] = ResolversParentTypes['ErrorBody']
> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  translatable?: Resolver<
    Maybe<ResolversTypes['TranslatableErrors']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ErrorResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ErrorResponse'] = ResolversParentTypes['ErrorResponse']
> = {
  error?: Resolver<ResolversTypes['ErrorBody'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  login?: Resolver<
    ResolversTypes['UserResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationLoginArgs, 'input'>
  >;
  logout?: Resolver<ResolversTypes['UserResponse'], ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  article?: Resolver<
    ResolversTypes['ArticleResponse'],
    ParentType,
    ContextType,
    RequireFields<QueryArticleArgs, 'input'>
  >;
  articles?: Resolver<
    ResolversTypes['ArticlesResponse'],
    ParentType,
    ContextType
  >;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserResponse'] = ResolversParentTypes['UserResponse']
> = {
  __resolveType: TypeResolveFn<
    'ErrorResponse' | 'User',
    ParentType,
    ContextType
  >;
};

export type Resolvers<ContextType = any> = {
  Article?: ArticleResolvers<ContextType>;
  ArticleResponse?: ArticleResponseResolvers<ContextType>;
  Articles?: ArticlesResolvers<ContextType>;
  ArticlesResponse?: ArticlesResponseResolvers<ContextType>;
  ErrorBody?: ErrorBodyResolvers<ContextType>;
  ErrorResponse?: ErrorResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserResponse?: UserResponseResolvers<ContextType>;
};
