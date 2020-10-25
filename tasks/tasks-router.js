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
    .then(tasks => {
      res.status(200).json(
        tasks.map(task => {
          // if task_completion is true, return task but replace the task_completion key with a value of true
          if (task.task_completion) {
            return { ...task, task_completion: true };
          }
          // otherwise, change task_completion to false. we can leave out an else or if statement because if task_completion is true, the if statement above will be run
          return { ...task, task_completion: false };
        }),
      );
    })
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
