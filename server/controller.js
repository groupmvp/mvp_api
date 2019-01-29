const db = require('../db/dbHelpers');

module.exports = {
  // method that will update the players balance 
  updateBalance: (req, res) => {
    res.status(202).send('successful ping to updateBalance route');
  },
};