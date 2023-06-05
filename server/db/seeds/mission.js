/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  
  await knex('mission').del()
  await knex('mission').insert([
    {id: 1, deployment_image: 'https://assetsio.reedpopcdn.com/warhammer-40k-10th-edition-space-marine-models-point.png', mission_rules: 'Tomato', battle_size: 'Incursion', mission_number: 1},
    {id: 2, deployment_image: 'https://www.warhammer-community.com/wp-content/uploads/2023/04/a9puEDKGYOrOTFVt.jpg', mission_rules: 'Potato', battle_size: 'Incursion', mission_number: 2},
    {id: 3, deployment_image: 'https://assetsio.reedpopcdn.com/warhammer-40000-ninth-edition-space-marine-army.jpg', mission_rules: 'Cauliflower', battle_size: 'Incursion', mission_number: 3},
    {id: 4, deployment_image: 'https://www.warhammer-community.com/wp-content/uploads/2023/03/9JurHl3VIttHZM09.jpg', mission_rules: 'Strawberry', battle_size: 'Incursion', mission_number: 4},
    {id: 5, deployment_image: 'https://www.games-workshop.com/resources/touts/2023-04-15/GW-BARange-2023-04-15-LPMulticol-All-bm.jpg', mission_rules: 'Banana', battle_size: 'Incursion', mission_number: 5},
    {id: 6, deployment_image: 'https://www.warhammer-community.com/wp-content/uploads/2023/03/ulc1yVv3Xx7efpjG.jpg', mission_rules: 'Mango', battle_size: 'Incursion', mission_number: 6},
  ]);
};
