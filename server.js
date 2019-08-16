// use express
const express = require("express");
// require helmet
const helmet = require("helmet");
// require cors
const cors = require("cors");
// require morgan
const morgan = require("morgan");

// projectsRouter
const projectsRouter = require("./users/projects-router.js");

// tasksRouter
const tasksRouter = require("./users/tasks-router.js");

// resourcesRouter
const resourcesRouter = require("./users/resources-router.js");

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
// projects
server.use("/api/projects", projectsRouter);
// tasks
server.use("/api/tasks", tasksRouter);

// resources
server.use("/api/resources", resourcesRouter);

module.exports = server;
