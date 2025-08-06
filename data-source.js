const { DataSource } = require('typeorm');
const config = require('./ormconfig.js');

// Only include migrations if this is being used for CLI operations
const cliConfig = {
  ...config,
  migrations: process.env.NODE_ENV === 'cli' ? ['migrations/*.js'] : [],
  entities: ['src/**/*.entity.js'],
};

module.exports = new DataSource(cliConfig);
