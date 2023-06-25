/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('mission_rules').del()
  await knex('mission_rules').insert([
    
    {id: 1, mission_name: 'Chosen Battlefield', mission_details: 'test'},
    {id: 2, mission_name: 'Hidden Supplies', mission_details: 'test'},
    {id: 3, mission_name: 'Minefields', mission_details: 'test'},
    {id: 4, mission_name: 'Delayed Reserves', mission_details: 'test'},
    {id: 5, mission_name: 'Supply Lines', mission_details: 'test'},
    {id: 6, mission_name: 'Targets of Opportunity', mission_details: 'test'},
    {id: 8, mission_name: 'Chilling Rain', mission_details: 'test'},
    {id: 9, mission_name: 'Maelstrom of Battle', mission_details: 'test'},
    {id: 10, mission_name: 'Vox Static', mission_details: 'test'},
    {id: 11, mission_name: 'Scrambler Fields', mission_details: 'test'},
    {id: 12, mission_name: 'Sweep and Clear', mission_details: 'test'},
    {id: 13, mission_name: 'Secret Intel', mission_details: 'test'},

  ]);
};