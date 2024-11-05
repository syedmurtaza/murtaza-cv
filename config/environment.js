'use strict';

module.exports = function (environment) {
  const allowedLocal = ["http://localhost:4200", "http://localhost/cv", "http://localhost:80"];
  const allowedOnline = ["https://murtaza-kazmi.info"];
  const commonSources = ["'self'", ...allowedLocal, "https://cdnjs.cloudflare.com", "https://cdn.jsdelivr.net"];

  const ENV = {
    modulePrefix: 'murtaza-cv',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      EXTEND_PROTOTYPES: false,
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      contentSecurityPolicy: {
        'default-src': commonSources,
        'script-src': [...commonSources, ...allowedOnline],
        'style-src': [...commonSources, ...allowedOnline],
        'connect-src': ["'self'", ...allowedLocal, ...allowedOnline],
        'img-src': ["'self'", "data:", ...allowedLocal, ...allowedOnline],
        'font-src': ["'self'", "https://cdnjs.cloudflare.com", "https://cdn.jsdelivr.net"],
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    SERVER_API_URL: 'http://murtaza-kazmi.info',
  };

  if (environment === 'development') {
    ENV.SERVER_API_URL = 'http://localhost:80/cv';
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
