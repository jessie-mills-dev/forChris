/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("Strikeforce", (table) => {
      table.increments('id')
      table.string('deployment_image')
      table.string('mission_rules')
      table.string('battle_size')
      table.integer('mission_number')
    })
  }
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    
  };
  