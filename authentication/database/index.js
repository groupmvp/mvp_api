const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Users')

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error'))
connection.once('open', () => console.log('connected to mongoDB'))

module.exports = connection;