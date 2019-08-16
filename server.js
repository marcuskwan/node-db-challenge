// use express
const express = require('express');
// require helmet
const helmet = require('helmet');
// require cors
const cors = require('cors')
// require morgan
const morgan = require('morgan')

const resourcesRouter = require('./users/resources-router.js');

const server = express();

// use helmet
server.use(helmet());

// use morgan
server.use(morgan());

// use cors
server.use(cors());

// use json
server.use(express.json());

// route to use
server.use('/api/resources', resourcesRouter);

module.exports = server;
