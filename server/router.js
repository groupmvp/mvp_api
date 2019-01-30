const router = require('express').Router();
const controller = require('./controller.js')
// define the routes to each controller method below

router.route('/')
  .get(controller.get);


module.exports = router;