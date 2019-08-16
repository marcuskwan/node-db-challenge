// list of endpoint purposes
// adding projects.
// retrieving a list of projects.

const express = require("express");

const projectsModel = require("./projects-model.js");

const router = express.Router();

// GET requests
// GET all projects
router.get("/", (req, res) => {
  projectsModel
    .getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500);
    });
});

// POST requests
// add new project
router.post("/", (req, res) => {
  const newProjectData = req.body;
  projectsModel
    .addProject(newProjectData)
    .then(newProjectId => res.status(200).json(newProjectId))
    .catch(err => res.status(500).json({ error: "Failed to add new project" }));
});

// GET requests
// GET all resources
router.get("/", (req, res) => {
  resourcesModel
    .getResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(error => {
      res.status(500);
    });
});

// POST requests
// add new resource
router.post("/", (req, res) => {
  const newResourceData = req.body;
  resourcesModel
    .addResource(newResourceData)
    .then(newResourceId => res.status(200).json(newResourceId))
    .catch(err =>
      res.status(500).json({ error: "Failed to add new resource" }),
    );
});

module.exports = router;
