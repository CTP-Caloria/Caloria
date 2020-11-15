'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('journals',[ 
    {mealType: 'breakfast', createdAt: new Date(),updatedAt: new Date()},
    {mealType: 'lunch', createdAt: new Date(),updatedAt: new Date()},
    {mealType:'dinner',createdAt: new Date(),updatedAt: new Date()},
    {mealType: 'snack',createdAt: new Date(),updatedAt: new Date()}
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('journals', null, {});
  }
};
