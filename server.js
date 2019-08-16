// use express
const express = require("express");
// require morgan
const morgan = require("morgan");
// require helmet
const helmet = require("helmet");
// require cors
const cors = require("cors");

// projectsRouter
const projectsRouter = require("./projects/projects-router.js");

// tasksRouter
const tasksRouter = require("./tasks/tasks-router.js");

// resourcesRouter
const resourcesRouter = require("./resources/resources-router.js");

const server = express();

// use morgan
server.use(morgan("dev"));

// use helmet
server.use(helmet());

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
