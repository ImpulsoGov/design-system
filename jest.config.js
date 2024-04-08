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
    '/node_modules/',
    '/dist/',
    '/docs/',
  ],
  coverageProvider: 'babel',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

module.exports = createJestConfig(config);
