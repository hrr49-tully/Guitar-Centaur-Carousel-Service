module.exports = {
  "setupFiles": ["./spec/setupTest.js"],
  setupFilesAfterEnv: ['<rootDir>/spec/setupTest.js'],
  "moduleNameMapper": {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy"
  },
  "snapshotSerializers": ["enzyme-to-json/serializer"]
};