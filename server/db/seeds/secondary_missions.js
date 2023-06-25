/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('secondary_missions').del()
  await knex('secondary_missions').insert([
    
    {id: 1, secondary_name: 'Area Denial', secondary_details: 'test'},
    {id: 2, secondary_name: 'Assassination', secondary_details: 'test'},
    {id: 3, secondary_name: 'Behind Enemy Lines', secondary_details: 'test'},
    {id: 4, secondary_name: 'Bring it Down', secondary_details: 'test'},
    {id: 5, secondary_name: 'Capture Enemy Outpost', secondary_details: 'test'},
    {id: 6, secondary_name: 'Cleanse', secondary_details: 'test'},
    {id: 7, secondary_name: 'Defend Stronghold', secondary_details: 'test'},
    {id: 8, secondary_name: 'Deploy Teleport Homer', secondary_details: 'test'},
    {id: 9, secondary_name: 'Engage On All Fronts', secondary_details: 'test'},
    {id: 10, secondary_name: 'Extend Battle Lines', secondary_details: 'test'},
    {id: 11, secondary_name: 'No Prisoners', secondary_details: 'test'},
    {id: 12, secondary_name: 'Overwhelming Force', secondary_details: 'test'},
    {id: 13, secondary_name: "Secure No Man's Land", secondary_details: 'test'},
    {id: 14, secondary_name: 'Storm Hostile Objective', secondary_details: 'test'},
    
  ]);
};