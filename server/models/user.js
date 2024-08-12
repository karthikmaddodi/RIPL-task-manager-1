const { sql, poolPromise } = require('../db');

async function findUserByUsername(username) {
  const pool = await poolPromise;
  const result = await pool
    .request()
    .input('username', sql.VarChar, username)
    .query('SELECT * FROM Users WHERE username = @username');
  return result.recordset[0];
}

async function createUser(username, password) {
  const pool = await poolPromise;
  await pool
    .request()
    .input('username', sql.VarChar, username)
    .input('password', sql.VarChar, password)
    .query('INSERT INTO Users (username, password) VALUES (@username, @password)');
}

module.exports = {
  findUserByUsername,
  createUser
};
