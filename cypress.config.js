const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 800, // default 660
  viewportWidth: 1200, // default 1200
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
  },
});
