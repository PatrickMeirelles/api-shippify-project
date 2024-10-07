import { Knex } from "knex";
import { ETableNames } from "../TableNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.vehicles, (table) => {
      table.bigIncrements("id").primary().index();
      table
        .integer("driver_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("driver");
      table.string("plate", 100).notNullable();
      table.string("model", 100).notNullable();
      table.string("type", 20).notNullable();
      table.string("capacity", 20).notNullable();
      table.datetime("creation_date").notNullable().defaultTo(knex.fn.now());
    })
    .then(() => {
      console.log(`Create table - ${ETableNames.vehicles}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.vehicles).then(() => {
    console.log(`Dropped table - ${ETableNames.vehicles}`);
  });
}
