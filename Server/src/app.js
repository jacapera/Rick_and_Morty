const express = require('express');
const cors = require('cors');
const router = require('./routes/index');

server = express();

server.use(express.json());
server.use(cors());
server.use("/rickandmorty", router);


module.exports = server;