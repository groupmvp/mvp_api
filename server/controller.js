const db = require('../db/index.js');

module.exports = {
    get: (req, res) => {
      console.log("in get!")
      let {username} = req.query
      db.find({username}, (err, data) => {
        if(err) {
          console.error(err);    
        } else {
          res.status(200).send(data);
        }    
      });
    }
  }