module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      // changes to use resources.db3
      filename: "./data/resources.db3",
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    // needed when using foreign keys
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
      },
    },
  },
};
