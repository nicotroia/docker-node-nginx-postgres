const { Pool } = require('pg')

// Postgres
const config = {
  // Connection settings
  user: process.env.PG_USER,
  password: process.env.PG_PASS,
  database: process.env.PG_DATABASE,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  // Pool settings
  idleTimeoutMillis: 12000,
  connectionTimeoutMillis: 8000,
  max: 20,
};
const pool = new Pool(config);

pool.on('error', error => {
  logger.error('idle client error', error.message, error.stack);
});

module.exports = pool;
