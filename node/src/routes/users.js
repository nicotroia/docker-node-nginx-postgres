const express = require('express');

const pool = require('../database');

const router = express.Router();

/* GET users data */
router.get('/', async (req, res, next) => {
  const poolClient = await pool.connect();

  let users;
  try {
    users = await poolClient.query('SELECT * FROM users');
  }
  catch (error) {
    poolClient.release();

    return res.json({
      success: false,
      message: error.message,
    })
  }

  poolClient.release();

  return res.json({
    success: true,
    data: {
      users: users.rows,
    },
    message: process.env.MESSAGE,
  });
});

module.exports = router;
