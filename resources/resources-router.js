// list of endpoint purposes
// adding resources.
// retrieving a list of resources.

const express = require("express");

const resourcesModel = require("./resources-model.js");

const router = express.Router();

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
