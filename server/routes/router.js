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

router.post('/', (req, res) => {
  console.log('in POST');
  let item = req.body;
  console.log(item.name);
  let queryText = `
  INSERT INTO item_list 
    ("name", "quantity", "unit")
  VALUES
      ($1, $2, $3);
  `;
  pool
    .query(queryText, [item.name, item.quantity, item.unit])
    .then(result => res.sendStatus(200))
    .catch(err => res.sendStatus(500))
});




module.exports = router;