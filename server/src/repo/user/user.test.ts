import { Role } from '@/generated/graphql';
import { mockAdminUsers, mockUser, mockUsers } from '@/mocks/user.mock';
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

describe('User Management', () => {
  afterAll(async () => {
    for (const user of mockUsers) {
      await prisma.user.delete({
        where: { id: user.id },
      });
    }
    await prisma.$disconnect();
  });

  it('should create users', async () => {
    for (const user of mockUsers) {
      await prisma.user.create({
        data: user,
      });
    }
  });

  it('should get all users', async () => {
    const users = await prisma.user.findMany();
    const usersFoundFilteredByMockUsersIds: User[] = [];

    for (const user of users) {
      if (mockUsers.find((mu) => mu.id === user.id)) {
        usersFoundFilteredByMockUsersIds.push(user);
      }
    }

    expect(usersFoundFilteredByMockUsersIds.length).toBe(mockUsers.length);
  });

  it('should get a user by email', async () => {
    const emailToFind = mockUser.email;
    const foundUser = await prisma.user.findUnique({
      where: { email: emailToFind },
    });
    expect(foundUser.email).toBe(emailToFind);
  });

  it('should get all admins', async () => {
    const admins = await prisma.user.findMany({
      where: { role: Role.Admin },
    });
    const adminsFoundFilteredByMockUsersIds: User[] = [];

    for (const admin of admins) {
      if (mockUsers.find((mu) => mu.id === admin.id)) {
        adminsFoundFilteredByMockUsersIds.push(admin);
      }
    }

    expect(adminsFoundFilteredByMockUsersIds.length).toBe(
      mockAdminUsers.length
    );
    expect(admins[0].role).toBe(Role.Admin);
  });
});
