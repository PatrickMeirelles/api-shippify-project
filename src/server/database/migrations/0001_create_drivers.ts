import { Knex } from "knex";
import { ETableNames } from "../TableNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.drivers, (table) => {
      table.bigIncrements("id").primary().index();
      table
        .integer("company_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("company");
      table.integer("city").notNullable(); //After table 'cities' we can do: .unsigned().notNullable().references('id').inTable('cities'); for this field
      table.string("first_name", 100).notNullable();
      table.string("last_name", 100).notNullable();
      table.string("email", 100).notNullable();
      table.string("phone", 20).notNullable();
      table.string("avatar_url", 200).notNullable();
      table.string("status", 20).notNullable();
      table.datetime("creation_date").notNullable().defaultTo(knex.fn.now());
    })
    .then(() => {
      console.log(`Create table - ${ETableNames.drivers}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.drivers).then(() => {
    console.log(`Dropped table - ${ETableNames.drivers}`);
  });
}
