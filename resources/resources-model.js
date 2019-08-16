// require db config
const db = require("../data/db-config.js");

// export methods
module.exports = {
  // resources
  getResources,
  addResource,
};

// resources
// get resources
function getResources() {
  return db("resources");
}
// add resource
function addResource(newResource) {
  return db("resources").insert(newResource);
}
