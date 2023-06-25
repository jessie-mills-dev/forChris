/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('gambits').del()
  await knex('gambits').insert([
    
    {id: 1, gambit_name: 'Delaying Tactics', gambit_details: 'This is the gambit detail'},
    {id: 2, gambit_name: 'Emergency Evacuation', gambit_details: 'test'},
    {id: 3, gambit_name: 'Orbital Strike Coordinates', gambit_details: 'test'},
    {id: 4, gambit_name: 'Proceed as Planned', gambit_details: 'test'}

  ]);
};