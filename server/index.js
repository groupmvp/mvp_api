const http = require('http');
const app = require('./app');

const port = 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log('successfully connected to server on port', port);
});
server.on('error', (err) => {
  console.log('error occured with app server (server/index.js)', err);
});
