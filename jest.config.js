const nextJest = require('next/jest');

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  dir: './',
});

const config = {
  collectCoverage: true,
  collectCoverageFrom: [
    'componentes/**/*.{js,jsx}',
    '!componentes/**/*.stories.js',
    '!componentes/**/__data__/*.js',
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/docs/',
  ],
  coverageProvider: 'babel',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/docs/',
    '<rootDir>/pages/',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transformIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/pages/*.tsx',
    '<rootDir>/pages/*.ts'
  ],
};

module.exports = createJestConfig(config);
