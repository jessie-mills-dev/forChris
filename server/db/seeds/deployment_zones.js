/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('deployment_zones').del()
  await knex('deployment_zones').insert([
    
    {id: 1, name: 'Dawn of War', img_url: 'https://static-asset-delivery.hasbroapps.com/5d7b4adf060f3d11eb9e4b5f9308b71d76daa602/d0a7218e34788705000871131f5ec3a8.png'},
    {id: 2, name: 'Sweeping Engagment', img_url: 'https://static-asset-delivery.hasbroapps.com/5d7b4adf060f3d11eb9e4b5f9308b71d76daa602/d0a7218e34788705000871131f5ec3a8.png'},
    {id: 3, name: 'Crucible of Battle', img_url: 'https://static-asset-delivery.hasbroapps.com/5d7b4adf060f3d11eb9e4b5f9308b71d76daa602/d0a7218e34788705000871131f5ec3a8.png'},
    {id: 4, name: 'Hammer and Anvil', img_url: 'https://static-asset-delivery.hasbroapps.com/5d7b4adf060f3d11eb9e4b5f9308b71d76daa602/d0a7218e34788705000871131f5ec3a8.png'},
    {id: 5, name: 'Search and Destroy', img_url: 'https://static-asset-delivery.hasbroapps.com/5d7b4adf060f3d11eb9e4b5f9308b71d76daa602/d0a7218e34788705000871131f5ec3a8.png'},
    
  ]);
};

