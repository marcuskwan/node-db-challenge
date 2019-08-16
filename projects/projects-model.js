// require db config
const db = require("../data/db-config.js");

// export methods
module.exports = {
  // projects
  getProjects,
  addProject,
};

// projects
// get projects
function getProjects() {
  return db("projects");
}
// add project
function addProject(newProject) {
  return db("projects").insert(newProject);
}
