import { User as DbUser } from '@prisma/client';
import { Role, User } from '@/generated/graphql';

export const mapDbUserToGql = (user: DbUser): User => {
  const { createdAt, updatedAt, role, password, ...rest } = user;

  return {
    role: role as Role,
    ...rest,
  };
};
