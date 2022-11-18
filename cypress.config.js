const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {downloadFile})
    },
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      return config;
  },
    baseUrl: 'http://the-internet.herokuapp.com'
  },
});
