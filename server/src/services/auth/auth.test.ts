import { Login } from '.';
import { PrismaClient } from '@prisma/client';
import { TranslatableErrors } from '@/generated/graphql';
import { hashPassword, verifyPassword } from './utils';

const database = new PrismaClient();
const mockUser = {
  email: 'not_that_smart@guy.dev',
  password:
    '$argon2id$v=19$m=65536,t=3,p=4$l7jophZugXiGABXFlvrOpQ$J+sG+QbUx+i0rkJGlOmtgonQSBRTdXY5lJXyXjjIDVY',
};

describe('Password Hashing', () => {
  const originalPassword = 'password123';
  let hashedPassword;

  beforeAll(async () => {
    hashedPassword = await hashPassword(originalPassword);
  });

  describe('hashPassword', () => {
    it('should hash a password', async () => {
      const hashed = await hashPassword(originalPassword);
      expect(hashed).toBeDefined();
      expect(hashed).not.toBe(originalPassword);
    });
  });

  describe('verifyPassword', () => {
    it('should verify a correct password', async () => {
      const isValid = await verifyPassword(originalPassword, hashedPassword);
      expect(isValid).toBe(true);
    });

    it('should return false on incorrect password', async () => {
      const isValid = await verifyPassword('incorrectPassword', hashedPassword);
      expect(isValid).toBe(false);
    });
  });
});

describe('Login function', () => {
  it('should return a user when given a valid user', async () => {
    const mockInput = {
      email: 'not_that_smart@guy.dev',
      password: 'St4y_sad',
    };

    const response = await Login({
      deps: { database },
      input: mockInput,
    });

    expect(response.email).toEqual(mockInput.email);
  });

  it('should throw an error when the user does not exist', async () => {
    try {
      await Login({
        deps: { database },
        input: { email: 'nonexistent@example.com', password: 'password' },
      });

      fail('Expected an error to be thrown.');
    } catch (error) {
      expect(error.message).toBe(TranslatableErrors.UserDoesNotExist);
    }
  });

  it('should throw an error when the password is wrong', async () => {
    try {
      await Login({
        deps: { database },
        input: { email: mockUser.email, password: 'wrong_password' },
      });

      fail('Expected an error to be thrown.');
    } catch (error) {
      expect(error.message).toBe(TranslatableErrors.WrongPassword);
    }
  });
});
