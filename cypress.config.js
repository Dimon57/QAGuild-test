const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    
  },
  e2e: {
    specPattern: [
      "cypress/e2e/spec/**/*cy.{js,jsx,ts,tsx}",
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
