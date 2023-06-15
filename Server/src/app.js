const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
const morgan = require('morgan');

server = express();

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));
server.use("/rickandmorty", router);


module.exports = server;