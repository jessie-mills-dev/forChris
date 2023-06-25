/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('primary_missions').del()
  await knex('primary_missions').insert([
    
    {id: 1, primary_name: 'Priority Targets', primary_details:'test'},
    {id: 2, primary_name: 'Vital Ground', primary_details: 'test'},
    {id: 3, primary_name: 'Scorched Earth', primary_details:'test'},
    {id: 4, primary_name: 'Purge the Foe', primary_details:'test'},
    {id: 5, primary_name: 'Take and Hold', primary_details:'test'},
    {id: 6, primary_name: 'Supply Drop', primary_details:'test'},
    {id: 7, primary_name: 'The Ritual',primary_details:'test'},
    {id: 8, primary_name: 'Deploy Servo-Skulls', primary_details:'test'},
    {id: 9, primary_name: 'Sites of Power', primary_details:'test'}
    
  ]);
};