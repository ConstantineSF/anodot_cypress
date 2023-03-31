const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    baseUrl: 'https://www.theonlineconverter.co.uk/temperature-converter/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
