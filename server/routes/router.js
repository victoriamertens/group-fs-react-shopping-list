let express = require('express');
let router = express.Router();

let pool = require('../modules/pool.js');

router.get('/', (req, res) => {
  console.log('in get server');
  let queryText = `
  SELECT * 
  FROM "item_list";
  `;
  pool
    .query(queryText)
    .then((result) => res.send(result.rows))
    .catch((error) => {
      res.sendStatus(500);
    });
});
module.exports = router;