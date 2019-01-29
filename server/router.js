const router = require('express').Router();
const controller = require('./controller');

// define the routes to each controller method below

// route for updating player balances after a match
router.put('/player', controller.updateBalance);

module.exports = router;