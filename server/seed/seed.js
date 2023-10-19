/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'user',
  password: 'password',
  host: 'localhost',
  port: 5432,
  database: 'meowio',
});

const seedSql = fs.readFileSync('./seed/seed.sql', 'utf8');

async function executeSeedSql() {
  try {
    await pool.query(seedSql);
    console.log('Seed data has been inserted into the database.');
  } catch (err) {
    console.error('Error executing seed data:', err);
  } finally {
    pool.end();
  }
}

executeSeedSql();
