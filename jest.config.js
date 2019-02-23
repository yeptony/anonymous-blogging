module.exports = {
  verbose: true,
  moduleFileExtensions: ['js'],
  testMatch: ['**/*.(test|spec).js'],
  coveragePathIgnorePatterns: ['/node_modules/', 'enzyme.js'],
  setupFilesAfterEnv: ['<rootDir>/enzyme.js'],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMocks.js',
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMocks.js'
  }
}
