/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  
  await knex('incursion').del()
  await knex('incursion').insert([
    {id: 1, deployment_image: 'https://assetsio.reedpopcdn.com/warhammer-40k-10th-edition-space-marine-models-point.png', mission_rules: 'This is Mission Number 1, control the battlefield', battle_size: 'Incursion', mission_number: 1},

    {id: 2, deployment_image: 'https://www.warhammer-community.com/wp-content/uploads/2023/04/a9puEDKGYOrOTFVt.jpg', mission_rules: 'This is Mission Number 2, roll dice and kill your foes', battle_size: 'Incursion', mission_number: 2},

    {id: 3, deployment_image: 'https://assetsio.reedpopcdn.com/warhammer-40000-ninth-edition-space-marine-army.jpg', mission_rules: 'This is Mission Number 3, capture the enemy outpost', battle_size: 'Incursion', mission_number: 3},

    {id: 4, deployment_image: 'https://www.warhammer-community.com/wp-content/uploads/2023/03/9JurHl3VIttHZM09.jpg', mission_rules: 'This is Mission Number 4, dont let the enemy in your deployment zone', battle_size: 'Incursion', mission_number: 4},

    {id: 5, deployment_image: 'https://www.games-workshop.com/resources/touts/2023-04-15/GW-BARange-2023-04-15-LPMulticol-All-bm.jpg', mission_rules: 'This is Mission Number 5, slay the enemy warlord', battle_size: 'Incursion', mission_number: 5},

    {id: 6, deployment_image: 'https://www.warhammer-community.com/wp-content/uploads/2023/03/ulc1yVv3Xx7efpjG.jpg', mission_rules: 'This is Mission Number 6, exfiltrate in the enemy deployment zone', battle_size: 'Incursion', mission_number: 6},
  ]);
};
