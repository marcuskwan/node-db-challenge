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
      res.status(200).json(
        projects.map(project => {
          // check the project_completion value, if it is 1 or truthy, it means it's completed, and we'll change the object to display a completed value
          if (project.project_completion) {
            return { ...project, project_completion: true };
          }
          // the if statement above wil run and immediately stop because of the return, otherwise we'll set to project_completion to false. we can omit the else or another if statement, as the code below will run as a fallback if project_completion isn't true
          return { ...project, project_completion: false };
        }),
      );
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
