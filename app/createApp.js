const map = require('lodash/map');
const error = require('../error');

const createApp = (app) => {
  validateApp(app);
  return app;
};

const validateApp = (app) => {
  if (!app.appName) {
    throw error('app name is required.');
  }
  if (!app.description) {
    throw error('app description is required.');
  }
  if (!app.version) {
    throw error('app version is required.');
  }
  // Validate options later
  if (!app.commands) {
    throw error('app commands map is required.');
  }
  map(app.commands, (modulePath, commandName) => {
    if (!commandName || !commandName.match(/[a-z0-9][a-zA-Z0-9]*/)) {
      throw error(`app command name '${commandName}' not valid.`);
    }
    if (!modulePath) {
      throw error(`module path is required for command '${commandName}'.`);
    }
  });
};

module.exports = createApp;
