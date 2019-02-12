'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'excel-crm',
    environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: ENV.APP.API_HOST+'/api/users/login',
    identificationField: 'email',
    passwordField: 'password',
    tokenPropertyName: 'id',
    authorizationPrefix: ' ',
    authorizationHeaderName: 'Authorization',
    headers: {},
  };

  ENV['ember-simple-auth'] = {
    authorizer: 'authorizer:token',
    refreshAccessTokens: true,
    timeFactor: 1000,
    refreshLeeway: 300, // Refresh the token 5 minutes (300s) before it expires.
    store: 'ember-simple-auth-session-store:local-storage',
    crossOriginWhitelist: ['*'],
    authenticationRoute: 'login',
    routeAfterAuthentication: 'index',
    routeIfAlreadyAuthenticated: 'index',
    tokenEndpoint: 'auth/login'

  };

  if (environment === 'development') {
    ENV.APP.API_HOST = 'http://localhost:3000';
    ENV.APP.API_NAMESPACE = 'api';
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
