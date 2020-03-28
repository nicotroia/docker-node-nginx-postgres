const express = require('express');

const pool = require('../database');

const router = express.Router();

/* GET home page */
router.get('/', async function (req, res, next) {
  const poolClient = await pool.connect();

  const data = await poolClient.query('SELECT $1::text as message', ['Hello from postgres!']);

  poolClient.release();

  res.render('index', {
    title: 'Express',
    message: process.env.MESSAGE,
    pg_data: data.rows[0].message,
  });
});

module.exports = router;
