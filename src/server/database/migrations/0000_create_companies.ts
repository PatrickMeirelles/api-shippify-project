import { Knex } from "knex";
import { ETableNames } from "../TableNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.companies, (table) => {
      table.bigIncrements("id").primary().index();
      table.string("name", 100).notNullable();
      table.integer("city", 100).notNullable();
      table.string("status", 20).notNullable();
      table.string("plan_type", 20).notNullable();
      table.datetime("creation_date").notNullable().defaultTo(knex.fn.now());
    })
    .then(() => {
      console.log(`Create table - ${ETableNames.companies}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.companies).then(() => {
    console.log(`Dropped table - ${ETableNames.companies}`);
  });
}
