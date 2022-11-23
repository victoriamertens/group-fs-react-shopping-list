let express = require('express');
let router = express.Router();

let pool = require('../modules/pool.js');

pool.get('/', (req, res) => {
  console.log('in get server');
  let queryText = `
  SELECT * 
  FROM 'item-list'
  `;
  req
    .query(queryText)
    .then((result) => res.send(result))
    .catch((error) => {
      res.sendStatus(500);
    });
});
