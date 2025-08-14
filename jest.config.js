// jest.config.js
module.exports = {
  testEnvironment: 'jsdom', // simulate browser environment
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // setup file
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest' // use Babel for JS/TS and JSX
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'] // recognize these file types
};
