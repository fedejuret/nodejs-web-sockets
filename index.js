const path = require('path');
const express = require('express');
require('dotenv').config();

// App de Express
const app = express();

// Node server
const server = require('http').createServer(app);

module.exports.io = require('socket.io')(server);

require('./sockets/chat')
app.use(require('./routes/products'));


const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

server.listen(process.env.PORT, (error) => {

    if (error) throw new Error(error);

    console.log(`Server on port:`, process.env.PORT);

});