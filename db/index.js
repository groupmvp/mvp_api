const mongoose = require('mongoose');

mongoose.connect("mongodb://3.92.214.181:27017/mvp", {
  useNewUrlParser: true    
});

const db = mongoose.connection;

db.on('error', () => console.error('error connecting to MongoDB'));
db.once('open', () => console.log('successfully connected to MongoDB'));

const player = mongoose.Schema({
  username: String,
  password: String,
  balance: Number,
  wins: Number,
  losses: Number,
  rocks_used: Number,
  paper_used: Number,
  scissors_used: Number,
  lizards_used: Number,
  spocks_used: Number,
  is_logged_in: Number,
  email: String

});

const Players = mongoose.model("players", player, 'players');

module.exports = Players;

