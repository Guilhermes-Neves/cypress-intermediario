const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true,
      requestMode: true,
      snapshotOnly: true,
      defaultCommandTimeout: 15000,
    },
    experimentalRunAllSpecs: true
  },
  fixturesFolder: false,
  video: false,
});
