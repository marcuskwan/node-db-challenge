// require db config
const db = require("../data/db-config.js");

// export methods
module.exports = {
    // tasks
    getTasks, // needs to return project name and project description
    addTask,
};

// tasks
// get tasks
// needs to return project name and project description, so joining is required
function getTasks() {
    return (
        db("tasks")
            //? does this work with double quotes
            // join the projects table where tasks.project id equals projects.id
            .innerJoin("projects", "tasks.project_id", "=", "projects.id")
            // select what we want: everything from tasks and project name and project description
            .select(
                "tasks.id",
                "tasks.description",
                "tasks.notes",
                "tasks.completed",
                "projects.name",
                "projects.description",
            )
    );
}
// add task
function addTask(newTask) {
    return db("tasks").insert(newTask);
}