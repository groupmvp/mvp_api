require('dotenv').config();
require('dotenv').load();

const http = require('http')
const { request } = require('https');

const app = require('./app.js')


const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

//set port for app instance to listen to
server.listen(PORT, () => {
  console.log('rest-server listening on port ', PORT);
});

// server.on('error', e => {
//   server.close();
// }
// server.listen(PORT, () => {
//     success('rest-server rebooted');
//   })