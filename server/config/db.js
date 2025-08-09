const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'study_buddy_finder',
  password: '813883',
  port: 5432,
});
module.exports = pool;