const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "54sjoc",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
