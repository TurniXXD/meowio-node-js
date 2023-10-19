import { LoginInput, TranslatableErrors, User } from '@/generated/graphql';
import { mapDbUserToGql } from '@/mappers';
import { PrismaClient, User as DbUser } from '@prisma/client';
import { verifyPassword } from './utils';

interface ILogin {
  deps: {
    database: PrismaClient;
  };
  input: LoginInput;
}

export const Login = async ({
  deps,
  input: { email, password },
}: ILogin): Promise<User> => {
  let user: DbUser;
  try {
    user = await deps.database.user.findFirst({
      where: {
        email,
      },
    });

  } catch (err: any) {
    throw new Error(TranslatableErrors.UserDoesNotExist);
  }

  if (!user) {
    throw new Error(TranslatableErrors.UserDoesNotExist);
  }

  if (await verifyPassword(password, user.password)) {
    return mapDbUserToGql(user);
  }

  throw new Error(TranslatableErrors.WrongPassword);
};
