module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/coverage', '<rootDir>/dist'],
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@styles/(.*)': '<rootDir>/styles/$1',
    "\\.(css|sass)$": "identity-obj-proxy",
  },
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
