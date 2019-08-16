// list of endpoint purposes
// adding tasks.
// retrieving a list of tasks.The list of tasks should include the project name and project description.
// When returning project or task information, the completed property should be true or false.

const express = require("express");

const tasksModel = require("./tasks-model.js");

const router = express.Router();

// GET requests
// get all tasks
router.get("/", (req, res) => {
  tasksModel
    .getTasks()
    .then(tasks => res.status(200).json(tasks))
    .catch(err => res.status(500).json({ error: "Couldn't retrieve tasks" }));
});

// POST requests
// add new task
router.post("/", (req, res) => {
  const newTaskData = req.body;
  tasksModel
    .addTask(newTaskData)
    .then(newTaskId => res.status(200).json(newTaskId))
    .catch(err => res.status(500).json({ error: "Couldn't add task" }));
});

module.exports = router;
