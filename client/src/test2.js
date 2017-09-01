const express = require('express');

const router = express.Router();

/* eslint-disable no-return-assign */

router.get('/test2', (req, res) => {
  let info = '';
  const dataFile = req.app.get('testData');
  dataFile.speakers.map(
    item => info += `
      <li>
      <div>${item.name}!!</div>
      </li>
      `
  );
  res.send(`<h2>test2</h2>
  <img src="/images/speakers/Lorenzo_Garcia_tn.jpg" alt="sth">
  ${info}`);
});
module.exports = router;
