import { Role } from '@/generated/graphql';
import { User } from '@prisma/client';

export const mockUsers: User[] = [
  {
    createdAt: new Date('2023-07-26T21:41:38.979Z'),
    updatedAt: new Date('2023-10-19T20:42:29.845Z'),
    id: 'b5cdef90-66d0-4e83-86e2-63b9ff77b33a',
    avatarId: 'avatar-5',
    firstName: 'Jan',
    lastName: 'Bořek',
    email: 'new@guy.dev',
    password:
      '$argon2id$v=19$m=65536,t=3,p=4$x+mrAwkNqqRuyMa8l4p3Ug$8zvAc1OtXsxyu6WTRN6ZIN+db2sy+u1diP2lXO+sDe0',
    role: Role.User,
  },
  {
    createdAt: new Date('2023-11-15T08:30:00.000Z'),
    updatedAt: new Date('2023-11-15T08:30:00.000Z'),
    id: '5b70d91d-0df2-4a0c-b32d-3a32a71ef865',
    avatarId: 'avatar-2',
    firstName: 'Jan',
    lastName: 'Novák',
    email: 'new1@guy.dev',
    password:
      '$argon2id$v=19$m=65536,t=3,p=4$l7jophZugXiGABXFlvrOpQ$J+sG+QbUx+i0rkJGlOmtgonQSBRTdXY5lJXyXjjIDVY',
    role: Role.Admin,
  },
];

export const mockUser = mockUsers[0];
export const mockAdmin = mockUsers[1];
export const mockAdminUsers = mockUsers.filter(
  (user) => user.role === Role.Admin
);
