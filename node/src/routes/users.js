const express = require('express');

const pool = require('../database');

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  const poolClient = await pool.connect();

  const users = await poolClient.query('SELECT * FROM users');
  console.log('user0', users.rows[0]);

  poolClient.release();

  res.render('index', {
    users,
  });
});

module.exports = router;
