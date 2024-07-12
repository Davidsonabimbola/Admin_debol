const { defineConfig } = require("cypress");

// const { defineConfig } = require("cypress");
const dotenv = require('dotenv');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Load environment variables from .env file
      const envConfig = dotenv.config();

      if (envConfig.error) {
        throw envConfig.error;
      }

      // Merge the loaded environment variables with Cypress config
      config.env = { ...config.env, ...envConfig.parsed };

      // Return the updated config object
      return config;
    },
  },
});

