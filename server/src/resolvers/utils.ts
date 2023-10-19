import { GqlContext } from "@/apolloServer";
import { ErrorResponse, ResolverFn } from "@/generated/graphql";

export const ResolverResponse = (type: string): any => ({
  __resolveType(obj: any) {
    if (obj.error) {
      return 'ErrorResponse';
    }
    return type;
  },
});

/**
 * Wrap resolver call with try / catch
 */
export function withErrorResolver<TResult, TParent, TArgs>(
  resolver: ResolverFn<TResult, TParent, GqlContext, TArgs>
): ResolverFn<TResult | ErrorResponse, TParent, GqlContext, TArgs> {
  return async (parent, args, context, info) => {
    try {
      const result = await resolver(parent, args, context, info);
      return result;
    } catch (err) {
      return {
        error: {
          translatable: err
        }
      };
    }
  };
}