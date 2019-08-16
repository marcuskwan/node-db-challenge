exports.up = function(knex) {
  return (
    knex.schema
      // projects table
      .createTable("projects", tbl => {
        // primary key increments (our unique id)
        tbl.increments();
        // name field
        tbl
          .string("name", 128)
          // name is required
          .notNullable();
        // description field
        tbl.text("description");
        // completed field
        tbl
          .boolean("completed")
          // can't be null
          .notNullable()
          // default to false
          .defaultTo(false);
      })
      // tasks table
      .createTable("tasks", tbl => {
        // primary key for tasks
        tbl.increments();
        // required description field
        tbl
          .text("description")
          // required
          .notNullable();
        // optional notes field
        tbl.text("notes");
        // required completed field
        tbl
          .boolean("completed")
          // required
          .notNullable()
          // default value should be false
          .defaultTo(false);
        //? foreign key, client must provide this
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      })

      // resources table
      .createTable("resources", tbl => {
        // primary key for resources
        tbl.increments();
        // name field
        tbl
          .string("name", 128)
          // must be unique
          .unique()
          // required
          .notNullable();
        // optional description field
        tbl.text("description");
        // foreign key
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      })
  );
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("posts").dropTableIfExists("users");
};
