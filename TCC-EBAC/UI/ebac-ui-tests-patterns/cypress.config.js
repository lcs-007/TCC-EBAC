const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "ghanvy",

  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br",

    setupNodeEvents(on, config) {
      return config;
    },
  },

  video: true,
  screenshotOnRunFailure: true

});
