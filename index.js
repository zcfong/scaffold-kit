const { createCommand, executeCommand, loadCommand } = require('./command');

const {
  pushInstruction,
  pushInstructions,
  editInstructions,
  executeAllInstructions
} = require('./executor');

const { createApp, startApp } = require('./app');

module.exports = {
  // Command
  createCommand, executeCommand, loadCommand,
  // Execution
  pushInstruction, pushInstructions, editInstructions, executeAllInstructions,
  // App
  createApp, startApp
};
