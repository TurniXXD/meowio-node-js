module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'js', 'mjs'],
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/mocks/',
    '.mock.ts',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};