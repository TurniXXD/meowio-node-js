import * as argon2 from 'argon2';

/**
 * Hashes a password using the Argon2 hashing algorithm.
 *
 * @param {string} password - The password to hash.
 * @returns {Promise<string>} A promise that resolves to the hashed password.
 * @throws {Error} If an error occurs during the hashing process.
 */
export const hashPassword = async (password: string): Promise<string> => {
  try {
    return await argon2.hash(password);
  } catch (err) {
    throw new Error(`Error hashing password: ${err}`);
  }
};

/**
 * Verifies a password against a previously hashed password using the Argon2 hashing algorithm.
 *
 * @param {string} password - The password to verify.
 * @param {string} hashedPassword - The hashed password to compare against.
 * @returns {Promise<boolean>} A promise that resolves to true if the password is verified, or false otherwise.
 * @throws {Error} If an error occurs during the verification process.
 */
export const verifyPassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  try {
    return await argon2.verify(hashedPassword, password);
  } catch {
    return false;
  }
};
